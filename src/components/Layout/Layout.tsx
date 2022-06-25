import { Container } from "@mantine/core";
import { Header } from "../Header";

export const Layout = ({ meta, children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
