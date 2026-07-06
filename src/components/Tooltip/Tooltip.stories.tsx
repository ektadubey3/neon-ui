import type { Meta, StoryObj } from "@storybook/react";
import { Info } from "lucide-react";
import { IconButton } from "../IconButton/IconButton";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"]
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    content: "More information",
    children: (
      <IconButton label="More information" variant="outlined">
        <Info />
      </IconButton>
    )
  }
};
