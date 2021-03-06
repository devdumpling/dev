import { Paper, Group, Title, Text, Box, Anchor, Stack } from '@mantine/core';
import Link from 'next/link';
import { DarkModeToggle } from '../DarkModeToggle';

export const Header = ({
  title = 'Dev 📓 Journal ',
  subtitle = 'Notes and rants.',
}) => {
  return (
    <Paper my="sm">
      <Group position="apart" align="end">
        <Link href="/" passHref>
          <Box style={{ cursor: 'pointer' }}>
            <Title>{title}</Title>
            <Text>{subtitle}</Text>
          </Box>
        </Link>
        <Stack align="flex-end" spacing="xs">
          <DarkModeToggle />
          <Group position="right">
            <Anchor href="/posts">posts</Anchor>
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
};
