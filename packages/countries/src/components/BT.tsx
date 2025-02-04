// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BTProps = CountrySymbolProps;

const BT = forwardRef<SVGSVGElement, BTProps>(function BT(props: BTProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="BT"
      aria-label="Bhutan"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-BT-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-BT-a)`}>
        <path fill="#E26E00" d="M0 0h72v72H0z" />
        <path fill="#F1B434" d="M-.4 0v72l72-72h-72Z" />
        <path
          fill="#F5F7F8"
          d="M43.144 14.308c-4.132-.893-7.685 3.017-6.402 7.045l3.543 11.13-10.967-2.172c-3.4-.674-6.569 1.929-6.569 5.395v5.277l-8.86 4.964 3.422 6.106 5.79-3.243V55h7v-6.502l3.537.471.925-6.938-4.814-.642v-3.857l9.366 1.855-.703 2.109a5.5 5.5 0 0 0 3.479 6.957l8.602 2.867 2.214-6.64-7.18-2.394 1.596-4.786H55.1v-7H47l-2.803-8.802 11.664 2.52 1.478-6.842-14.195-3.068Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default BT;
