import { Container } from '@mantine/core';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
