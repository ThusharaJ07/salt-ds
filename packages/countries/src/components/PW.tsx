// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type PWProps = CountrySymbolProps;

const PW = forwardRef<SVGSVGElement, PWProps>(function PW(props: PWProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="PW"
      aria-label="Palau"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-PW-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-PW-a)`}>
        <path fill="#3CCBDA" d="M0 0h72v72H0z" />
        <circle cx="30" cy="36" r="16" fill="#FBD381" />
      </g>
    </CountrySymbol>
  );
});

export default PW;
