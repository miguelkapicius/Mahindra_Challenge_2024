import api from "@/axiosInstance";
import { PointsChart } from "@/components/myTeam/PointsChart";
import {
    AlertDialogAction,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/auth";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";
import { Pencil } from "lucide-react";
import { useContext, useState } from "react";

export function MyTeam() {
    const { user } = useContext(AuthContext);
    const [bannerUrl, setBannerUrl] = useState("");
    const [banner, setBanner] = useState(user?.banner);
    function changeBanner() {
        setBanner(bannerUrl);
        api.put(`/users/${user?._id}`, {
            banner,
        });
    }
    return (
        <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display">
                My Team <span className="text-4xl">| {user?.username}</span>
            </h2>
            <AspectRatio
                ratio={4 / 1}
                className="bg-muted rounded relative drop-shadow-md"
            >
                <div className="absolute bottom-0 left-0 p-2 flex justify-between items-end w-full">
                    <img
                        draggable="false"
                        className="rounded size-24"
                        src={user?.imageUrl}
                        alt={`${user?.name} image profile`}
                    />
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="flex gap-2 items-center">
                                <Pencil className="size-4" />
                                Set Banner
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="w-full bg-background absolute right-0 bottom-0 flex flex-col space-y-6 p-6 border">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-lg">
                                    Change Banner
                                </AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="sm:justify-start sm:flex-col space-y-6">
                                <Input
                                    onChange={(e) =>
                                        setBannerUrl(e.target.value)
                                    }
                                    defaultValue={banner}
                                    className="w-1/2"
                                />
                                <div className="flex gap-6">
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() => changeBanner()}
                                    >
                                        Continue
                                    </AlertDialogAction>
                                </div>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
                <img
                    draggable="false"
                    className="size-full rounded object-cover"
                    src={banner}
                    alt={`${user?.name}'s banner`}
                />
            </AspectRatio>
            <PointsChart />
        </section>
    );
}
