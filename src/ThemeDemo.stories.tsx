import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./components/Badge/Badge";
import { Button } from "./components/Button/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/Card/Card";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { TextField } from "./components/TextField/TextField";

const meta = {
  title: "Design System/Theme Demo",
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const RepresentativeComponents: Story = {
  render: () => (
    <Card elevated style={{ width: "min(520px, calc(100vw - 48px))" }}>
      <CardHeader>
        <CardTitle>Sapphire Trust controls</CardTitle>
        <Badge tone="brand">Stable</Badge>
      </CardHeader>
      <CardContent>
        <div style={{ display: "grid", gap: 16 }}>
          <p>
            Representative controls share semantic tokens for surfaces, borders, text,
            focus rings, and status colors.
          </p>
          <TextField label="Workspace" defaultValue="Production systems" hint="Theme-aware native input." />
          <Checkbox label="Require approval" hint="A visible state with supportive copy." defaultChecked />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Button>Review changes</Button>
            <Button variant="secondary">View audit log</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
};
