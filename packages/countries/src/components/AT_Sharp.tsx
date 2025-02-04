// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type AT_SharpProps = CountrySymbolProps;

const AT_Sharp = forwardRef<SVGSVGElement, AT_SharpProps>(function AT_Sharp(
  props: AT_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="AT_Sharp"
      aria-label="Austria"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-AT-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-AT-a)`}>
        <path fill="#DD2033" d="M0 50V0h72v50z" />
        <path fill="#F5F7F8" d="M0 34V16h72v18z" />
      </g>
    </CountrySymbol>
  );
});

export default AT_Sharp;
