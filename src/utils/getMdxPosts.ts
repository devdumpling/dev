import glob from 'fast-glob';
import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { PostFrontmatter, SerializedMdxPost } from '../types';

export async function getMdxPosts(
  source: string,
): Promise<SerializedMdxPost[]> {
  const contentGlob = [`${source}/**/*.mdx`, `${source}/**/*.md`];
  const files = await glob(contentGlob);

  if (!files || !files.length) {
    return [];
  }

  const mdxPosts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.resolve(file);
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { content: postContent, data } = matter(fileContent);

      const {
        id,
        slug,        
        title,
        subtitle,
        date,
        description,
        categories,
        keywords,
      } = data as PostFrontmatter;

      return {
        frontmatter: {
          id: id || 0,
          description,
          categories,
          keywords,
          slug,          
          title: title || slug,
          subtitle: subtitle || '',
          date: date || new Date().toISOString(),
        },
        content: postContent,
      };
    }),
  );
  return mdxPosts;
}
