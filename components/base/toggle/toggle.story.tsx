import * as ToggleComponents from "@/components/base/toggle/toggle.demo";

export default {
  title: "Base components/Toggles",
  decorators: [
    (Story: any) => (
      <div className="flex min-h-screen w-full bg-primary p-4">
        <Story />
      </div>
    ),
  ],
};

export const Toggles = () => <ToggleComponents.Toggles />;

export const ToggleBase = () => <ToggleComponents.ToggleBase />;
ToggleBase.storyName = "Toggle base";