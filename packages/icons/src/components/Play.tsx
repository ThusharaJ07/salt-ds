// WARNING: This file was generated by a script. Do not modify it manually

import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type PlayIconProps = IconProps;

export const PlayIcon = forwardRef<SVGSVGElement, PlayIconProps>(
  function PlayIcon(props: PlayIconProps, ref) {
    return (
      <Icon
        data-testid="PlayIcon"
        aria-label="play"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="m1 12 11-6L1 0v12ZM2 1.685v8.63L9.912 6 2 1.685Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  },
);
