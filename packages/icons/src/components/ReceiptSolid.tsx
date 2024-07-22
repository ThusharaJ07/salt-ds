// WARNING: This file was generated by a script. Do not modify it manually

import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type ReceiptSolidIconProps = IconProps;

export const ReceiptSolidIcon = forwardRef<
  SVGSVGElement,
  ReceiptSolidIconProps
>(function ReceiptSolidIcon(props: ReceiptSolidIconProps, ref) {
  return (
    <Icon
      data-testid="ReceiptSolidIcon"
      aria-label="receipt solid"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4 10.5 1 12V0h10v12l-3-1.5L6 12l-2-1.5ZM8 3H4v1h4V3ZM4 5h4v1H4V5Zm4 2H4v1h4V7Z"
        clipRule="evenodd"
      />
    </Icon>
  );
});
