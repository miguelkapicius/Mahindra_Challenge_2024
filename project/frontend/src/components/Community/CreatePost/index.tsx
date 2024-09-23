import { ProfileAvatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Camera, Image, MapPin, Paperclip } from "lucide-react";
import { useState } from "react";

export function CreatePost() {
    const [postContent, setPostContent] = useState("");
    function onHandleSubmit() {
        axios.post("http://localhost:3000/posts", {
            author: "66edb87b104fde8288c2acf6",
            content: postContent,
        });
        setPostContent("");
    }
    return (
        <Card>
            <CardHeader className="flex flex-row items-start gap-6">
                <ProfileAvatar />
                <Textarea
                    onChange={(e) => setPostContent(e.target.value)}
                    value={postContent}
                    placeholder="What's on your mind?"
                />
            </CardHeader>
            <CardFooter className="flex justify-between">
                <div className="flex gap-6 text-muted-foreground *:size-5">
                    <Camera />
                    <Image />
                    <Paperclip />
                    <MapPin />
                </div>
                <Button onClick={() => onHandleSubmit()}>Post</Button>
            </CardFooter>
        </Card>
    );
}
