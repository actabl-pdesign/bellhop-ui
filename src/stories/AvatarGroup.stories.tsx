// Replace nextjs-vite with the name of your framework
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AvatarGroup } from "../components/AvatarGroup";

export const users = [
  {
    name: "Jesse Martin",
    url: "/avatars/01.png",
  },
  {
    name: "Quinn Mendes",
    url: "./avatars/03.png",
  },
  {
    name: "Harper Wilson",
    email: "wilson@act.com",
    url: "./avatars/05.png",
  },
  {
    fallback: "ZM",
    name: "Zoltan Morrison",
  },
  {
    name: "Kay Lee",
    url: "./avatars/02.png",
  },
  {
    name: "Alex Kim",
    url: "./avatars/04.png",
  },
  {
    name: "Dim Jackson",
    fallback: "DJ",
    url: "./avatars/06.png",
  },
  {
    name: "Tyler Madson",
    fallback: "TM",
    url: "./avatars/07.png",
  },
  {
    fallback: "TH",
    name: "Tim Hingston",
  },
  {
    fallback: "AV",
    name: "Alex Volston",
    url: "./avatars/avatar_alex_vp-ops.png",
  },
  {
    fallback: "NS",
    name: "Natalie da Silva",
    url: "./avatars/avatar_natalie_concierge.png",
  },
  {
    fallback: "ECH",
    name: "Ethan Clarck",
    url: "./avatars/avatar_ethan_director-eng.png",
  },
];

const meta: Meta<typeof AvatarGroup> = {
  title: "ui/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  excludeStories: ["users"],
};

type Story = StoryObj<typeof AvatarGroup>;
export default meta;

export const Short: Story = {
  render: () => <AvatarGroup avatars={users.slice(0, 3)} />,
};

export const Ellipsized: Story = {
  render: (args) => <AvatarGroup {...args} avatars={users} max={5} />,
};

export const BigUserCount = () => (
  <AvatarGroup avatars={users.slice(0, 100)} max={100} />
);
