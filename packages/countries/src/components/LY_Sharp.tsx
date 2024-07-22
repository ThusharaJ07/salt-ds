// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type LY_SharpProps = CountrySymbolProps;

const LY_Sharp = forwardRef<SVGSVGElement, LY_SharpProps>(function LY_Sharp(
  props: LY_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="LY_Sharp"
      aria-label="Libya"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-LY-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-LY-a)`}>
        <path fill="#009B77" d="M0 61V43h72v18z" />
        <path fill="#31373D" d="M0 43V7h72v36z" />
        <path fill="#DD2033" d="M0 7v-18h72V7z" />
        <path
          fill="#F5F7F8"
          d="M30.666 15c.82 0 1.617.099 2.379.285A11.945 11.945 0 0 0 26 13c-6.627 0-12 5.373-12 12s5.373 12 12 12a11.94 11.94 0 0 0 7.045-2.285c-.762.186-1.559.285-2.379.285-5.522 0-10-4.477-10-10s4.478-10 10-10Zm11.007 6.885 1.02-6.556 4.162 5.167 6.311-.855-3.321 5.609 2.88 6.026-6.343-2.182-4.403 5.062-.52-6.66-5.68-3.196 5.894-2.415Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default LY_Sharp;
