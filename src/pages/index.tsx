import { Container } from "@mantine/core";

import { Header } from "../components";

const IndexPage = ({ LatestPost }) => (
  <Container>
    <Header />
    {LatestPost && <LatestPost layout={false} />}
  </Container>
);

export async function getStaticProps() {
  return {
    props: {
      title: "Home",
    },
  };
}

export default IndexPage;
