// Replace nextjs-vite with the name of your framework
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";

/**
 * An image element with a fallback for representing the user.
 */
const meta: Meta<typeof Avatar> = {
  title: "ui/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="./avatars/actabl.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the avatar.
 */
export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="./avatars/actabl.png" />
      <AvatarFallback>AD</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="0" />
      <AvatarFallback>AD</AvatarFallback>
    </Avatar>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Avatar>
      <UserIcon size={24} />
    </Avatar>
  ),
};
