'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { clsx } from 'clsx';

type NavLinkType = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLinkType[];
};

const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const pathname = usePathname();
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-center p-5 lg:px-8"
      aria-label="Global">
      {navLinks.map((link, index) => {
        const regex = /(?<=\/)(.*?)(?=\/)/;
        const bitLink = regex.exec(pathname);

        const isActive = bitLink
          ? '/' + bitLink[0] === link.href
          : pathname.includes(link.href)
          ? true
          : false;

        return (
          <Link
            key={index}
            href={link.href}
            className={clsx('text-white', {
              ['text-amber-300']: isActive,
            })}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export { Navigation };
