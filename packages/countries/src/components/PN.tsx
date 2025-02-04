// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type PNProps = CountrySymbolProps;

const PN = forwardRef<SVGSVGElement, PNProps>(function PN(props: PNProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="PN"
      aria-label="Pitcairn"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-PN-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-PN-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#C1C3C3" d="M46 27.177h9v8h-9z" />
        <path fill="#008259" d="M47 20.177h2.5v3H53v4h-6v-7Z" />
        <path
          fill="#86C5FA"
          d="M40 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L50.5 58l-1.14-.454A14.857 14.857 0 0 1 40 43.743V35Z"
        />
        <mask
          id={`${uid}-PN-b`}
          x="40"
          y="35"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#86C5FA"
            d="M40 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L50.5 58l-1.14-.454A14.857 14.857 0 0 1 40 43.743V35Z"
          />
        </mask>
        <g mask={`url(#${uid}-PN-b)`}>
          <path fill="#FBD381" d="M50.5 35 61 58H40l10.5-23Z" />
          <path fill="#008259" d="m50.5 40.177 10.5 23H40l10.5-23Z" />
        </g>
        <mask
          id={`${uid}-PN-c`}
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#002F6C" d="M0 36C0 16.118 16.118 0 36 0v36H0Z" />
        </mask>
        <g mask={`url(#${uid}-PN-c)`}>
          <path fill="#004692" d="M0 0h36v36H0z" />
          <path
            fill="#F5F7F8"
            d="m12.522 3.134-2.121 2.121 29.526 29.526 2.121-2.121L12.522 3.134ZM6.865 8.79 3.33 12.327l29.526 29.526 3.535-3.535L6.866 8.79Z"
          />
          <path
            fill="#DD2033"
            d="m6.865 8.79 3.536-3.535 29.526 29.526-3.535 3.536L6.864 8.79Z"
          />
          <path fill="#F5F7F8" d="M36 12v5H17v19h-5V12h24Z" />
          <path fill="#F5F7F8" d="M36-2v5H5v33H0V-2h36Z" />
          <path
            fill="#DD2033"
            fillRule="evenodd"
            d="M3 36h9V12h24V3H3v33Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default PN;
