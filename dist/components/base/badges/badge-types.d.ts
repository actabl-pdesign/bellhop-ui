export type IconComponentType = React.FunctionComponent<{
    className?: string;
    strokeWidth?: string | number;
}>;
export type Sizes = "sm" | "md" | "lg";
export type BadgeColors = "gray" | "brand" | "error" | "warning" | "success" | "blue" | "indigo" | "purple" | "pink" | "orange";
export type ExtractColorKeys<T> = T extends {
    styles: infer C;
} ? keyof C : never;
export type ExtractBadgeKeys<T> = keyof T;
export type BadgeTypeToColorMap<T> = {
    [K in ExtractBadgeKeys<T>]: ExtractColorKeys<T[K]>;
};
export type BadgeTypeColors<T> = ExtractColorKeys<T[keyof T]>;
export declare const badgeTypes: {
    readonly pillColor: "pill-color";
    readonly badgeColor: "badge-color";
};
export type BadgeTypes = (typeof badgeTypes)[keyof typeof badgeTypes];
