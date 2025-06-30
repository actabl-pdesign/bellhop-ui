import React from "react";
import { DialogPanel as HeadlessuiDialogPanel, TransitionChild } from "@headlessui/react";
import { makeClassName, bellhopTwMerge } from "lib";
import { RootStylesContext } from "contexts";

const makeDisplayClassName = makeClassName("dialog");

export type DialogPanelProps = React.HTMLAttributes<HTMLDivElement>;

const DialogPanel = React.forwardRef<HTMLDivElement, DialogPanelProps>((props, ref) => {
  const { children, className, ...other } = props;
  const rootStyles =
    React.useContext(RootStylesContext) ?? bellhopTwMerge("rounded-bellhop-default p-6");

  return (
    <TransitionChild
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <HeadlessuiDialogPanel
        ref={ref}
        className={bellhopTwMerge(
          makeDisplayClassName("panel"),
          // common
          "w-full max-w-lg overflow-visible text-left ring-1 shadow-bellhop transition-all transform",
          // light
          "bg-bellhop-background  text-bellhop-content ring-bellhop-ring",
          // dark
          "dark:bg-dark-bellhop-background dark:text-dark-bellhop-content dark:ring-dark-bellhop-ring",
          rootStyles,
          className,
        )}
        {...other}
      >
        {children}
      </HeadlessuiDialogPanel>
    </TransitionChild>
  );
});

DialogPanel.displayName = "DialogPanel";

export default DialogPanel;
