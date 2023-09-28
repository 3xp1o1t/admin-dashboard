'use client';

import { menus } from '@/lib/menus';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';

export default function SidebarSearch() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const onClick = (id: string) => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-slate-500/10 "
      >
        <Search className="w-4 h-4 text-slate-600" />
        <p className="font-semibold text-sm text-slate-400 group-hover:text-slate-600">
          Search
        </p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">C</span>k
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search menu" />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          {menus.map((section) => (
            <CommandGroup key={section.category} heading={section.category}>
              {section?.items.map((item, i) => (
                <CommandItem key={i} onSelect={() => onClick(item.slug)}>
                  <span className="cursor-pointer">{item.menu}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
