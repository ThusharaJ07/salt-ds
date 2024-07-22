// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type MD_SharpProps = CountrySymbolProps;

const MD_Sharp = forwardRef<SVGSVGElement, MD_SharpProps>(function MD_Sharp(
  props: MD_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="MD_Sharp"
      aria-label="Moldova (the Republic of)"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-MD-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-MD-a)`}>
        <path fill="#DD2033" d="M72 50H56V0h16z" />
        <path fill="#F1B434" d="M56 50H16V0h40z" />
        <path fill="#004692" d="M16 50H0V0h16z" />
        <path
          fill="#936846"
          d="M25.066 10.461c1.578-.108 3.894.124 5.695 1.018 1.623.806 2.755 2.066 2.755 4.425v8.971L22.934 35.341l3.887 3.845 6.864-6.789-2.898 7.166L36.284 45l5.498-5.437-2.906-7.185 6.852 6.777 3.887-3.844-10.582-10.466v-8.971h-.02c-.011-4.768-2.67-7.707-5.785-9.254-2.944-1.461-6.322-1.734-8.54-1.583l.378 5.424Z"
        />
        <path
          fill="#936846"
          d="M22 13.01v18.62l6.533-4.655v-10.24A3.729 3.729 0 0 0 24.8 13.01H22Zm28 18.62V13.01h-2.8a3.729 3.729 0 0 0-3.733 3.725v10.24L50 31.63Z"
        />
        <path
          fill="#DD2033"
          d="M26.48 14.708h18.666v6.708a14.828 14.828 0 0 1-9.333 13.773 14.828 14.828 0 0 1-9.333-13.773v-6.708Z"
        />
        <mask
          id={`${uid}-MD-b`}
          x="26"
          y="14"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#005EB8"
            d="M26.48 14.708h18.666v6.709a14.828 14.828 0 0 1-9.333 13.772 14.828 14.828 0 0 1-9.333-13.772v-6.709Z"
          />
        </mask>
        <g mask={`url(#${uid}-MD-b)`}>
          <path fill="#0091DA" d="M26.48 24.182h18.666v11.171H26.48v-11.17Z" />
          <path
            fill="#F1B434"
            d="M37.867 23.684a3.72 3.72 0 0 0 .773-5.859l-.755.753a2.651 2.651 0 0 1-.018 3.78v-.969h-3.734v.969a2.648 2.648 0 0 1-.8-1.9c0-.734.299-1.399.781-1.88l-.754-.753a3.72 3.72 0 0 0 .773 5.859v5.153c0 1.028.836 1.862 1.867 1.862 1.03 0 1.867-.834 1.867-1.862v-5.153ZM36 16.735h.015-.03H36Z"
          />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default MD_Sharp;
