// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CH_SharpProps = CountrySymbolProps;

const CH_Sharp = forwardRef<SVGSVGElement, CH_SharpProps>(function CH_Sharp(
  props: CH_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="CH_Sharp"
      aria-label="Switzerland"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-CH-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-CH-a)`}>
        <path fill="#DD2033" d="M0 0h72v50H0z" />
        <path
          fill="#F5F7F8"
          d="M55 30.542V19.458H41.542V6H30.458v13.458H17v11.084h13.458V44h11.084V30.542H55Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default CH_Sharp;
