import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    label: "Enable notifications",
    hint: "Receive alerts for account activity."
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const On: Story = {
  args: {
    defaultChecked: true
  }
};
