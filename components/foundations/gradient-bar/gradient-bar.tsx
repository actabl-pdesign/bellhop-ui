"use client";

export function GradientBar({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className="absolute left-0 top-0 z-30 h-full w-2 bg-gradient-to-b from-rose-400 via-indigo-500 to-indigo-800"
    />
  );
}
