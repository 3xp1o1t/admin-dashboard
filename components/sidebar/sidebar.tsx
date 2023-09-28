import { Separator } from '@/components/ui/separator';
import { menus } from '@/lib/menus';
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
import { ScrollArea } from '../ui/scroll-area';
import SidebarHeader from './sidebar-header';
import SidebarSearch from './sidebar-search';
import Logo from './siderbar-logo';

const menuIconMap = {
  home: <Home className="flex-shrink-0 w-5 h-5 text-slate-100" />,
  users: <Users className="flex-shrink-0 w-5 h-5 text-slate-100" />,
  products: <Box className="flex-shrink-0 w-5 h-5 text-slate-100" />,
  providers: <Users2 className="flex-shrink-0 w-5 h-5 text-slate-100" />,
  server: <Server className="flex-shrink-0 w-5 h-5 text-slate-100" />,
  charts: <BarChart className="flex-shrink-0 w-5 h-5 text-slate-100" />,
  lock: <Lock className="flex-shrink-0 w-5 h-5 text-slate-100" />,
  info: <Info className="flex-shrink-0 w-5 h-5 text-slate-100" />,
};

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full text-primary w-full bg-[#2E3440]">
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
                <button className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-slate-700/10">
                  {menuIconMap[item.icon as keyof typeof menuIconMap]}
                  <p className="line-clamp-1 font-semibold text-sm text-slate-400 group-hover:text-slate-600">
                    {item.menu}
                  </p>
                </button>
              </div>
            ))}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
