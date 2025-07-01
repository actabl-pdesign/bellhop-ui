import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaintbrushIcon } from "lucide-react";
import { Button, Grid } from "components";
import { Sizes as InputSizes } from "lib/constants";

const meta: Meta<typeof Button> = {
  title: "UI/Input/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const SizesTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <Grid numItems={5} className="gap-4">
        {Object.values(InputSizes).map((size) => (
          <>
            <Button
              {...args}
              size={size}
              variant="secondary"
              icon={PaintbrushIcon}
              iconPosition="left"
            >
              Button
            </Button>
          </>
        ))}
      </Grid>
    );
  },
};

const VariantsTemplateIconOnly: Story = {
  render: ({ ...args }) => {
    return (
      <Grid numItems={5} className="gap-4">
        <Button {...args} icon={PaintbrushIcon}></Button>
        <Button {...args} variant="secondary" icon={PaintbrushIcon}></Button>
        <Button {...args} variant="outline" icon={PaintbrushIcon}></Button>
        <Button {...args} variant="ghost" icon={PaintbrushIcon}></Button>
        <Button {...args} variant="destructive" icon={PaintbrushIcon}></Button>
      </Grid>
    );
  },
};

function LoadingState({ ...args }) {
  const [loading, setLoading] = useState(false);
  function RenderButtons(args: any, loading: any) {
    return (
      <>
        <Button {...args} variant="secondary" loading={loading}>
          Button
        </Button>
        <Button {...args} icon={PaintbrushIcon} loading={loading}>
          Button
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setLoading(!loading)}
        color="neutral"
      >
        Click to Load
      </Button>
      <div className="flex flex-col max-w-fit gap-y-3 mt-4">
        <span className="text-bellhop-content text-sm pt-4">
          With base text
        </span>
        {RenderButtons(args, loading)}
      </div>
      <div className="flex flex-col max-w-fit gap-y-3 mt-4">
        <span className="text-bellhop-content text-sm pt-4">
          With loading text
        </span>
        {RenderButtons({ ...args, loadingText: "Loading" }, loading)}
      </div>
    </>
  );
}

const LoadingStateTemplate: Story = {
  render: ({ ...args }) => <LoadingState {...args} />,
};

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Sizes: Story = {
  ...SizesTemplate,
  args: {
    onClick: () => alert(2),
    className: "max-w-fit",
  },
};

export const IconOnly: Story = {
  ...VariantsTemplateIconOnly,
  args: {
    onClick: () => alert(2),
    className: "max-w-fit",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const TooltipDisabled: Story = {
  args: {
    children: "Disabled",
    tooltip: "Disabled",
    disabled: true,
  },
};

export const LoadingStates: Story = {
  ...LoadingStateTemplate,
  args: {},
};
