import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    items: [
      { id: "overview", label: "Overview", content: "Review account health, usage, and current plan details." },
      { id: "members", label: "Members", content: "Invite teammates, change roles, and manage access." },
      { id: "billing", label: "Billing", content: "Update payment methods and download invoices." }
    ]
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
