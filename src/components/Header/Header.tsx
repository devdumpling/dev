import { Paper, Group, Title, Text, Box, Anchor, Stack } from '@mantine/core';
import Link from 'next/link';
import { DarkModeToggle } from '../DarkModeToggle';

export const Header = ({
  title = "Hi, I'm Dev",
  subtitle = 'Stay a while if you like.',
}) => {
  return (
    <Paper shadow="xs" p="md" my="sm">
      <Group position="apart" align="end">
        <Link href="/" passHref>
          <Box>
            <Title>{title}</Title>
            <Text>{subtitle}</Text>
          </Box>
        </Link>
        <Stack align="flex-end" spacing="xs">
          <DarkModeToggle />
          <Group position="right">
            <Anchor href="/about">About</Anchor>
            <Anchor href="/posts">Posts</Anchor>
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
};
