"use client";

import type { HTMLAttributes } from "react";
import { AstronautLostIllustration } from "./AstronautLost";
import { BoxIllustration } from "./box";
import { CelebrateIllustration } from "./Celebrate";
import { CloudIllustration } from "./cloud";
import { CreditCardIllustration } from "./credit-card";
import { DocumentIllustration } from "./Document";
import { SearchFailIllustration } from "./SearchFail";

const types = {
 "astronaut-lost": AstronautLostIllustration,
  box: BoxIllustration,
  celebrate: CelebrateIllustration,
  cloud: CloudIllustration,
  document: DocumentIllustration,
  "credit-card": CreditCardIllustration,
  "search-fail": SearchFailIllustration,
};

export interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  svgClassName?: string;
  childrenClassName?: string;
}

export const Illustration = (
  props: IllustrationProps & { type: keyof typeof types },
) => {
  const { type } = props;

  const Component = types[type];

  return <Component {...props} />;
};
