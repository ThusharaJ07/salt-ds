// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GN_SharpProps = CountrySymbolProps;

const GN_Sharp = forwardRef<SVGSVGElement, GN_SharpProps>(function GN_Sharp(
  props: GN_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="GN_Sharp"
      aria-label="Guinea"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-GN-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-GN-a)`}>
        <path fill="#DD2033" d="M0 50h24V0H0z" />
        <path fill="#FBD381" d="M24 50h24V0H24z" />
        <path fill="#009B77" d="M48 50h24V0H48z" />
      </g>
    </CountrySymbol>
  );
});

export default GN_Sharp;