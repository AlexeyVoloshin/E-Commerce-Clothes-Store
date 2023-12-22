import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { TheHeader } from '@/components/TheHeader';
import { TheFooter } from '@/components/TheFooter';
import { TheMain } from '@/components/TheMain';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page e-commerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className=" m-auto flex min-h-full flex-col ">
          <TheHeader />
          <TheMain>{children}</TheMain>
          <TheFooter />
        </div>
      </body>
    </html>
  );
}
