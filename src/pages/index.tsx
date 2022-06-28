import { Container } from '@mantine/core';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { Header } from '../components';
import { getLatestPost } from '../utils/getLatestPost';

const IndexPage = (props) => {
  const { content } = props;
  return (
    <Container>
      <Header />
      {content && <MDXRemote {...content} />}
    </Container>
  );
};

export async function getStaticProps() {
  const latestPost = await getLatestPost('src/posts');
  const { content } = latestPost;

  // Serialize the content to be used by the MDX component
  const serializedContent = await serialize(content);

  return {
    props: {
      content: serializedContent,
    },
  };
}

export default IndexPage;
