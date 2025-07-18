import * as Demos from "./featured-icons.demo";

export default {
  title: "Base components/Featured Icons",
  decorators: [
    (Story: any) => (
      <div className="flex min-h-screen w-full overflow-auto bg-primary p-8">
        <Story />
      </div>
    ),
  ],
};

export const Light = () => <Demos.LightDemo />;

export const Modern = () => <Demos.ModernDemo />;
