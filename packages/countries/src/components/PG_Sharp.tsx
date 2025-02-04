// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type PG_SharpProps = CountrySymbolProps;

const PG_Sharp = forwardRef<SVGSVGElement, PG_SharpProps>(function PG_Sharp(
  props: PG_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="PG_Sharp"
      aria-label="Papua New Guinea"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-PG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-PG-a)`}>
        <path fill="#DD2033" d="M72 50H0V0h72v50Z" />
        <path
          fill="#31373D"
          d="m30.15 51.148 31.017-.716L-.15-10.885v62.033h30.3Z"
        />
        <path
          fill="#F5F7F8"
          d="M15.903 13.98 15 12l-.902 1.98-2.038-.495.912 1.975-1.638 1.363 2.04.483-.006 2.194L15 18.127l1.632 1.373-.006-2.194 2.04-.483-1.638-1.363.913-1.975-2.038.495ZM7.667 18l.902 1.98 2.038-.495-.913 1.975 1.64 1.363-2.041.483.005 2.194-1.631-1.373L6.035 25.5l.006-2.194L4 22.823l1.639-1.363-.913-1.975 2.038.495.903-1.98ZM12.8 36l1.083 2.376 2.446-.593-1.096 2.369 1.967 1.636-2.449.579.007 2.633-1.958-1.647L10.842 45l.007-2.633-2.449-.579 1.967-1.636-1.096-2.37 2.446.594L12.8 36Zm9.533-16.5.903 1.98 2.038-.495-.913 1.975L26 24.323l-2.04.483.005 2.194-1.632-1.373L20.702 27l.005-2.194-2.04-.483 1.638-1.363-.912-1.975 2.038.495.902-1.98Zm-5.499 12c1.012 0 1.833-.84 1.833-1.875 0-1.035-.821-1.875-1.834-1.875-1.012 0-1.833.84-1.833 1.875 0 1.035.821 1.875 1.834 1.875Z"
        />
        <path
          fill="#F1B434"
          d="M45.665 9.378a3.338 3.338 0 0 0-4.665.724l5.614 4.106a4.45 4.45 0 0 0-3.032 7.15l5.064-3.921a7.145 7.145 0 0 0 9.268 9.75l-3.076-6.966 5.697 4.166a3.616 3.616 0 0 1 .785 5.054l-.164.224a3.338 3.338 0 0 1-4.665.725l-1.314 1.796a5.563 5.563 0 0 0 7.775-1.207l.164-.225a5.842 5.842 0 0 0-1.267-8.163l-5.723-4.185 7.607.823a7.145 7.145 0 0 0-11.526-6.38l2.406-6.577a4.45 4.45 0 0 0-5.81 5.4l-3.138-2.294Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default PG_Sharp;
