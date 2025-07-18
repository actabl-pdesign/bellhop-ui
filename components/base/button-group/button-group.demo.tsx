"use client";

import { useState } from "react";
import EditOutlinedIcon from "@react-md/material-icons/EditOutlinedIcon";
import DeleteOutlinedIcon from "@react-md/material-icons/DeleteOutlinedIcon";
import ArchiveOutlinedIcon from "@react-md/material-icons/ArchiveOutlinedIcon";
import ArrowBackIcon from "@react-md/material-icons/ArrowBackIcon";
import ArrowForwardOutlinedIcon from "@react-md/material-icons/ArrowForwardOutlinedIcon";
import AddIcon from "@react-md/material-icons/AddIcon";

import type { Key } from "react-aria";
import {
  ButtonGroup,
  ButtonGroupItem,
} from "@/components/base/button-group/button-group";
import { Dot } from "@/components/foundations/dot-icon";

export const Default = () => (
  <ButtonGroup selectedKeys={[]}>
    <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
    <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
    <ButtonGroupItem id="delete">Delete</ButtonGroupItem>
  </ButtonGroup>
);

export const LeadingIcon = () => (
  <ButtonGroup selectedKeys={[]}>
    <ButtonGroupItem id="archive" iconLeading={ArchiveOutlinedIcon}>
      Archive
    </ButtonGroupItem>
    <ButtonGroupItem id="edit" iconLeading={EditOutlinedIcon}>
      Edit
    </ButtonGroupItem>
    <ButtonGroupItem id="delete" iconLeading={DeleteOutlinedIcon}>
      Delete
    </ButtonGroupItem>
  </ButtonGroup>
);

export const ButtonGroupDot = () => (
  <ButtonGroup selectedKeys={["archive"]}>
    <ButtonGroupItem
      id="archive"
      iconLeading={
        <Dot className="mx-[3px] size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />
      }
    >
      Text
    </ButtonGroupItem>
    <ButtonGroupItem
      id="edit"
      iconLeading={
        <Dot className="mx-[3px] size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />
      }
    >
      Text
    </ButtonGroupItem>
    <ButtonGroupItem
      id="delete"
      isDisabled
      iconLeading={
        <Dot className="mx-[3px] size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />
      }
    >
      Text
    </ButtonGroupItem>
  </ButtonGroup>
);

export const DisabledIndividualButton = () => (
  <ButtonGroup selectedKeys={[]}>
    <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
    <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
    <ButtonGroupItem isDisabled id="delete">
      Delete
    </ButtonGroupItem>
  </ButtonGroup>
);

export const DisabledAll = () => (
  <ButtonGroup isDisabled>
    <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
    <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
    <ButtonGroupItem id="delete">Delete</ButtonGroupItem>
  </ButtonGroup>
);

export const SelectedItem = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(
    new Set(["today"]),
  );

  return (
    <ButtonGroup
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <ButtonGroupItem id="today">Today</ButtonGroupItem>
      <ButtonGroupItem id="tomorrow">Tomorrow</ButtonGroupItem>
      <ButtonGroupItem id="thisweek">This week</ButtonGroupItem>
    </ButtonGroup>
  );
};

export const MultipleSelectedItems = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(
    new Set(["today"]),
  );

  return (
    <ButtonGroup
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <ButtonGroupItem id="today">Today</ButtonGroupItem>
      <ButtonGroupItem id="tomorrow">Tomorrow</ButtonGroupItem>
      <ButtonGroupItem id="thisweek">This week</ButtonGroupItem>
    </ButtonGroup>
  );
};

export const All = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup selectedKeys={["archive"]}>
      <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
      <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
      <ButtonGroupItem id="delete" isDisabled>
        Delete
      </ButtonGroupItem>
    </ButtonGroup>

    <ButtonGroup selectedKeys={["archive"]}>
      <ButtonGroupItem id="archive" iconLeading={ArchiveOutlinedIcon}>
        Archive
      </ButtonGroupItem>
      <ButtonGroupItem id="edit" iconLeading={EditOutlinedIcon}>
        Edit
      </ButtonGroupItem>
      <ButtonGroupItem id="delete" isDisabled iconLeading={DeleteOutlinedIcon}>
        Delete
      </ButtonGroupItem>
    </ButtonGroup>

    <ButtonGroup selectedKeys={["archive"]}>
      <ButtonGroupItem
        id="archive"
        iconLeading={
          <Dot className="mx-[3px] size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />
        }
      >
        Archive
      </ButtonGroupItem>
      <ButtonGroupItem
        id="edit"
        iconLeading={
          <Dot className="mx-[3px] size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />
        }
      >
        Edit
      </ButtonGroupItem>
      <ButtonGroupItem
        id="delete"
        isDisabled
        iconLeading={
          <Dot className="mx-[3px] size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />
        }
      >
        Delete
      </ButtonGroupItem>
    </ButtonGroup>

    <ButtonGroup selectedKeys={["archive"]}>
      <ButtonGroupItem
        id="archive"
        iconLeading={ArrowBackIcon}
        aria-label="Previous"
      />
      <ButtonGroupItem id="edit" iconLeading={AddIcon} aria-label="Add" />
      <ButtonGroupItem
        id="delete"
        isDisabled
        iconLeading={ArrowForwardOutlinedIcon}
        aria-label="Next"
      />
    </ButtonGroup>
  </div>
);
