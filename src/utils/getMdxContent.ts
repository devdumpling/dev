import matter from 'gray-matter';
import glob from 'fast-glob';
import path from 'path';
import { promises as fs } from 'fs';

export async function getMdxContent(source: string) {
  const contentGlob = `${source}/**/*.mdx`;
  const files = await glob(contentGlob);

  if (!files || !files.length) {
    return [];
  }

  const content = await Promise.all(
    files.map(async (file) => {
      const filePath = path.resolve(file);
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { content: postContent, data } = matter(fileContent);

      return {
        author: data.author || 'Anonymous',
        id: data.id,
        slug: data.slug,
        content: postContent,
      };
    }),
  );
  return content;
}
