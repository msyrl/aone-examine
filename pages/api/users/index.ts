import type { NextApiRequest, NextApiResponse } from "next";
import { support, users } from "../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    page: 1,
    per_page: 10,
    total: users.length,
    total_pages: Math.ceil(users.length / 10),
    data: users,
    support,
  });
}
