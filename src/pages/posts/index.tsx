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
      <Title>Posts</Title>
      <List
        spacing="md"
        styles={{
          item: {
            listStyleType: 'none',
          },
        }}
      >
        {posts.map((post) => (
          <List.Item icon={null} key={post.frontmatter.id}>
            <Link href={`/posts/${post.frontmatter.slug}`} passHref>
              <Paper
                sx={(theme) => ({
                  '&:hover': {
                    backgroundColor: theme.colors.gray[0],
                  },
                })}
                p="sm"
                radius="xs"
                component="a"
                target="_blank"
              >
                <Title order={2}>{post.frontmatter.title}</Title>
                {post.frontmatter.subtitle && (
                  <Text>{post.frontmatter.subtitle}</Text>
                )}
                <Text color="dimmed">{post.frontmatter.createdAt}</Text>
              </Paper>
            </Link>
            <Divider mt="xs" />
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
