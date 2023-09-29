import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/lib/menus';
import { LogOut, Settings, ShieldAlert, UserIcon } from 'lucide-react';
import { Separator } from './ui/separator';

export default function UserAvatar({ src, username, isAdmin }: UserInfo) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <Avatar className="relative h-16 w-16 cursor-pointer border-solid border-2 border-sky-600 hover:border-sky-500">
          <AvatarImage src={src} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
        <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm text-slate-700 dark:text-slate-400">
          {username}
          {isAdmin ? (
            <ShieldAlert className="h-4 w-4 ml-auto text-sky-500" />
          ) : (
            <UserIcon className="h-4 w-4 ml-auto text-slate-500" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm">
          Settings
          <Settings className="h-4 w-4 ml-auto text-slate-500" />
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm text-rose-500">
          Logout
          <LogOut className="h-4 w-4 ml-auto" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
