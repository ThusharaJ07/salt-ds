// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type MFProps = CountrySymbolProps;

const MF = forwardRef<SVGSVGElement, MFProps>(function MF(props: MFProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="MF"
      aria-label="Saint Martin (French part)"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-MF-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="matrix(0 -1 -1 0 72 72)"
        />
      </mask>
      <g mask={`url(#${uid}-MF-a)`}>
        <path fill="#004692" d="M0 72h24V0H0z" />
        <path fill="#F5F7F8" d="M24 72h24V0H24z" />
        <path fill="#DD2033" d="M48 72h24V0H48z" />
      </g>
    </CountrySymbol>
  );
});

export default MF;
