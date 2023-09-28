import UserAvatar from '@/components/user-avatar';

export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-center pt-2 pb-2 ">
      <UserAvatar
        src="http://m.gettywallpapers.com/wp-content/uploads/2023/06/Pfp-Cool.jpg"
        username="3xp1o1t"
      />
    </div>
  );
}
