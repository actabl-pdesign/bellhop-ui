import * as Demos from "./tabs.demo";

export default {
  title: "Application/Tabs",
  decorators: [
    (Story: any) => (
      <div className="flex min-h-screen items-center justify-center bg-primary p-8">
        <Story />
      </div>
    ),
  ],
};

export const ButtonBrandHorizontal = () => <Demos.ButtonBrandHorizontal />;
ButtonBrandHorizontal.storyName = "Button brand horizontal";

export const ButtonBrandVertical = () => <Demos.ButtonBrandVertical />;
ButtonBrandVertical.storyName = "Button brand vertical";

export const UnderlineHorizontal = () => <Demos.UnderlineHorizontal />;
UnderlineHorizontal.storyName = "Underline horizontal";

export const UnderlineVertical = () => <Demos.UnderlineVertical />;
UnderlineVertical.storyName = "Underline vertical";
