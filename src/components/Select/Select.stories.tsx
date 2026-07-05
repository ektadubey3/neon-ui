import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Role",
    placeholder: "Select role",
    defaultValue: "",
    options: [
      { label: "Admin", value: "admin" },
      { label: "Editor", value: "editor" },
      { label: "Viewer", value: "viewer" }
    ]
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithHint: Story = {
  args: {
    hint: "Controls access across this workspace."
  }
};
