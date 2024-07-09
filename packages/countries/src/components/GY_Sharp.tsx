import { useId } from "@salt-ds/core";
import { clsx } from "clsx";
// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type GY_SharpProps = CountrySymbolProps;

const GY_Sharp = forwardRef<SVGSVGElement, GY_SharpProps>(function GY_Sharp(
  props: GY_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="GY_Sharp"
      aria-label="Guyana"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-GY-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-GY-a)`}>
        <path fill="#009B77" d="M72 50H0V0h72z" />
        <path fill="#F5F7F8" d="M72 25 0 50V0l72 25Z" />
        <path fill="#FBD381" d="m60 25-72 25V0l72 25Z" />
        <path
          fill="#31373D"
          fillRule="evenodd"
          d="M34 25 0 50V0l34 25Z"
          clipRule="evenodd"
        />
        <path fill="#DD2033" d="M28 25-6 50V0l34 25Z" />
      </g>
    </CountrySymbol>
  );
});

export default GY_Sharp;
