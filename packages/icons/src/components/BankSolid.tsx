// WARNING: This file was generated by a script. Do not modify it manually

import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type BankSolidIconProps = IconProps;

export const BankSolidIcon = forwardRef<SVGSVGElement, BankSolidIconProps>(
  function BankSolidIcon(props: BankSolidIconProps, ref) {
    return (
      <Icon
        data-testid="BankSolidIcon"
        aria-label="bank solid"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M12 6 6 0 0 6h2v5H0v1h12v-1h-2V6h2ZM9 6H8v5h1V6ZM6.5 6h-1v5h1V6ZM4 6H3v5h1V6Zm2.5-3v1h-1V3h1Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  },
);
