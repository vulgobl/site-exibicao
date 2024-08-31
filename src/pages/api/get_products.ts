import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const domain = process.env.SELF_DOMAIN;
  if (req.method == 'GET') {
    res.status(200).json([{
      thumbnail: `${domain}/CLOUD_UNIVERSAL.png`
    }]);
  } else {
    res.status(404).json({
      message: `Não é possível fazer um ${req.method} nesta rota`
    });
  }
}
