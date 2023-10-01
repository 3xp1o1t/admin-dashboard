import LastUsers from '@/components/home/last-users';

export default function HomePage() {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      <div className="row-span-3 p-5 rounded-lg border-slate-300 dark:border-slate-600 border-[1px]">
        <LastUsers />
      </div>
      <div className="bg-red-300 p-4">4</div>
      <div className="bg-purple-300 p-4">5</div>
      <div className="bg-pink-300 p-4">6</div>
      <div className="bg-orange-300 row-span-2 col-span-2 p-4">7</div>
      <div className="bg-indigo-300 p-4">8</div>
      <div className="bg-teal-300 p-4">9</div>
      <div className="bg-gray-300 row-span-3 p-4">13</div>
      <div className="bg-stone-300 p-4">16</div>
    </div>
  );
}
