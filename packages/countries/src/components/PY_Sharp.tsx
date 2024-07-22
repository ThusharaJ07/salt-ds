// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type PY_SharpProps = CountrySymbolProps;

const PY_Sharp = forwardRef<SVGSVGElement, PY_SharpProps>(function PY_Sharp(
  props: PY_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="PY_Sharp"
      aria-label="Paraguay"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-PY-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-PY-a)`}>
        <path fill="#004692" d="M0 50V40h72v10z" />
        <path fill="#F5F7F8" d="M0 40V10h72v30z" />
        <path fill="#DD2033" d="M0 10V0h72v10z" />
        <path
          fill="#009B77"
          fillRule="evenodd"
          d="M20.889 12.69A16.334 16.334 0 0 0 19 20.333C19 29.538 26.611 37 36 37s17-7.462 17-16.667c0-2.754-.682-5.353-1.889-7.642v.38l-4.913 2.409a10.888 10.888 0 0 1 1.135 4.854c0 6.136-5.074 11.11-11.333 11.11-6.26 0-11.333-4.974-11.333-11.11 0-1.74.408-3.388 1.135-4.854l-4.913-2.409v-.38Z"
          clipRule="evenodd"
        />
        <path
          fill="#F1B434"
          d="m36 12-2.385 4.957-5.615.66 4.142 3.724-1.086 5.365L36 23.642l4.944 3.064-1.086-5.365L44 17.617l-5.615-.66L36 12Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default PY_Sharp;
