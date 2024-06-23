// we overwrite the headline component for our custom theme
export const DeddebmeSummaryComponents = {
  h1: (props: any) => <h1 {...props}>{props.children}</h1>,
};
