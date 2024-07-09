// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type WatchSolidIconProps = IconProps;

export const WatchSolidIcon = forwardRef<SVGSVGElement, WatchSolidIconProps>(
  function WatchSolidIcon(props: WatchSolidIconProps, ref) {
    return (
      <Icon
        data-testid="WatchSolidIcon"
        aria-label="watch solid"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M3 0h6v2h1v8H9v2H3v-2H2V2h1V0Zm3 4H5v3h3V6H6V4Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  },
);
