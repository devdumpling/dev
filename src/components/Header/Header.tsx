import { Paper, Group, Title, Text, Box, Anchor, Stack } from '@mantine/core';
import { DarkModeToggle } from '../DarkModeToggle';

export const Header = () => (
  <Paper shadow="xs" p="md" my="sm">
    <Group position="apart" align="end">
      <Box>
        <Title>Hi, I'm Dev</Title>
        <Text>Stay a while if you like.</Text>
      </Box>
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
