import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const wrapper = (props: Props) => {
  return <div className="max-w-[1400px] -ml-6 md:m-auto">{props.children}</div>;
};

export default wrapper;
