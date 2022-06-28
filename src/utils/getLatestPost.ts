import { getMdxPosts } from './getMdxPosts';

export const getLatestPost = async (source: string) => {
  const posts = await getMdxPosts(source);

  if (!posts || !posts.length) {
    return null;
  }

  const latest = Object.values(posts).reduce((acc, post) =>
    post?.frontmatter?.id > acc?.frontmatter?.id ? post : acc,
  );

  return latest;
};
