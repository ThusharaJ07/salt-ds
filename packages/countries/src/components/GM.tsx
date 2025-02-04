// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GMProps = CountrySymbolProps;

const GM = forwardRef<SVGSVGElement, GMProps>(function GM(props: GMProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="GM"
      aria-label="Gambia (the)"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-GM-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-GM-a)`}>
        <path fill="#F5F7F8" d="M0 0h72v72H0z" />
        <path fill="#005EB8" d="M0 46V26h72v20z" />
        <path fill="#DD2033" d="M0 20V0h72v20z" />
        <path fill="#009B77" d="M0 72V52h72v20z" />
      </g>
    </CountrySymbol>
  );
});

export default GM;
