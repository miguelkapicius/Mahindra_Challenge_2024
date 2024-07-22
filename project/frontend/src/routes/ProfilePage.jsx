import {
    ArrowRight,
    Bolt,
    CircleDollarSign,
    Users,
    Waypoints,
} from "lucide-react";

export function ProfilePage() {
    return (
        <div className="h-screen">
            <div className="bg-zinc-900 flex p-2 gap-4">
                <img
                    src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-16 rounded"
                />
                <div className=" w-full flex items-center justify-between">
                    <div className="rounded">
                        <span className="block leading-6 font-bold text-zinc-100">
                            miguelkapicius
                        </span>
                        <span className="block leading-6 text-sm text-zinc-100/80">
                            @miguelkapicius__
                        </span>
                    </div>
                    <button className="p-2 bg-zinc-900 rounded shadow-shape">
                        <Bolt className="" />
                    </button>
                </div>
            </div>
            <div className="bg-blue-900 px-2 py-6 space-y-6">
                <div className="flex gap-2 items-center">
                    <span className="flex w-1/2 justify-center font-medium bg-zinc-900 px-4 rounded py-1 items-center gap-2 shadow-shape">
                        <Waypoints />
                        4000
                    </span>
                    <span className="flex w-1/2 font-medium justify-center bg-zinc-900 px-4 rounded py-1 items-center gap-2 shadow-shape">
                        <CircleDollarSign />
                        1236,00
                    </span>
                </div>
                <div className="flex flex-col justify-between gap-6">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2">
                            <Users />
                            1200
                        </span>
                        <button className="bg-zinc-800 p-2 flex items-center justify-center gap-2 rounded flex-1 shadow-shape">
                            Send invite <ArrowRight />
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div
                            className="w-full flex items-center justify-around rounded bg-blue-950 p-2 shadow-shape"
                        >
                            <div className="flex w-2/3 gap-4 items-center">
                                <span className="w-1/4 text-blue-800">
                                    # 11
                                </span>
                                <img
                                    src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="w-1/4 rounded bg-zinc-950"
                                />
                                <div className="w-2/4">
                                    <span className="block text-sm text-zinc-200 leading-6 truncate">
                                        thiagostoso
                                    </span>
                                    <span className="block text-xs text-zinc-500 truncate">
                                        delicios
                                    </span>
                                </div>
                            </div>
                            <div className="rounded bg-zinc-800 shadow-shape p-2 flex items-center gap-2">
                                <Waypoints className="size-4" />
                                <span>3500</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
