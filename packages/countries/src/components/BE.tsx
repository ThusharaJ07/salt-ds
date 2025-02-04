// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BEProps = CountrySymbolProps;

const BE = forwardRef<SVGSVGElement, BEProps>(function BE(props: BEProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="BE"
      aria-label="Belgium"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-BE-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-BE-a)`}>
        <path fill="#31373D" d="M0 0h24v72H0z" />
        <path fill="#F1B434" d="M24 0h24v72H24z" />
        <path fill="#DD2033" d="M48 0h24v72H48z" />
      </g>
    </CountrySymbol>
  );
});

export default BE;
