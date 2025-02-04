// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TR_SharpProps = CountrySymbolProps;

const TR_Sharp = forwardRef<SVGSVGElement, TR_SharpProps>(function TR_Sharp(
  props: TR_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="TR_Sharp"
      aria-label="Türkiye"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-TR-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-TR-a)`}>
        <path fill="#DD2033" d="M0 50V0h72v50z" />
        <path
          fill="#F5F7F8"
          d="m45.894 16.67-1.021 6.556-5.893 2.415 5.68 3.197.52 6.659 4.402-5.062 6.343 2.183-2.88-6.027 3.321-5.609-6.31.855-4.162-5.166Z"
        />
        <path
          fill="#F5F7F8"
          d="M40.349 14.587a12.386 12.386 0 0 0-6.815-2.03c-6.873 0-12.444 5.572-12.444 12.445s5.571 12.444 12.444 12.444c2.513 0 4.852-.745 6.808-2.026A15.964 15.964 0 0 1 28.2 41c-8.836 0-16-7.163-16-16s7.164-16 16-16c4.86 0 9.214 2.167 12.149 5.587Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default TR_Sharp;
