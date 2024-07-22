// WARNING: This file was generated by a script. Do not modify it manually

import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type ExportSolidIconProps = IconProps;

export const ExportSolidIcon = forwardRef<SVGSVGElement, ExportSolidIconProps>(
  function ExportSolidIcon(props: ExportSolidIconProps, ref) {
    return (
      <Icon
        data-testid="ExportSolidIcon"
        aria-label="export solid"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M0 0h12v5.993L8.12 2.112l-.708.707L10.094 5.5H4v1h6.094L7.412 9.183l.707.707L12 6.009V12H0V0Zm1 1h4v1H2v8h3v1H1V1Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  },
);
