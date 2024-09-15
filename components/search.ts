import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, owner, lawFirm, attorney, status } = req.query;

  const apiUrl = `https://api-url.com/search?query=${query}&owner=${owner}&lawFirm=${lawFirm}&attorney=${attorney}&status=${status}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  res.status(200).json(data);
}
