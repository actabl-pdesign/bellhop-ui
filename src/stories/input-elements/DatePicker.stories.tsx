import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, DatePicker } from "components";
import { fr } from "date-fns/locale";

const meta: Meta<typeof DatePicker> = {
  title: "UI/Input/DatePicker",
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Components
function Uncontrolled({ ...args }) {
  const [value, setValue] = useState<Date>();

  return (
    <div className="space-y-4">
      <DatePicker
        {...args}
        onValueChange={(value: Date | undefined) => setValue(value)}
      />
      <div className="text-neutral-500">
        <p>Filtered Data</p>
        <p>Date: {String(value)} </p>
      </div>
    </div>
  );
}

function Controlled({ ...args }) {
  const [value, setValue] = useState<Date | undefined>(args.value!);
  return (
    <div className="space-y-4">
      <DatePicker
        {...args}
        value={value}
        onValueChange={(v: Date | undefined) => setValue(v)}
      />
      <DatePicker
        {...args}
        value={value}
        onValueChange={(v: Date | undefined) => setValue(v)}
      />
      <Button
        onClick={() => {
          setValue(undefined);
        }}
      >
        Reset
      </Button>
      <div className="text-neutral-500">
        <p>Filtered Data</p>
        <p>Date: {String(value)} </p>
      </div>
    </div>
  );
}

// Templates

const UncontrolledTemplate: Story = {
  render: ({ ...args }) => <Uncontrolled {...args} />,
};

const ControlledTemplate: Story = {
  render: ({ ...args }) => <Controlled {...args} />,
};

// Stories
export const UncontrolledDefault: Story = {
  ...UncontrolledTemplate,
};

export const UncontrolledDefaultValue: Story = {
  ...UncontrolledTemplate,
  args: {
    defaultValue: new Date(2024, 10, 1),
  },
};

export const UncontrolledDisplayFormat: Story = {
  ...UncontrolledTemplate,
  args: {
    displayFormat: "dd/MM/yyyy",
  },
};

export const UncontrolledFrLocale: Story = {
  ...UncontrolledTemplate,
  args: {
    locale: fr,
    placeholder: "Sélectionnez...",
  },
};

export const UncontrolledMinMax: Story = {
  ...UncontrolledTemplate,
  args: {
    defaultValue: new Date(2024, 10, 1),
    minDate: new Date(2025, 4, 1),
    maxDate: new Date(2025, 4, 15),
  },
};

export const UncontrolledDisabled: Story = {
  ...UncontrolledTemplate,
  args: {
    defaultValue: new Date(2024, 10, 1),
    disabled: true,
  },
};

export const UncontrolledDisabledDates: Story = {
  ...UncontrolledTemplate,
  args: {
    defaultValue: new Date(2025, 10, 25),
    minDate: new Date(2025, 10, 5),
    maxDate: new Date(2025, 10, 28),
    disabledDates: [new Date(2025, 10, 10), new Date(2025, 10, 11)],
  },
};

export const UncontrolledYearNavigation: Story = {
  ...UncontrolledTemplate,
  args: {
    enableYearNavigation: true,
  },
};

export const UncontrolledoutEnableClear: Story = {
  ...UncontrolledTemplate,
  args: {
    defaultValue: new Date(2024, 10, 1),
    enableClear: false,
  },
};

export const UncontrolledWeekStartsOnWednesday: Story = {
  ...UncontrolledTemplate,
  args: {
    defaultValue: new Date(2024, 10, 1),
    weekStartsOn: 3,
  },
};

export const ControlledDefault: Story = {
  ...ControlledTemplate,
};

export const ControlledDefaultValue: Story = {
  ...ControlledTemplate,
  args: {
    defaultValue: new Date(2024, 10, 1),
  },
};
