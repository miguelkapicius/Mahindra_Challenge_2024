import { ProfileAvatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Image, MapPin, Paperclip } from "lucide-react";

export function CreatePost() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-start gap-6">
                <ProfileAvatar />
                <Textarea placeholder="What's on your mind?"/>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <div className="flex gap-6 text-muted-foreground *:size-5">
                    <Camera />
                    <Image />
                    <Paperclip />
                    <MapPin />
                </div>
                <Button>
                    Post
                </Button>
            </CardFooter>
        </Card>
    )
}