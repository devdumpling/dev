import { Title, Text } from '@mantine/core';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Layout } from '../../components';

import { getMdxPosts } from '../../utils';

const Post = ({ content, frontmatter }) => {
  return (
    <Layout>
      <Title order={2}>{frontmatter.title}</Title>      
      <MDXRemote {...content} frontmatter={frontmatter} />
      <Text color="dimmed">{frontmatter.date}</Text>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getMdxPosts('src/posts');
  const paths = posts.map(({ frontmatter: { slug } }) => ({
    params: {
      slug: slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getMdxPosts('src/posts');
  const postSlug = slug.join('/');
  const [post] = posts.filter((post) => post?.frontmatter.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  // Serialize the content to be used by the MDX component
  const serializedContent = await serialize(post?.content);

  return {
    props: {
      content: serializedContent,
      frontmatter: post?.frontmatter,
    },
  };
}

export default Post;
