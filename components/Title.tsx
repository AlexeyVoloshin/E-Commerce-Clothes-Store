import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="pt-4 pb-4 text-center">
      <h1 className="font-bold text-2xl/[26px]">{children}</h1>
    </div>
  );
};

export { Title };
