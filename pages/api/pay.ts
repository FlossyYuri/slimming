// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
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
      const data: RequestBody = { ...req.body };
      const now = new Date().getTime().toString();
      const channel = data.channel.toUpperCase();
      const username = data.username.toLowerCase();
      const ref = channel.substring(0, 20 - now.length);
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
              Authorization:
                'Bearer ' +
                getBearerToken(
                  process.env.MPESA_PUBLIC_KEY || '',
                  process.env.MPESA_API_KEY || ''
                ),
              Origin: '*',
            },
          }
        )
        .then((response) => {
          res.status(200).json(response.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          allErrorCases(res, err.response.data);
        });
    default:
      break;
  }
}
