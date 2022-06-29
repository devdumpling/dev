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
      <Title ml="sm">Posts</Title>
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
          <List.Item key={post.frontmatter.id}>
            <Link href={`/posts/${post.frontmatter.slug}`} passHref>
              <Paper
                sx={(theme) => ({
                  '&:hover': {
                    borderLeft: `3px solid ${theme.colors.violet[4]}`,
                    paddingLeft: '9px',
                  },
                })}
                p="sm"
                radius="xs"
                component="a"
              >
                <Title order={2}>{post.frontmatter.title}</Title>
                {post.frontmatter.subtitle && (
                  <Text>{post.frontmatter.subtitle}</Text>
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
