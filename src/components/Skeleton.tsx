import { cx } from "../lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("animate-pulse rounded-md bg-gray-200", className)}
      {...props}
    />
  )
}

export { Skeleton }
