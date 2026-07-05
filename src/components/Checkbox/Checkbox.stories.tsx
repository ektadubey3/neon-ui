import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Email me product updates",
    hint: "You can unsubscribe any time."
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true
  }
};
