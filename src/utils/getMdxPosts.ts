import glob from 'fast-glob';
import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { PostFrontmatter } from '../types';

export async function getMdxPosts(source: string) {
  const contentGlob = `${source}/**/*.mdx`;
  const files = await glob(contentGlob);

  if (!files || !files.length) {
    return [];
  }

  const mdxPosts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.resolve(file);
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { content: postContent, data } = matter(fileContent);
            
      const { id, slug, author } = data as PostFrontmatter;

      return {
        frontmatter: {
          id,
          slug,
          author,
        },
        content: postContent,
      };
    }),
  );
  return mdxPosts;
}
