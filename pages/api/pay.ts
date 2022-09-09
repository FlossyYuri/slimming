// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';
import { NextApiRequest, NextApiResponse } from 'next';
import firebaseApp from '../../firebase';
import { allErrorCases, getBearerToken } from '../../utils/payment';
interface RequestBody {
  channel: string;
  username: string;
  phone: string;
  amount: number;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      axios
        .post('https://mpesanode.herokuapp.com/test/pay', {
          channel: 'EBOOK',
          username: 'EMAGRECER',
          amount: 497,
          phone: req.body.mpesaNumber,
        })
        .then(async (response) => {
          const db = getFirestore(firebaseApp);
          const docRef = await addDoc(collection(db, 'ebooks'), {
            ...req.body,
            transactionID: response.data.data.output_TransactionID,
          });
          console.log('Document written with ID: ', docRef.id);
          console.log(response);
          res.status(201).send('Sucesso');
        })
        .catch((e) => {
          res.status(400).json({
            message: e.response?.data?.message || 'Erro a realizar pagamento',
          });
        });
    default:
      break;
  }
}

const nativePayments = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: RequestBody = { ...req.body };
  const now = new Date().getTime().toString();
  const channel = data.channel.toUpperCase();
  const username = data.username.toLowerCase();
  const ref = channel.substring(0, 20 - now.length);
  const token = getBearerToken(
    process.env.MPESA_PUBLIC_KEY || '',
    process.env.MPESA_API_KEY || ''
  );
  await axios
    .post(
      process.env.MPESA_API_HOST || '',
      {
        input_TransactionReference: `${ref}${now}`,
        input_CustomerMSISDN: `258${data.phone}`,
        input_Amount: data.amount,
        input_ThirdPartyReference: `${channel}${username}${now}`,
        input_ServiceProviderCode: process.env.MPESA_SERVICE_PROVIDER_CODE,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
          Origin: '*',
        },
      }
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
      allErrorCases(res, err.response.data);
    });
};
