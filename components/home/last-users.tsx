import { lastUsers } from '@/lib/menus';
import Image from 'next/image';
const LastUsers = () => {
  return (
    <>
      <h1 className="mb-5 text-xl font-bold">Last Users</h1>
      <ul role="list">
        {lastUsers.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between mb-7 group/item  cursor-pointer"
          >
            <div className="flex gap-5">
              <Image
                src={user.img}
                className="object-cover rounded-full group-hover/item:animate-bounce"
                width={40}
                height={40}
                alt="user_image"
              />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">{user.username}</span>
                <span className="text-xs opacity-60">{user.email}</span>
              </div>
            </div>
            <span className="font-medium text-emerald-400">
              ${user.billions}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LastUsers;
