// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type CalendarSolidIconProps = IconProps;

export const CalendarSolidIcon = forwardRef<
  SVGSVGElement,
  CalendarSolidIconProps
>(function CalendarSolidIcon(props: CalendarSolidIconProps, ref) {
  return (
    <Icon
      data-testid="CalendarSolidIcon"
      aria-label="calendar solid"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4 1V0H3v1H0v11h12V1H9V0H8v1H4ZM1 2h2v1h1V2h4v1h1V2h2v2H1V2Z"
        clipRule="evenodd"
      />
    </Icon>
  );
});
