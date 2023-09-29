'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { menus } from '@/lib/menus';
import { cn } from '@/lib/utils';
import {
  BarChart,
  Box,
  Home,
  Info,
  Lock,
  Server,
  Users,
  Users2,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import SidebarHeader from './sidebar-header';
import SidebarSearch from './sidebar-search';
import Logo from './siderbar-logo';

const menuIconMap = {
  home: (
    <Home className="flex-shrink-0 w-5 h-5 text-slate-600 dark:text-slate-400" />
  ),
  users: (
    <Users className="flex-shrink-0 w-5 h-5 text-slate-600 dark:text-slate-400" />
  ),
  products: (
    <Box className="flex-shrink-0 w-5 h-5 text-slate-600 dark:text-slate-400" />
  ),
  providers: (
    <Users2 className="flex-shrink-0 w-5 h-5 text-slate-600 dark:text-slate-400" />
  ),
  server: (
    <Server className="flex-shrink-0 w-5 h-5 text-slate-600 dark:text-slate-400" />
  ),
  charts: (
    <BarChart className="flex-shrink-0 w-5 h-5 text-slate-600 dark:text-slate-400" />
  ),
  lock: (
    <Lock className="flex-shrink-0 w-5 h-5 text-slate-600 dark:text-slate-400" />
  ),
  info: (
    <Info className="flex-shrink-0 w-5 h-5 text-slate-600 dark:text-slate-400" />
  ),
};

export default function Sidebar() {
  const router = useRouter();
  const currentPath = usePathname();

  const onClick = (slug: string) => {
    router.push(`${slug}`);
  };

  return (
    <div className="flex flex-col h-full text-primary w-full bg-slate-100 dark:bg-[#2E3440]">
      <Logo logo="next.svg" />
      <SidebarHeader />
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <SidebarSearch />
        </div>
        <Separator className="h-[1px] bg-slate-600 rounded-md my-2" />
        {menus.map((section) => (
          <div key={section.category}>
            <div className="flex items-center justify-between py-2">
              <p className="text-xs uppercase font-semibold text-slate-500">
                {section.category}
              </p>
            </div>
            {section?.items.map((item, i) => (
              <div key={i} className="space-y-[2px]">
                <button
                  onClick={() => onClick(item.slug)}
                  className={cn(
                    'group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-slate-700/10 dark:hover:bg-slate-700/50 transition mb-1',
                    currentPath === item.slug &&
                      'bg-slate-700/20 dark:bg-slate-700',
                  )}
                >
                  {menuIconMap[item.icon as keyof typeof menuIconMap]}
                  <p className="line-clamp-1 font-semibold text-sm text-slate-600 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300 transition">
                    {item.menu}
                  </p>
                </button>
              </div>
            ))}
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
