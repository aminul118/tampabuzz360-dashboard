import { ChildrenType } from "@/lib/types";

type ContainerType = ChildrenType & {
  className: string;
};
const Container = ({ className, children }: ContainerType) => {
  return <div className={`${className} mx-auto py-6 px-4`}>{children}</div>;
};

export default Container;
