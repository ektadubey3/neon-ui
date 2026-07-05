import type { Meta, StoryObj } from "@storybook/react";
import { Download, Settings, Trash2 } from "lucide-react";
import { IconButton } from "./IconButton";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    label: "Settings",
    children: <Settings />
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Toolbar: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <IconButton label="Download" variant="outlined">
        <Download />
      </IconButton>
      <IconButton label="Settings">
        <Settings />
      </IconButton>
      <IconButton label="Delete" variant="filled">
        <Trash2 />
      </IconButton>
    </div>
  )
};
