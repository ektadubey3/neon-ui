import type { Meta, StoryObj } from "@storybook/react";
import { DialogDemo } from "./Dialog";

const meta = {
  title: "Components/Dialog",
  component: DialogDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof DialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
