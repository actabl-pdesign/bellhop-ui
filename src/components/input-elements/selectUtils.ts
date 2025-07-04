import { bellhopTwMerge } from "lib";
import React from "react";

export interface SelectItemProps {
  value: string;
  children?: React.ReactNode;
}

export const getNodeText = (
  node: React.ReactElement,
): string | React.ReactElement | undefined => {
  if (["string", "number"].includes(typeof node)) return node;
  if (node instanceof Array) return node.map(getNodeText).join("");
  if (typeof node === "object" && node) return getNodeText(node.props.children);
};

export function constructValueToNameMapping(
  children: React.ReactElement[] | React.ReactElement,
) {
  const valueToNameMapping = new Map<string, string>();
  React.Children.map(children, (child: React.ReactElement<SelectItemProps>) => {
    valueToNameMapping.set(
      child.props.value,
      (getNodeText(child) ?? child.props.value) as string,
    );
  });
  return valueToNameMapping;
}

export function getFilteredOptions(
  searchQuery: string,
  children: React.ReactElement[],
): React.ReactElement[] {
  return React.Children.map(children, (child) => {
    const optionText = (getNodeText(child) ?? child.props.value) as string;
    if (optionText.toLowerCase().includes(searchQuery.toLowerCase()))
      return child;
  });
}

export const getSelectButtonColors = (
  hasSelection: boolean,
  isDisabled: boolean,
  hasError = false,
) => {
  return bellhopTwMerge(
    isDisabled ? "bg-bellhop-background-muted" : "bg-bellhop-background",
    !isDisabled && "hover:bg-bellhop-background-muted",
    hasSelection ? "text-bellhop-content-emphasis" : "text-bellhop-content",
    isDisabled && "text-bellhop-content-subtle",
    hasError && "text-red-500 placeholder:text-red-500",
    hasError ? "border-red-500" : "border-bellhop-border",
  );
};

export function hasValue<T>(value: T | null | undefined) {
  return value !== null && value !== undefined && value !== "";
}
