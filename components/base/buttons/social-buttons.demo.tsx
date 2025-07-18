"use client";

import { SocialButton } from "@/components/base/buttons/social-button";


export const SocialButtonGroupBrandDemo = () => {
  return (
    <div className="flex w-90 flex-col gap-3">
      <SocialButton social="google" theme="brand">
        Sign in with Google
      </SocialButton>
      <SocialButton social="facebook" theme="brand">
        Sign in with Facebook
      </SocialButton>
      <SocialButton social="apple" theme="brand">
        Sign in with Apple
      </SocialButton>
    </div>
  );
};

export const SocialButtonGroupIconsBrandDemo = () => {
  return (
    <div className="grid w-90 grid-cols-3 gap-3">
      <SocialButton social="google" theme="brand" />
      <SocialButton social="facebook" theme="brand" />
      <SocialButton social="apple" theme="brand" />
    </div>
  );
};

export const SocialButtonGroupColorDemo = () => {
  return (
    <div className="flex w-90 flex-col gap-3">
      <SocialButton social="google" theme="color">
        Sign in with Google
      </SocialButton>
      <SocialButton social="facebook" theme="color">
        Sign in with Facebook
      </SocialButton>
      <SocialButton social="apple" theme="color">
        Sign in with Apple
      </SocialButton>
    </div>
  );
};

export const SocialButtonGroupIconsColorDemo = () => {
  return (
    <div className="grid w-90 grid-cols-3 gap-3">
      <SocialButton social="google" theme="color" />
      <SocialButton social="facebook" theme="color" />
      <SocialButton social="apple" theme="color" />
    </div>
  );
};

export const SocialButtonGroupGrayDemo = () => {
  return (
    <div className="flex w-90 flex-col gap-3">
      <SocialButton social="google" theme="gray">
        Sign in with Google
      </SocialButton>
      <SocialButton social="facebook" theme="gray">
        Sign in with Facebook
      </SocialButton>
      <SocialButton social="apple" theme="gray">
        Sign in with Apple
      </SocialButton>
    </div>
  );
};

export const SocialButtonGroupIconsGrayDemo = () => {
  return (
    <div className="grid w-90 grid-cols-3 gap-3">
      <SocialButton social="google" theme="gray" />
      <SocialButton social="facebook" theme="gray" />
      <SocialButton social="apple" theme="gray" />
    </div>
  );
};

export const SocialButtonGroups = () => {
  return (
    <div>
      <div className="mb-4 flex items-start gap-8">
        <div className="flex w-90 flex-col gap-3">
          <SocialButton social="google" theme="brand">
            Sign in with Google
          </SocialButton>
          <SocialButton social="facebook" theme="brand">
            Sign in with Facebook
          </SocialButton>
          <SocialButton social="apple" theme="brand">
            Sign in with Apple
          </SocialButton>
        </div>
        <div className="grid w-90 grid-cols-3 justify-items-start gap-3">
          <SocialButton social="google" theme="brand" />
          <SocialButton social="facebook" theme="brand" />
          <SocialButton social="apple" theme="brand" />
        </div>
      </div>

      <div className="mb-4 flex items-start gap-8">
        <div className="flex w-90 flex-col gap-3">
          <SocialButton social="google" theme="color">
            Sign in with Google
          </SocialButton>
          <SocialButton social="facebook" theme="color">
            Sign in with Facebook
          </SocialButton>
          <SocialButton social="apple" theme="color">
            Sign in with Apple
          </SocialButton>
        </div>
        <div className="grid w-90 grid-cols-3 justify-items-start gap-3">
          <SocialButton social="google" theme="color" />
          <SocialButton social="facebook" theme="color" />
          <SocialButton social="apple" theme="color" />
        </div>
      </div>

      <div className="mb-4 flex items-start gap-8">
        <div className="flex w-90 flex-col gap-3">
          <SocialButton social="google" theme="gray">
            Sign in with Google
          </SocialButton>
          <SocialButton social="facebook" theme="gray">
            Sign in with Facebook
          </SocialButton>
          <SocialButton social="apple" theme="gray">
            Sign in with Apple
          </SocialButton>
        </div>
        <div className="grid w-90 grid-cols-3 justify-items-start gap-3">
          <SocialButton social="google" theme="gray" />
          <SocialButton social="facebook" theme="gray" />
          <SocialButton social="apple" theme="gray" />
        </div>
      </div>
    </div>
  );
};
