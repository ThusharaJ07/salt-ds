// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GL_SharpProps = CountrySymbolProps;

const GL_Sharp = forwardRef<SVGSVGElement, GL_SharpProps>(function GL_Sharp(
  props: GL_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="GL_Sharp"
      aria-label="Greenland"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-GL-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-GL-a)`}>
        <path fill="#F5F7F8" d="M72 0v25H0V0z" />
        <path
          fill="#DD2033"
          d="M72 25v25H0V25zM30 9c-8.837 0-16 7.163-16 16h32c0-8.837-7.163-16-16-16Z"
        />
        <path
          fill="#F5F7F8"
          d="M30 41c-8.837 0-16-7.163-16-16h32c0 8.837-7.163 16-16 16Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default GL_Sharp;
