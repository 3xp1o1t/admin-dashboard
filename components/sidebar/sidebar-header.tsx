import UserAvatar from '@/components/user-avatar';
import { userData } from '@/lib/menus';

// userData podria venir de un metodo auth que retorne su info, similar a clerk
export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-center pt-2 pb-2 ">
      <UserAvatar {...userData} />
    </div>
  );
}
