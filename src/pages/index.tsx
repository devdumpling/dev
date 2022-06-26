import { Container } from '@mantine/core';
import axios from 'axios';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { Header } from '../components';
import { MdxPostType } from '../types';


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
  const { data: postData }: { data: MdxPostType } = latestPostRes;
  const content = await serialize(postData.content);

  return {
    props: {
      content: content,
    },
  };
}

export default IndexPage;
