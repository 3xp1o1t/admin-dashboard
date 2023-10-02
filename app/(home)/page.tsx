import ChartBox from '@/components/charts/chart-box';
import LastUsers from '@/components/home/last-users';
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartsUsersData,
} from '@/lib/menus';

export default function HomePage() {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      <div className="row-span-3 p-5 rounded-lg border-slate-300 dark:border-slate-600 border-[1px]">
        <LastUsers />
      </div>
      <div className="bg-red-300 p-4">4</div>
      <div className="p-4 rounded-lg border-slate-300 dark:border-slate-600 border-[1px]">
        <ChartBox {...chartsUsersData} />
      </div>
      <div className="p-4 rounded-lg border-slate-300 dark:border-slate-600 border-[1px]">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="bg-orange-300 row-span-2 col-span-2 p-4">7</div>
      <div className="p-4 rounded-lg border-slate-300 dark:border-slate-600 border-[1px]">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="p-4 rounded-lg border-slate-300 dark:border-slate-600 border-[1px]">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="bg-gray-300 row-span-3 p-4">13</div>
      <div className="bg-stone-300 p-4">16</div>
    </div>
  );
}
