'use client';
import { cn } from '@/lib/utils';
import { BoxesIcon, DollarSign, Ratio, Users } from 'lucide-react';
import Link from 'next/link';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

interface ChartBoxProps {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  data: object[];
}

const iconMap = {
  users: <Users className="h-4 w-4" />,
  products: <BoxesIcon className="h-4 w-4" />,
  ratio: <Ratio className="h-4 w-4" />,
  revenue: <DollarSign className="h-4 w-4" />,
};

const ChartBox = ({
  color,
  icon,
  title,
  dataKey,
  number,
  percentage,
  data,
}: ChartBoxProps) => {
  return (
    <div className="flex h-full">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2">
          {iconMap[icon as keyof typeof iconMap]}
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link href="/" className="text-xs text-slate-500">
          View more...
        </Link>
      </div>
      <div className="flex flex-col justify-between">
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right">
          <span
            className={cn(
              'font-bold text-xl',
              percentage < 0 ? 'text-rose-600' : 'text-emerald-600',
            )}
          >
            {percentage}%
          </span>
          <span className="text-sm">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
