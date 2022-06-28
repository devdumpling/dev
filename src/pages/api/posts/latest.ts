import type { NextApiRequest, NextApiResponse } from 'next';
import { getLatestPost } from '../../../utils/getLatestPost';

// iterate over each file in posts and return the one with the highest id
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const latest = await getLatestPost('src/posts');

  if (!latest) {
    res.status(404).json({
      message: 'Could not find latest post',
    });
  }

  res.status(200).json(latest);
};
