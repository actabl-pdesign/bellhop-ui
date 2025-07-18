import { ListBoxItemProps as AriaListBoxItemProps } from 'react-aria-components';
import { SelectItemType } from './select';
interface SelectItemProps extends Omit<AriaListBoxItemProps<SelectItemType>, "id">, SelectItemType {
}
export declare const SelectItem: ({ label, id, value, avatarUrl, supportingText, isDisabled, icon: Icon, className, children, ...props }: SelectItemProps) => import("react").JSX.Element;
export {};
