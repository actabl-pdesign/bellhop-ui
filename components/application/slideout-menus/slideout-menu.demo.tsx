"use client";

import { useState } from "react";
import {
  Plus,
  User01,
  HelpCircle,
  Settings01,
  Bell01,
} from "@untitledui/icons";
import { FileIcon as FileTypeIcon } from "@untitledui/file-icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Avatar } from "@/components/base/avatar/avatar";
import { SlideoutMenu } from "./slideout-menu";

export const SimpleSlideoutMenu = () => {
  return (
    <SlideoutMenu.Trigger>
      <Button color="primary">Open Simple Menu</Button>
      <SlideoutMenu>
        {({ close }) => (
          <>
            <SlideoutMenu.Header onClose={close}>
              <h2 className="text-lg font-semibold text-primary">
                Simple Slideout Menu
              </h2>
              <p className="text-sm text-tertiary">
                This is a basic slideout menu example
              </p>
            </SlideoutMenu.Header>

            <SlideoutMenu.Content>
              <div className="space-y-4">
                <p className="text-sm text-secondary">
                  This slideout menu slides in from the right side of the screen
                  with a backdrop overlay. It's perfect for displaying
                  additional content, forms, or navigation options.
                </p>

                <div className="space-y-3">
                  <Button
                    color="secondary"
                    className="w-full justify-start"
                    iconLeading={User01}
                  >
                    Profile Settings
                  </Button>
                  <Button
                    color="secondary"
                    className="w-full justify-start"
                    iconLeading={Settings01}
                  >
                    System Settings
                  </Button>
                  <Button
                    color="secondary"
                    className="w-full justify-start"
                    iconLeading={HelpCircle}
                  >
                    Help & Support
                  </Button>
                </div>
              </div>
            </SlideoutMenu.Content>

            <SlideoutMenu.Footer>
              <div className="flex gap-3 justify-end">
                <Button size="md" color="secondary" onClick={close}>
                  Cancel
                </Button>
                <Button size="md" color="primary">
                  Save Changes
                </Button>
              </div>
            </SlideoutMenu.Footer>
          </>
        )}
      </SlideoutMenu>
    </SlideoutMenu.Trigger>
  );
};

export const FormSlideoutMenu = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  return (
    <SlideoutMenu.Trigger>
      <Button color="primary" iconLeading={Plus}>
        Add New User
      </Button>
      <SlideoutMenu>
        {({ close }) => (
          <>
            <SlideoutMenu.Header onClose={close}>
              <h2 className="text-lg font-semibold text-primary">
                Add New Team Member
              </h2>
              <p className="text-sm text-tertiary">
                Invite a new member to your team
              </p>
            </SlideoutMenu.Header>

            <SlideoutMenu.Content>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Full Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e })}
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e })}
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Add a brief description about this team member..."
                      rows={3}
                      className="w-full rounded-md border border-secondary bg-primary px-3 py-2 text-sm text-primary placeholder-tertiary focus:border-brand-300 focus:outline-none focus:ring-1 focus:ring-brand-300"
                    />
                  </div>
                </div>
              </form>
            </SlideoutMenu.Content>

            <SlideoutMenu.Footer>
              <div className="flex gap-3 justify-end">
                <Button size="md" color="secondary" onClick={close}>
                  Cancel
                </Button>
                <Button size="md" color="primary">
                  Send Invitation
                </Button>
              </div>
            </SlideoutMenu.Footer>
          </>
        )}
      </SlideoutMenu>
    </SlideoutMenu.Trigger>
  );
};

