import { useId } from "@salt-ds/core";
import { clsx } from "clsx";
// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type SOProps = CountrySymbolProps;

const SO = forwardRef<SVGSVGElement, SOProps>(function SO(props: SOProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="SO"
      aria-label="Somalia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-SO-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-SO-a)`}>
        <path fill="#0091DA" d="M0 72V0h72v72z" />
        <path
          fill="#F5F7F8"
          d="m36 18-5.365 12.136L18 31.75l9.32 9.115L24.874 54 36 46.5 47.125 54 44.68 40.866 54 31.751l-12.636-1.615L36 18Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default SO;
