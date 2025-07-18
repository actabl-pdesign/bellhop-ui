"use client";

import { withOverlayAware } from "@/components/internal/decorators";
import * as SlideoutMenus from "./slideout-menu.demo";

export default {
  title: "Application/Slideout Menu",
  decorators: [
    withOverlayAware((Story: any) => (
      <div className="min-h-screen bg-primary p-8">
        <div className="max-w-md mx-auto">
          <Story />
        </div>
      </div>
    )),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export const SimpleSlideoutMenu = () => <SlideoutMenus.SimpleSlideoutMenu />;
SimpleSlideoutMenu.parameters = {
  docs: {
    description: {
      story:
        "A basic slideout menu that slides in from the right side with header, content, and footer sections. Perfect for simple navigation or information display.",
    },
  },
};

export const FormSlideoutMenu = () => <SlideoutMenus.FormSlideoutMenu />;
FormSlideoutMenu.parameters = {
  docs: {
    description: {
      story:
        "A comprehensive form slideout menu for adding new team members. Includes various form controls like inputs, radio buttons, checkboxes, and textareas.",
    },
  },
};

export const NotificationSlideoutMenu = () => (
  <SlideoutMenus.NotificationSlideoutMenu />
);
NotificationSlideoutMenu.parameters = {
  docs: {
    description: {
      story:
        "A notification slideout menu displaying a list of user notifications with different types, read/unread states, and action buttons.",
    },
  },
};
