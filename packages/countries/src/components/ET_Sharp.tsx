// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type ET_SharpProps = CountrySymbolProps;

const ET_Sharp = forwardRef<SVGSVGElement, ET_SharpProps>(function ET_Sharp(
  props: ET_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="ET_Sharp"
      aria-label="Ethiopia"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-ET-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-ET-a)`}>
        <path fill="#DD2033" d="M0 50V34h72v16z" />
        <path fill="#FBD381" d="M0 34V16h72v18z" />
        <path fill="#009B77" d="M0 16V0h72v16z" />
        <circle cx="36" cy="25" r="20" fill="#004692" />
        <path
          fill="#FBD381"
          d="M32.721 21.416 36.001 14l3.278 7.416 7.721.987-5.695 5.57L42.798 36 36 31.417 29.201 36l1.494-8.026L25 22.404l7.721-.988Z"
        />
        <path
          fill="#FBD381"
          d="m29.071 15.063 2.048 2.56-.457 1.032-2.322.297-1.611-2.015 2.342-1.874Zm-5.796 15.073 3.637-1.666.54.529-.512 2.758-2.415 1.107-1.25-2.728ZM34.4 39v-2.886l1.6-1.08 1.4.944V39h-3Zm12.875-6.136-2.196-1.007L44.547 29l.478-.467 3.5 1.604-1.25 2.728ZM45.093 16.41 43.2 18.892l-1.862-.238-.634-1.435 2.002-2.63 2.387 1.82Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default ET_Sharp;
