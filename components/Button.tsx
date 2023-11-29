import clsx from "clsx";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={clsx(
        "hover:transition-all ease-in-out delay-150 bg-sky-500 p-2 rounded-lg text-white font-bold  hover:bg-sky-700 duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
