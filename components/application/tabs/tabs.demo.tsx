"use client";

import { useState } from "react";
import type { Key } from "react-aria-components";
import { Tabs } from "@/components/application/tabs/tabs";
import { NativeSelect } from "@/components/base/select/select-native";

const tabs = [
  { id: "details", label: "My details" },
  { id: "profile", label: "Profile" },
  { id: "password", label: "Password" },
  { id: "team", label: "Team" },
  { id: "notifications", label: "Notifications", badge: 2 },
  { id: "integrations", label: "Integrations" },
  { id: "api", label: "API" },
];

export const ButtonBrandHorizontalDemo = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

  return (
    <>
      <NativeSelect
        value={selectedTabIndex as string}
        onChange={(event) => setSelectedTabIndex(event.target.value)}
        options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
        className="w-80 md:hidden"
      />
      <Tabs
        selectedKey={selectedTabIndex}
        onSelectionChange={setSelectedTabIndex}
        className="w-max max-md:hidden"
      >
        <Tabs.List type="button-brand" items={tabs}>
          {(tab) => <Tabs.Item {...tab} />}
        </Tabs.List>
      </Tabs>
    </>
  );
};

export const ButtonBrandVerticalDemo = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

  return (
    <>
      <NativeSelect
        value={selectedTabIndex as string}
        onChange={(event) => setSelectedTabIndex(event.target.value)}
        options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
        className="w-80 md:hidden"
      />
      <Tabs
        orientation="vertical"
        selectedKey={selectedTabIndex}
        onSelectionChange={setSelectedTabIndex}
        className="w-max max-md:hidden"
      >
        <Tabs.List type="button-brand" items={tabs}>
          {(tab) => <Tabs.Item {...tab} />}
        </Tabs.List>
      </Tabs>
    </>
  );
};

export const UnderlineDemo = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

  return (
    <>
      <NativeSelect
        value={selectedTabIndex as string}
        onChange={(event) => setSelectedTabIndex(event.target.value)}
        options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
        className="w-80 md:hidden"
      />
      <Tabs
        selectedKey={selectedTabIndex}
        onSelectionChange={setSelectedTabIndex}
        className="w-max max-md:hidden"
      >
        <Tabs.List type="underline" items={tabs}>
          {(tab) => <Tabs.Item {...tab} />}
        </Tabs.List>
      </Tabs>
    </>
  );
};

export const LineDemo = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

  return (
    <>
      <NativeSelect
        value={selectedTabIndex as string}
        onChange={(event) => setSelectedTabIndex(event.target.value)}
        options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
        className="w-80 md:hidden"
      />
      <Tabs
        orientation="vertical"
        selectedKey={selectedTabIndex}
        onSelectionChange={setSelectedTabIndex}
        className="w-max max-md:hidden"
      >
        <Tabs.List type="line" items={tabs}>
          {(tab) => <Tabs.Item {...tab} />}
        </Tabs.List>
      </Tabs>
    </>
  );
};

const GenericTabs = (props: {
  size?: "sm";
  orientation?: "horizontal" | "vertical";
  type: "underline" | "line" | "button-brand";
}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

  return (
    <>
      <div className="md:hidden">
        <NativeSelect
          value={selectedTabIndex as string}
          onChange={(event) => setSelectedTabIndex(event.target.value)}
          options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
        />
      </div>
      <Tabs
        orientation={props.orientation}
        selectedKey={selectedTabIndex}
        onSelectionChange={setSelectedTabIndex}
        className="max-md:hidden"
      >
        <Tabs.List {...props} type={props.type} items={tabs}>
          {(tab) => <Tabs.Item {...tab} />}
        </Tabs.List>
      </Tabs>
    </>
  );
};

export const ButtonBrandHorizontal = () => (
  <div className="flex flex-col gap-16">
    <GenericTabs type="button-brand" />
  </div>
);

export const ButtonBrandVertical = () => (
  <div className="flex gap-16">
    <GenericTabs type="button-brand" orientation="vertical" />
  </div>
);

export const UnderlineHorizontal = () => (
  <div className="flex flex-col gap-16">
    <GenericTabs type="underline" />
  </div>
);

export const UnderlineVertical = () => (
  <div className="flex gap-16">
    <GenericTabs type="line" orientation="vertical" />
  </div>
);
