import { ChildrenType } from "@/types/Types";

type ContainerType = ChildrenType & {
  className: string;
};
const Container = ({ className, children }: ContainerType) => {
  return <div className={`${className} mx-auto`}>{children}</div>;
};

export default Container;
