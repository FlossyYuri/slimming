const crypto = require('crypto');
const constants = require('constants');

export const getTransaction = (
  data: any,
  now: any
): {
  id?: string;
  status?: string;
  ref: string;
  thirdPartyRef: string;
  amount: number;
  phone: number;
  channel: string;
  username: string;
  createdAt: number;
} => {
  const channel = data.channel.toUpperCase();
  const username = data.username.toLowerCase();
  const ref = channel.substring(0, 20 - now.length);
  return {
    ref: `${ref}${now}`,
    thirdPartyRef: `${channel}${username}${now}`,
    amount: Number(data.amount),
    phone: data.phone,
    channel,
    username,
    createdAt: Number(now),
  };
};

export const c2b = async (mpesa: any, transaction: any) => {
  return await mpesa.initiate_c2b(
    transaction.amount,
    Number(`258${transaction.phone}`),
    transaction.ref,
    transaction.thirdPartyRef
  );
};

export const registerTransaction = (transaction: any, db: any, mode: any) => {
  const collection = mode === 'PRODUCTION' ? 'payments' : 'tests';
  db.collection(collection)
    .doc(transaction.id)
    .set(transaction)
    .then(() => {
      // console.log(docRef);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export function getBearerToken(
  mpesa_public_key: string,
  mpesa_api_key: string
) {
  const publicKey =
    '-----BEGIN PUBLIC KEY-----\n' +
    mpesa_public_key +
    '\n' +
    '-----END PUBLIC KEY-----';
  const buffer = Buffer.from(mpesa_api_key);
  const encrypted = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: constants.RSA_PKCS1_PADDING,
    },
    buffer
  );
  return encrypted.toString('base64');
}
export const successCase = (resp: any, data: any) => {
  if (data.output_ResponseCode === 'INS-0')
    resp.status(200).json({ message: 'ok', data });
  else
    resp.status(500).json({
      message: 'Oopss, Algo de errado ocorreu.',
      data,
    });
};

export const allErrorCases = (resp: any, error: any) => {
  switch (error.output_ResponseCode) {
    case 'INS-1':
      resp.status(500).json({ message: 'Erro Interno', error });
      break;
    case 'INS-5':
      resp.status(400).json({ message: 'O Você cancelou a transação', error });
      break;
    case 'INS-6':
      resp.status(400).json({ message: 'A transação falhou', error });
      break;
    case 'INS-9':
      resp.status(408).json({ message: 'Você levou muito tempo', error });
      break;
    case 'INS-10':
      resp.status(409).json({ message: 'Transação Duplicada', error });
      break;
    case 'INS-14':
    case 'INS-19':
      resp.status(400).json({ message: 'Referencia Invalida', error });
      break;
    case 'INS-995':
      resp.status(400).json({
        message: 'Existe algum problema com o seu perfil, contacte a VODACOM',
        error,
      });
      break;
    case 'INS-996':
      resp.status(400).json({
        message: 'Conta não está ativa',
        error,
      });
      break;
    case 'INS-2006':
      resp.status(422).json({
        message: 'O seu saldo é insuficiente',
        error,
      });
      break;
    case 'INS-2051':
      resp.status(400).json({
        message: 'Este numero de telefone é inválido.',
        error,
      });
      break;
    default:
      resp.status(500).json({
        message: 'Oouupss, Algo de errado ocorreu.',
        error,
      });
  }
};
