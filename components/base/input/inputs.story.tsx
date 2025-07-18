import * as Inputs from "@/components/base/input/inputs.demo";

export default {
  title: "Base components/Inputs",
  decorators: [
    (Story: any) => (
      <div className="flex min-h-screen w-full bg-primary p-4">
        <Story />
      </div>
    ),
  ],
};

const DefaultDecorator = (Story: any) => (
  <div className="w-full max-w-xs">
    <Story />
  </div>
);

const WiderDecorator = (Story: any) => (
  <div className="w-full max-w-100">
    <Story />
  </div>
);

export const Default = () => <Inputs.Default />;
Default.decorators = [DefaultDecorator];

export const LeadingIcon = () => <Inputs.LeadingIcon />;
LeadingIcon.decorators = [DefaultDecorator];
LeadingIcon.storyName = "Leading icon";

export const LeadingDropdown = () => <Inputs.LeadingDropdown />;
LeadingDropdown.decorators = [DefaultDecorator];
LeadingDropdown.storyName = "Leading dropdown";

export const TrailingDropdown = () => <Inputs.TrailingDropdown />;
TrailingDropdown.decorators = [DefaultDecorator];
TrailingDropdown.storyName = "Trailing dropdown";

export const LeadingText = () => <Inputs.LeadingText />;
LeadingText.decorators = [DefaultDecorator];
LeadingText.storyName = "Leading text";

export const TrailingButton = () => <Inputs.TrailingButton />;
TrailingButton.decorators = [WiderDecorator];
TrailingButton.storyName = "Trailing button";
