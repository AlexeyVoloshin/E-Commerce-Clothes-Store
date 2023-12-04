import { ROUTES } from '@/core/routes';
import { Navigation } from './Navigation';
import { ButtonCart } from './ButtonCart';

const navItems = [{ label: 'Home', href: ROUTES.static.home }];

const TheHeader = () => {
  return (
    <header className="bg-slate-900 fixed w-full z-10">
      <div className="container m-auto">
        <div className="flex items-center">
          <Navigation navLinks={navItems} />
          <ButtonCart />
        </div>
      </div>
    </header>
  );
};

export { TheHeader };
