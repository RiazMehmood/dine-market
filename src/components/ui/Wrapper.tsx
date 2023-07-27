import { ReactChild } from "@/lib/types";


const wrapper = (ReactChild: ReactChild) => {
  return <div className="max-w-[1400px] m-auto">{ReactChild.children}</div>;
};

export default wrapper;
