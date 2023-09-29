import { SidebarProps } from '@/lib/menus';
import Image from 'next/image';
export default function Logo({ logo }: SidebarProps) {
  return (
    <div className="relative h-16 w-full cursor-pointer flex items-center">
      <Image
        fill
        src={logo}
        alt="appLogo"
        className="object-center p-3 dark:invert"
        priority
      />
    </div>
  );
}
