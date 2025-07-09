

export type ColorUtility = "bg" | "stroke" | "fill" | "text"

export const chartColors = {
  blue: {
    bg: "bg-blue-500",
    stroke: "stroke-blue-500",
    fill: "fill-blue-500",
    text: "text-blue-500",
  },
  green: {
    bg: "bg-green-500",
    stroke: "stroke-green-500",
    fill: "fill-green-500",
    text: "text-green-500",
  },
  violet: {
    bg: "bg-violet-500",
    stroke: "stroke-violet-500",
    fill: "fill-violet-500",
    text: "text-violet-500",
  },
  amber: {
    bg: "bg-amber-500",
    stroke: "stroke-amber-500",
    fill: "fill-amber-500",
    text: "text-amber-500",
  },
  gray: {
    bg: "bg-gray-400",
    stroke: "stroke-gray-400",
    fill: "fill-gray-400",
    text: "text-gray-400",
  },
  rose: {
    bg: "bg-rose-500",
    stroke: "stroke-rose-500",
    fill: "fill-rose-500",
    text: "text-rose-500",
  },
  indigo: {
    bg: "bg-indigo-600",
    stroke: "stroke-indigo-600",
    fill: "fill-indigo-600",
    text: "text-indigo-600",
  },
  pink: {
    bg: "bg-pink-500",
    stroke: "stroke-pink-500",
    fill: "fill-pink-500",
    text: "text-pink-500",
  },
} as const satisfies {
  [color: string]: {
    [key in ColorUtility]: string
  }
}

export type AvailableChartColorsKeys = keyof typeof chartColors

export const AvailableChartColors: AvailableChartColorsKeys[] = Object.keys(
  chartColors,
) as Array<AvailableChartColorsKeys>

export const constructCategoryColors = (
  categories: string[],
  colors: AvailableChartColorsKeys[],
): Map<string, AvailableChartColorsKeys> => {
  const categoryColors = new Map<string, AvailableChartColorsKeys>()
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length])
  })
  return categoryColors
}

export const getColorClassName = (
  color: AvailableChartColorsKeys,
  type: ColorUtility,
): string => {
  const fallbackColor = {
    bg: "bg-gray-500",
    stroke: "stroke-gray-500",
    fill: "fill-gray-500",
    text: "text-gray-600",
  }
  return chartColors[color]?.[type] ?? fallbackColor[type]
}

export const getConditionalColorClassName = (
  value: number,
  color: AvailableChartColorsKeys,
): string => {
  const intensity = Math.abs(value) / 100
  const clampedIntensity = Math.max(0, Math.min(1, intensity))
  
  const colorMap = {
    blue: `bg-blue-${Math.round(clampedIntensity * 500 + 100)}`,
    green: `bg-green-${Math.round(clampedIntensity * 500 + 100)}`,
    violet: `bg-violet-${Math.round(clampedIntensity * 500 + 100)}`,
    amber: `bg-amber-${Math.round(clampedIntensity * 500 + 100)}`,
    gray: `bg-gray-${Math.round(clampedIntensity * 400 + 100)}`,
    rose: `bg-rose-${Math.round(clampedIntensity * 500 + 100)}`,
    indigo: `bg-indigo-${Math.round(clampedIntensity * 500 + 100)}`,
    pink: `bg-pink-${Math.round(clampedIntensity * 500 + 100)}`,
  }
  
  return colorMap[color] || `bg-${color}-${Math.round(clampedIntensity * 500 + 100)}`
}

export const getGradientColorClassName = (
  color: AvailableChartColorsKeys,
): string => {
  const gradientMap = {
    blue: "from-blue-200 to-blue-600",
    green: "from-green-200 to-green-600",
    violet: "from-violet-200 to-violet-600",
    amber: "from-amber-200 to-amber-600",
    gray: "from-gray-200 to-gray-600",
    rose: "from-rose-200 to-rose-600",
    indigo: "from-indigo-200 to-indigo-600",
    pink: "from-pink-200 to-pink-600",
  }
  
  return gradientMap[color] || `from-${color}-200 to-${color}-600`
}



export const getYAxisDomain = (
  autoMinValue: boolean,
  minValue: number | undefined,
  maxValue: number | undefined,
) => {
  const minDomain = autoMinValue ? "auto" : (minValue ?? 0)
  const maxDomain = maxValue ?? "auto"
  return [minDomain, maxDomain]
}



export function hasOnlyOneValueForKey(
  array: any[],
  keyToCheck: string,
): boolean {
  const val: any[] = []

  for (const obj of array) {
    if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
      val.push(obj[keyToCheck])
      if (val.length > 1) {
        return false
      }
    }
  }

  return true
}
