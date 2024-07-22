// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type MS_SharpProps = CountrySymbolProps;

const MS_Sharp = forwardRef<SVGSVGElement, MS_SharpProps>(function MS_Sharp(
  props: MS_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="MS_Sharp"
      aria-label="Montserrat"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-MS-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-MS-a)`}>
        <path fill="#004692" d="M0 0h72v50H0z" />
        <mask
          id={`${uid}-MS-b`}
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#002F6C" d="M0 30V0h36v30H0Z" />
        </mask>
        <g mask={`url(#${uid}-MS-b)`}>
          <path fill="#004692" d="M0 0h36v36H0z" />
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
        <path
          fill="#3CCBDA"
          d="M44 20h21v8.743a14.857 14.857 0 0 1-9.36 13.803L54.5 43l-1.14-.454A14.857 14.857 0 0 1 44 28.743V20Z"
        />
        <mask
          id={`${uid}-MS-c`}
          x="44"
          y="20"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#0091DA"
            d="M44 20h21v8.743a14.857 14.857 0 0 1-9.36 13.803L54.5 43l-1.14-.454A14.857 14.857 0 0 1 44 28.743V20Z"
          />
        </mask>
        <g mask={`url(#${uid}-MS-c)`}>
          <path fill="#31373D" d="M53 29v11h3V29h5v-3h-5v-4h-3v4h-5v3h5Z" />
          <path fill="#936846" d="M44 36h21v7H44z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default MS_Sharp;
