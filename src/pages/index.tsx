import { Container } from '@mantine/core';
import axios from 'axios';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { Header } from '../components';
import { SerializedMdxPost } from '../types';

const IndexPage = (props) => {
  const { content } = props;
  return (
    <Container>
      <Header />
      <MDXRemote {...content} />
    </Container>
  );
};

export async function getStaticProps() {
  const latestPostRes = await axios.get(
    'http://localhost:3000/api/posts/latest',
  );
  const { data: postData }: { data: SerializedMdxPost } = latestPostRes;
  const { content } = postData;

  // Serialize the content to be used by the MDX component
  const serializedContent = await serialize(content);

  return {
    props: {
      content: serializedContent,
    },
  };
}

export default IndexPage;
