// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GS_SharpProps = CountrySymbolProps;

const GS_Sharp = forwardRef<SVGSVGElement, GS_SharpProps>(function GS_Sharp(
  props: GS_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="GS_Sharp"
      aria-label="South Georgia and the South Sandwich Islands"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-GS-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-GS-a)`}>
        <path fill="#004692" d="M0 0h72v50H0z" />
        <mask
          id={`${uid}-GS-b`}
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#002F6C" d="M0 30V0h36v30H0Z" />
        </mask>
        <g mask={`url(#${uid}-GS-b)`}>
          <path
            fill="#F5F7F8"
            d="m12.79 1.005-2.12 2.12 26.197 26.198 2.12-2.121L12.792 1.005ZM7.134 6.661l-3.536 3.536 26.197 26.197 3.536-3.535L7.134 6.66Z"
          />
          <path
            fill="#DD2033"
            d="m7.134 6.661 3.535-3.535 26.198 26.197-3.536 3.535L7.134 6.662Z"
          />
          <path fill="#F5F7F8" d="M6 35h4.002V9H36V5H6v30Z" />
          <path fill="#DD2033" d="M0 35h6.002V5h30V0H0v35Z" />
        </g>
        <path fill="#C1C3C3" d="M50 12h9v8h-9z" />
        <path fill="#936846" d="M51 5h2.5v3H57v4h-6V5Z" />
        <path fill="#FBD381" d="M65 38H44v5h3v3h15v-3h3v-5Z" />
        <path
          fill="#F5F7F8"
          d="M44 20h21v8.743a14.857 14.857 0 0 1-9.36 13.803L54.5 43l-1.14-.454A14.857 14.857 0 0 1 44 28.743V20Z"
        />
      </g>
      <mask
        id={`${uid}-GS-c`}
        x="44"
        y="20"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path
          fill="#F5F7F8"
          d="M44 20h21v8.743a14.857 14.857 0 0 1-9.36 13.803L54.5 43l-1.14-.454A14.857 14.857 0 0 1 44 28.743V20Z"
        />
      </mask>
      <g fill="#005EB8" mask={`url(#${uid}-GS-c)`}>
        <path d="M54.25 19.5 59 24.25 54.25 29l-4.75-4.75 4.75-4.75Zm-9.5 9.5 4.75 4.75-4.75 4.75L40 33.75 44.75 29Zm23.75-4.75-4.75-4.75L59 24.25 63.75 29l4.75-4.75ZM54.25 29 59 33.75l-4.75 4.75L59 43.25 54.25 48l-4.75-4.75 4.75-4.75-4.75-4.75L54.25 29Zm-4.75-4.75-4.75-4.75L40 24.25 44.75 29l4.75-4.75ZM63.75 29l4.75 4.75-4.75 4.75L59 33.75 63.75 29Z" />
      </g>
    </CountrySymbol>
  );
});

export default GS_Sharp;
