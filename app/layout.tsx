import Sidebar from '@/components/sidebar/sidebar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sidebar Example',
  description: 'Made with love by 3xp1o1t',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, 'bg-[#434c5e]')}>
        <div className="h-full">
          <div className="flex h-full w-56 z-20 flex-col fixed inset-y-0">
            <Sidebar />
          </div>
          <div className="flex flex-col h-full pl-60 pt-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
