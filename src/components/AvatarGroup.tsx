import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import { cn } from "../lib/utils";

export interface AvatarData {
  url?: string;
  name?: string;
  fallback: string;
}

export interface AvatarGroupProps {
  avatars: AvatarData[];
  max?: number;
  size?: "small" | "medium" | "large";
  className?: string;
}

export function AvatarGroup({
  avatars,
  max = 10,
  size = "medium",
  className,
}: AvatarGroupProps) {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12",
  };

  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visibleAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          className={cn(sizeClasses[size], "border border-white shadow-md")}
        >
          {avatar.url && (
            <AvatarImage
              src={avatar.url || "/placeholder.svg"}
              alt={avatar.name || avatar.fallback}
            />
          )}
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}

      {remainingCount > 0 && (
        <div
          className={cn(
            sizeClasses[size],
            "flex items-center justify-center rounded-full border border-white bg-gray-100 text-sm font-medium",
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
