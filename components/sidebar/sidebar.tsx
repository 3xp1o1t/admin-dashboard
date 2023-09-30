'use client';

import { ActionTooltip } from '@/components/action-tooltip';
import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import SidebarHeader from './sidebar-header';
import SidebarItem from './sidebar-item';
import SidebarSearch from './sidebar-search';
import Logo from './siderbar-logo';

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full text-primary w-full bg-slate-100 dark:bg-[#2E3440]">
      <Logo logo="next.svg" />
      <SidebarHeader />
      <ScrollArea className="flex-1 px-3">
        <ActionTooltip label="Click for search or Ctrl+k">
          <div className="mt-2">
            <SidebarSearch />
          </div>
        </ActionTooltip>
        <Separator className="h-[1px] bg-slate-600 rounded-md my-2" />
        <SidebarItem />
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
