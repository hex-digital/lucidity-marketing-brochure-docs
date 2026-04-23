import {Stats} from "@/types/stats";

export function StatsRow({ stats } : {stats: Stats[]}) {
    return (
        <div className="grid lg:grid-cols-3 w-full z-4">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-4 items-center">
                    <h4 className="text-page-title-l-desktop text-center">
                        { stat.heading }
                    </h4>
                    <p>{ stat.content }</p>
                </div>
            ))}
        </div>
    )
}