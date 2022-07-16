import { Text, Divider, List, Title, Paper } from '@mantine/core';
import Link from 'next/link';

import { Layout } from '../../components';
import { SerializedMdxPost } from '../../types';
import { getMdxPosts } from '../../utils';

interface PostPageProps {
  posts: SerializedMdxPost[];
}

const PostsPage = (props: PostPageProps) => {
  const { posts } = props;

  return (
    <Layout>
      <List
        mt="sm"
        spacing="md"
        styles={{
          item: {
            listStyleType: 'none',
          },
        }}
      >
        {posts.map((post) => (
          <List.Item key={post.frontmatter.slug}>
            <Link href={`/posts/${post.frontmatter.slug}`} passHref>
              <Paper
                sx={(theme) => ({
                  '&:hover': {
                    borderLeft: `3px solid ${theme.colors.violet[4]}`,
                    transition:
                      'border-left 0.2s ease-in-out, padding-left 0.2s ease-in-out',
                    paddingLeft: '1rem',
                  },
                })}
                p="sm"
                radius="xs"
                component="a"
              >
                <Title order={3}>{post.frontmatter.title}</Title>
                {post.frontmatter.description && (
                  <Text>{post.frontmatter.description}</Text>
                )}
                <Text color="dimmed">{post.frontmatter.date}</Text>
                <Divider mt="xs" />
              </Paper>
            </Link>
          </List.Item>
        ))}
      </List>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getMdxPosts('src/posts');

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
