import clsx from 'clsx';
import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

type ButtonProps = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  };

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={clsx(
        'hover:transition-all ease-in-out delay-150 bg-sky-500 p-2 rounded-full text-white font-bold  hover:bg-sky-700 duration-300',
        className
      )}>
      {children}
    </button>
  );
};

export { Button };
