import { memo, ReactNode, VFC } from "react";

import { WorkHeader } from "../organisms/layout/WorkHeader";

type Props = {
  children: ReactNode;
};

export const WorkHeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <WorkHeader />
      {children}
    </>
  );
});
