import * as Badges from "@/components/base/badges/badges.demo";

export default {
  title: "Base components/Badges",
  decorators: [
    (Story: any) => (
      <div className="flex h-screen w-full bg-primary p-4">
        <Story />
      </div>
    ),
  ],
};

export const PillColor = () => <Badges.PillColor />;
PillColor.storyName = "Pill color";

export const BadgeColor = () => <Badges.BadgeColor />;
BadgeColor.storyName = "Badge color";

export const WithDot = () => <Badges.WithDot />;
WithDot.storyName = "With dot";

export const WithDotBadgeColor = () => <Badges.WithDotBadgeColor />;
WithDotBadgeColor.storyName = "With dot badge color";

export const WithAvatar = () => <Badges.WithAvatar />;
WithAvatar.storyName = "With avatar";

export const WithAvatarBadgeColor = () => <Badges.WithAvatarBadgeColor />;
WithAvatarBadgeColor.storyName = "With avatar badge color";

export const WithCloseX = () => <Badges.WithCloseX />;
WithCloseX.storyName = "With close X";

export const WithCloseXBadgeColor = () => <Badges.WithCloseXBadgeColor />;
WithCloseXBadgeColor.storyName = "With close X badge color";

export const WithIconTrailing = () => <Badges.WithIconTrailing />;
WithIconTrailing.storyName = "With icon trailing";

export const WithIconTrailingBadgeColor = () => (
  <Badges.WithIconTrailingBadgeColor />
);
WithIconTrailingBadgeColor.storyName = "With icon trailing badge color";

export const WithIconLeading = () => <Badges.WithIconLeading />;
WithIconLeading.storyName = "With icon leading";

export const WithIconLeadingBadgeColor = () => (
  <Badges.WithIconLeadingBadgeColor />
);
WithIconLeadingBadgeColor.storyName = "With icon leading badge color";

export const WithIconOnly = () => <Badges.WithIconOnly />;
WithIconOnly.storyName = "With icon only";

export const WithIconOnlyBadgeColor = () => <Badges.WithIconOnlyBadgeColor />;
WithIconOnlyBadgeColor.storyName = "With icon only badge color";
