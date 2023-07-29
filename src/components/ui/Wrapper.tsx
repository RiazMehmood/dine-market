import { ReactChild } from "@/lib/types";


const wrapper = (ReactChild: ReactChild) => {
  return <div className="max-w-7xl m-auto">{ReactChild.children}</div>;
};

export default wrapper;
