import { Paper, Group, ActionIcon, Text } from '@mantine/core';
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Paper my="lg">
      <Group position="center" align="end">
        <Link href="https://www.linkedin.com/in/devon-a-wells/" passHref>
          <ActionIcon title="LinkedIn" component="a">
            <BrandLinkedin />
          </ActionIcon>
        </Link>
        <Link href="https://github.com/devdumpling" passHref>
          <ActionIcon title="GitHub" component="a">
            <BrandGithub />
          </ActionIcon>
        </Link>
        <Link href="mailto:dev@dumpling.dev" passHref>
          <ActionIcon title="Email" component="a">
            <Mail />
          </ActionIcon>
        </Link>
      </Group>
      <Group position="center" my="lg" align="center">
        <Text color="dimmed">Devon Wells © {new Date().getFullYear()}</Text>
      </Group>
    </Paper>
  );
};
