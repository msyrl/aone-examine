import type { NextApiRequest, NextApiResponse } from "next";
import { support, users } from "../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = users.find((user) => user.id === Number(req.query.id));

  if (!user) {
    res.status(404).json({});
  } else {
    res.status(200).json({
      data: user,
      support,
    });
  }
}
