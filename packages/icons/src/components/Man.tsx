// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type ManIconProps = IconProps;

export const ManIcon = forwardRef<SVGSVGElement, ManIconProps>(function ManIcon(
  props: ManIconProps,
  ref,
) {
  return (
    <Icon
      data-testid="ManIcon"
      aria-label="man"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 3.5a1 1 0 0 0-1 1V8h.75v4h1V8h.5v4h1V8H8V4.5a1 1 0 0 0-1-1H5Zm0 1V7h2V4.5H5Z"
        clipRule="evenodd"
      />
    </Icon>
  );
});
