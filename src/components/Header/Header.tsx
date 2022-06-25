import { Paper, Group, Title, Text, Box, Anchor } from "@mantine/core";
import { DarkModeToggle } from "../DarkModeToggle";

export const Header = () => (
  <Paper shadow="xs" p="md" my="sm">
    <Group position="apart">
      <Box>
        <Title>Hi, I'm Dev</Title>
        <Text>Stay a while if you like.</Text>
      </Box>
      <DarkModeToggle />
    </Group>
    <Group position="right">
      <Anchor href="/about">About</Anchor>
      <Anchor href="/posts">Posts</Anchor>
    </Group>
  </Paper>
);