export const NotificationSlideoutMenu = () => {
  type Notification = {
    id: number;
    user: {
      name: string;
      avatar: string;
    };
    action: string;
    target?: string;
    attachment?: {
      name: string;
      size: string;
      type: string;
    };
    time: string;
    read: boolean;
    status: "online" | "offline";
    detail?: string;
  };

  const notifications: Notification[] = [
    {
      id: 1,
      user: {
        name: "Phoenix Baker",
        avatar:
          "https://www.actabl.com/images/avatars/phoenix-baker?fm=webp&q=80",
      },
      action: "Added a file to",
      target: "Marketing site redesign",
      attachment: {
        name: "marketing-plan-redesign.pdf",
        size: "720 KB",
        type: "pdf",
      },
      time: "Just now",
      read: false,
      status: "online",
    },
    {
      id: 2,
      user: {
        name: "Lana Steiner",
        avatar:
          "https://www.actabl.com/images/avatars/lana-steiner?fm=webp&q=80",
      },
      action: "Invited",
      target: "Alisa Hester",
      detail: "to the team",
      time: "2 mins ago",
      read: false,
      status: "online",
    },
    {
      id: 3,
      user: {
        name: "Demi Wilkinson",
        avatar:
          "https://www.actabl.com/images/avatars/demi-wilkinson?fm=webp&q=80",
      },
      action: "Invited",
      target: "Alisa Hester",
      detail: "to the team",
      time: "2 mins ago",
      read: false,
      status: "offline",
    },
    {
      id: 4,
      user: {
        name: "Candice Wu",
        avatar:
          "https://www.actabl.com/images/avatars/candice-wu?fm=webp&q=80",
      },
      action: "Commented in",
      target: "Marketing site redesign",
      time: "3 hours ago",
      read: false,
      status: "online",
    },
    {
      id: 5,
      user: {
        name: "Candice Wu",
        avatar:
          "https://www.actabl.com/images/avatars/candice-wu?fm=webp&q=80",
      },
      action: "Was added to",
      target: "Marketing site redesign",
      time: "3 hours ago",
      read: false,
      status: "online",
    },
    {
      id: 6,
      user: {
        name: "Natali Craig",
        avatar:
          "https://www.actabl.com/images/avatars/natali-craig?fm=webp&q=80",
      },
      action: "Added 3 labels to the project",
      target: "Marketing site redesign",
      time: "6 hours ago",
      read: false,
      status: "online",
    },
    {
      id: 7,
      user: {
        name: "Natali Craig",
        avatar:
          "https://www.actabl.com/images/avatars/natali-craig?fm=webp&q=80",
      },
      action: "Invited",
      target: "Lana Steiner",
      detail: "to the team",
      time: "6 hours ago",
      read: false,
      status: "online",
    },
    {
      id: 8,
      user: {
        name: "Orlando Diggs",
        avatar:
          "https://www.actabl.com/images/avatars/orlando-diggs?fm=webp&q=80",
      },
      action: "Created 7 tasks in",
      target: "Marketing site redesign",
      time: "11 hours ago",
      read: false,
      status: "online",
    },
    {
      id: 9,
      user: {
        name: "Drew Cano",
        avatar:
          "https://www.actabl.com/images/avatars/drew-cano?fm=webp&q=80",
      },
      action: "Added a file to",
      target: "Marketing site redesign",
      attachment: {
        name: "Design brief and ideas.doc",
        size: "720 KB",
        type: "doc",
      },
      time: "12 hours ago",
      read: false,
      status: "online",
    },
    {
      id: 10,
      user: {
        name: "Drew Cano",
        avatar:
          "https://www.actabl.com/images/avatars/drew-cano?fm=webp&q=80",
      },
      action: "Created the project",
      target: "Marketing site redesign",
      time: "12 hours ago",
      read: false,
      status: "online",
    },
    {
      id: 11,
      user: {
        name: "Kate Morrison",
        avatar:
          "https://www.actabl.com/images/avatars/kate-morrison?fm=webp&q=80",
      },
      action: "Sent you a message",
      time: "5:20pm 20 Jan 2024",
      read: false,
      status: "online",
    },
  ];

  return (
    <SlideoutMenu.Trigger>
      <Button
        color="secondary"
        size="md"
        iconLeading={Bell01}
        className="gap-1"
      >
        <div className="flex gap-3">
          Notifications
          <Badge color="brand" size="sm">
            3
          </Badge>
        </div>
      </Button>
      <SlideoutMenu>
        {({ close }) => (
          <>
            <SlideoutMenu.Header onClose={close}>
              <div className="flex flex-col w-full">
                <div className="flex flex-col mb-3">
                  <h2 className="text-lg font-semibold text-primary">
                    Notifications
                  </h2>
                  <p className="text-sm text-tertiary">
                    Stay up to date with your activity
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <Button size="sm" color="secondary">
                    Mark all as read
                  </Button>
                </div>
              </div>
            </SlideoutMenu.Header>

            <SlideoutMenu.Content>
              <div className="space-y-0">
                {notifications.map((notification, index) => (
                  <div
                    key={notification.id}
                    className="flex gap-3 py-4 pr-1 hover:opacity-100 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0 relative">
                      <Avatar
                        status={notification.status}
                        size="md"
                        src={notification.user.avatar}
                        alt={notification.user.name}
                      />
                      <div className="w-[2px] h-[calc(100%-20px)] ml-4.5 absolute bg-gray-300"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div className="text-sm text-secondary leading-5">
                          <p className="font-medium text-primary">
                            {notification.user.name}
                            <span className="text-xs text-tertiary ml-2">
                              {notification.time}
                            </span>
                          </p>{" "}
                          {notification.action}{" "}
                          {notification.target && (
                            <span className="font-medium text-brand-primary">
                              {notification.target}
                            </span>
                          )}
                          {notification.detail && (
                            <span> {notification.detail}</span>
                          )}
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5 -mr-1" />
                        )}
                      </div>

                      {notification.attachment && (
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-8 h-8 flex items-center justify-center text-xs font-medium">
                            <FileTypeIcon type={notification.attachment.type} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-primary truncate">
                              {notification.attachment.name}
                            </div>
                            <div className="text-xs text-tertiary">
                              {notification.attachment.size}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SlideoutMenu.Content>
          </>
        )}
      </SlideoutMenu>
    </SlideoutMenu.Trigger>
  );
};
