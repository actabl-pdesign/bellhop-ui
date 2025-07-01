import { Icon as IconComponent } from "components/icon-elements";
import { bellhopTwMerge } from "lib";
import React from "react";

interface NavButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon: React.ElementType;
}

export const NavButton = ({ onClick, icon, ...other }: NavButtonProps) => {
  const Icon = icon;
  return (
    <button
      type="button"
      className={bellhopTwMerge(
        "flex items-center justify-center p-1 h-7 w-7 outline-none focus:ring-2 transition duration-100 border border-bellhop-border hover:bg-bellhop-background-muted rounded-bellhop-small focus:border-bellhop-brand-subtle select-none focus:ring-bellhop-brand-muted text-bellhop-content-subtle hover:text-bellhop-content",
      )}
      {...other}
    >
      <IconComponent
        onClick={onClick}
        icon={Icon}
        variant="simple"
        color="neutral"
        size="sm"
      />
    </button>
  );
};
