export function StatisticsTeam({ logo, teamName }) {
    return (
        <div className="w-full flex gap-2 items-center rounded bg-zinc-900 p-2 shadow-shape">
            <img className="rounded bg-white w-24 p-1" src={logo} />
            <span className="text-sm truncate">{teamName}</span>
        </div>
    );
}
