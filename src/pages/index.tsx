import { Container, Title, Text } from '@mantine/core';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { Header } from '../components';
import { Footer } from '../components/Footer';
import { getLatestPost } from '../utils';

const IndexPage = (props) => {
  const { content, frontmatter } = props;
  return (
    <Container>
      <Header />
      {content && (
        <>
          <Title order={2}>{frontmatter.title}</Title>{' '}
          <Text color="dimmed">{frontmatter.date}</Text>
          <MDXRemote {...content} />
        </>
      )}
      <Footer />
    </Container>
  );
};

export async function getStaticProps() {
  const latestPost = await getLatestPost('src/posts');
  const { content, frontmatter } = latestPost;

  // Serialize the content to be used by the MDX component
  const serializedContent = await serialize(content);

  return {
    props: {
      content: serializedContent,
      frontmatter,
    },
  };
}

export default IndexPage;
