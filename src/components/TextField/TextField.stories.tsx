import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "name@company.com",
    hint: "Use your work email."
  }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Error: Story = {
  args: {
    error: "Enter a valid email address."
  }
};
