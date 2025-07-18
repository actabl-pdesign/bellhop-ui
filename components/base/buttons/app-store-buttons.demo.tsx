"use client";

import {
  AppStoreButton,
  GooglePlayButton,
} from "@/components/base/buttons/app-store-buttons";
import {
  AppStoreButton as AppStoreButtonOutline,
  GooglePlayButton as GooglePlayButtonOutline,
} from "@/components/base/buttons/app-store-buttons-outline";

export const AppStoreButtonDefaultDemo = () => {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row">
      <GooglePlayButton size="md" />
      <AppStoreButton size="md" />
    </div>
  );
};

export const AppStoreButtonGooglePlayDemo = () => {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row">
      <GooglePlayButton size="md" />
      <GooglePlayButton size="lg" />
    </div>
  );
};

export const AppStoreButtonAppStoreDemo = () => {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row">
      <AppStoreButton size="md" />
      <AppStoreButton size="lg" />
    </div>
  );
};

export const AppStoreButtonGooglePlayOutlineDemo = () => {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row">
      <GooglePlayButtonOutline size="md" />
      <GooglePlayButtonOutline size="lg" />
    </div>
  );
};

export const AppStoreButtonAppStoreOutlineDemo = () => {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row">
      <AppStoreButtonOutline size="md" />
      <AppStoreButtonOutline size="lg" />
    </div>
  );
};

export const Md = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-8">
        <GooglePlayButton size="md" />
        <AppStoreButton size="md" />
      </div>
      <div className="flex items-start gap-8">
        <GooglePlayButtonOutline size="md" />
        <AppStoreButtonOutline size="md" />
      </div>
    </div>
  );
};

export const Lg = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-8">
        <GooglePlayButton size="lg" />
        <AppStoreButton size="lg" />
      </div>
      <div className="flex items-start gap-8">
        <GooglePlayButtonOutline size="lg" />
        <AppStoreButtonOutline size="lg" />
      </div>
    </div>
  );
};
