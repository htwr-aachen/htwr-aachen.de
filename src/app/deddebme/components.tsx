import { ComponentProps } from "react";

// we overwrite the headline component for our custom theme
export const DeddebmeSummaryComponents = {
  h1: (props: ComponentProps<"h1">) => <h1 {...props}>{props.children}</h1>,
};
