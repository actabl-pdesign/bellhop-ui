import { Props as LegendContentProps } from 'recharts/types/component/DefaultLegendContent';
import { Props as DotProps } from 'recharts/types/shape/Dot';
/**
 * Selects evenly spaced items from an array. Used for rendering
 * certain number of x-axis labels.
 * @param dataArray - The array of items to select from.
 * @param count - The number of items to select.
 * @returns The selected items.
 */
export declare const selectEvenlySpacedItems: <T extends any>(dataArray: T[], count: number) => T[];
/**
 * Renders the legend content for a chart.
 * @param reversed - Whether to reverse the payload.
 * @param payload - The payload of the legend.
 * @param align - The alignment of the legend.
 * @param layout - The layout of the legend.
 * @param className - The class name of the legend.
 * @returns The legend content.
 */
export declare const ChartLegendContent: ({ reversed, payload, align, layout, className, }: LegendContentProps & {
    reversed?: boolean;
    className?: string;
}) => import("react").JSX.Element;
export declare const ChartTooltipContent: ({ active, payload, label, isRadialChart, isPieChart, formatter, labelFormatter, }: any & {
    isRadialChart?: boolean;
    isPieChart?: boolean;
}) => import("react").JSX.Element | null;
export declare const ChartActiveDot: ({ cx, cy, }: DotProps & {
    payload?: any;
}) => import("react").JSX.Element;
