// Base Components - Core UI elements that are confirmed to exist
export { Avatar } from "./components/base/avatar/avatar";
export { AvatarLabelGroup } from "./components/base/avatar/avatar-label-group";
export { AvatarProfilePhoto } from "./components/base/avatar/avatar-profile-photo";

export { 
  Badge, 
  BadgeWithDot, 
  BadgeWithIcon, 
  BadgeWithImage, 
  BadgeWithButton, 
  BadgeIcon 
} from "./components/base/badges/badges";

export { Button } from "./components/base/buttons/button";
export { ButtonUtility } from "./components/base/buttons/button-utility";
export { CloseButton } from "./components/base/buttons/close-button";
export { SocialButton } from "./components/base/buttons/social-button";

export { ButtonGroup } from "./components/base/button-group/button-group";

export { Checkbox } from "./components/base/checkbox/checkbox";

export { Dropdown } from "./components/base/dropdown/dropdown";

export { Form } from "./components/base/form/form";
export { HookForm } from "./components/base/form/hook-form";

export { Input } from "./components/base/input/input";
export { InputGroup } from "./components/base/input/input-group";
export { Label } from "./components/base/input/label";
export { HintText } from "./components/base/input/hint-text";

export { PinInput } from "./components/base/pin-input/pin-input";

export { Select } from "./components/base/select/select";
export { NativeSelect } from "./components/base/select/select-native";
export { MultiSelect } from "./components/base/select/multi-select";

export { Slider } from "./components/base/slider/slider";

export { Toggle } from "./components/base/toggle/toggle";

export { Tooltip } from "./components/base/tooltip/tooltip";

// Foundation Components - Design system foundations
export { Dot } from "./components/foundations/dot-icon";

export { ActablLogos } from "./components/base/actabl-logos/actabl-logos";

export { RatingBadge } from "./components/foundations/rating-badge";
export { RatingStars } from "./components/foundations/rating-stars";

// Payment Icons
export * from "./components/foundations/payment-icons";

// Social Icons 
export * from "./components/foundations/social-icons";

// Shared Assets - Background patterns only (confirmed to exist)
export * from "./components/shared-assets/background-patterns";
export { SectionDivider } from "./components/shared-assets/section-divider";

// Utilities and Hooks
export { cx } from "./utils/cx";
export { isReactComponent } from "./utils/is-react-component";
export { countries } from "./utils/countries";
export { default as timezones, timezonesOptions, timezonesOptionsWithLongName } from "./utils/timezones";

export { useActiveItem } from "./hooks/use-active-item";
export { useBreakpoint } from "./hooks/use-breakpoint";
export { useClipboard } from "./hooks/use-clipboard";
export { useResizeObserver } from "./hooks/use-resize-observer";

// Re-export commonly used types
export type { ComponentProps } from "react";