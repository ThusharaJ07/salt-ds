import cx from "classnames";
import { forwardRef, HTMLAttributes } from "react";
import { makePrefixer } from "@salt-ds/core";

import "./StaticInputAdornment.css";

export type StaticInputAdornmentProps = HTMLAttributes<HTMLDivElement>;

const withBaseName = makePrefixer("saltStaticInputAdornment");

export const StaticInputAdornment = forwardRef<
  HTMLDivElement,
  StaticInputAdornmentProps
>(function StaticInputAdornment(props, ref) {
  const { children, className, ...other } = props;

  return (
    <div className={cx(withBaseName(), className)} ref={ref} {...other}>
      {children}
    </div>
  );
});
