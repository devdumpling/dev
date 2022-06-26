import type { NextApiRequest, NextApiResponse } from 'next';
import { getMdxContent } from '../../../utils';

// iterate over each file in posts and return the one with the highest id
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await getMdxContent('src/pages/posts');

  if (!posts || !posts.length) {
    res.status(404).json({
      message: 'No posts found',
    });
  }

  const latest = Object.values(posts).reduce(
    (acc, post) => (post?.id > acc?.id ? post : acc),
    { id: 0 },
  );

  res.status(200).json(latest);
};
