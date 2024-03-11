import { FC, PropsWithChildren } from "react";

type CustomResponsiveContainerProps = {
  className?: string;
  id?: string;
};

const CustomResponsiveContainer: FC<
  PropsWithChildren<CustomResponsiveContainerProps>
> = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={`container mx-auto max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomResponsiveContainer;
