import { ReactElement } from "react";
import { FlowLayout, Tag } from "@salt-ds/core";

export const Bordered = (): ReactElement => (
  <FlowLayout>
    <Tag bordered>Primary</Tag>
    <Tag variant="secondary" bordered>
      Secondary
    </Tag>
  </FlowLayout>
);
