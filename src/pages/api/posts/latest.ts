import type { NextApiRequest, NextApiResponse } from 'next';
import * as matter from 'gray-matter';
import glob from 'fast-glob';

// iterate over each file in posts and return the one with the highest id
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await import('../../posts');

  const latest = Object.values(posts).reduce(
    (acc, post) => (post?.id > acc?.id ? post : acc),
    { id: 0 },
  );

  res.status(200).json(latest);
};
