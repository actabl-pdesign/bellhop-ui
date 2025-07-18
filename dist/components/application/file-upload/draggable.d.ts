import { ComponentProps } from 'react';
import { FileIcon } from '@untitledui/file-icons';
interface DraggableProps {
    name: string;
    type: string;
    fileIconType?: ComponentProps<typeof FileIcon>["type"];
    theme?: ComponentProps<typeof FileIcon>["variant"];
    size: number;
}
export declare function Draggable({ name, type, size, fileIconType, theme, }: DraggableProps): import("react").JSX.Element;
export {};
