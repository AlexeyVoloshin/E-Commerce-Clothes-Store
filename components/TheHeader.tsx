import { ROUTES } from "@/core/routes";
import { Navigation } from "./Navigation";
import { IconCart } from "./Icons/IconCart";
import Link from "next/link";

const navItems = [{ label: "Home", href: ROUTES.static.home }];

const TheHeader = () => {
  return (
    <header className="bg-slate-900 fixed w-full z-10">
      <div className="container m-auto">
        <div className="flex items-center">
          <Navigation navLinks={navItems} />
          <Link href={ROUTES.static.cart} className="p-1">
            <IconCart className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { TheHeader };
