import type { Stats } from '@/app/types/stats';

export function StatsRow({ stats }: { stats: Stats[] }) {
  return (
    <div className="grid lg:grid-cols-3 w-full gap-4 md:gap-0 z-4">
      {stats.map((stat) => (
        <div key={stat.heading} className="flex flex-col gap-4 items-center">
          <h4 className="text-page-title-l-desktop text-center">{stat.heading}</h4>
          <p>{stat.content}</p>
        </div>
      ))}
    </div>
  );
}
