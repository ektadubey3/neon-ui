import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Workspace usage</CardTitle>
        <Badge tone="brand">Pro</Badge>
      </CardHeader>
      <CardContent>
        <p>42,800 events processed this month across three production projects.</p>
      </CardContent>
    </Card>
  )
};
