import { ProfileAvatar } from "@/components/Avatar";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { HandHeart, MessageCircle, Share } from "lucide-react";
import { useEffect, useState } from "react";

interface Author {
    username: string;
    imageUrl: string;
}

interface Post {
    _id: string;
    title: string;
    content: string;
    likes: number;
    author: Author;
    createdAt: Date;
}

export function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        axios.get("http://localhost:3000/posts").then((response) => {
            setPosts(response.data);
        });
    }, [posts]);
    async function Like(postId: string) {
        const response = await axios.put<Post>(
            `http://localhost:3000/posts/${postId}/like`
        );

        const updatedPost = await response.data;

        setPosts((prevPost) =>
            prevPost.map((post) => (post._id === postId ? updatedPost : post))
        );
    }
    return (
        <section className="space-y-6 pb-6">
            {posts.map((post) => (
                <Card key={post._id}>
                    <CardHeader className="flex flex-row gap-6 items-center">
                        <ProfileAvatar image_url={post?.author?.imageUrl} />
                        <div className="flex flex-col m-0">
                            <span>{post?.author?.username}</span>
                            <span className="text-muted-foreground text-sm">
                                {formatDistanceToNow(post.createdAt)}
                            </span>
                        </div>
                    </CardHeader>
                    <CardContent>{post.content}</CardContent>
                    <CardFooter className="flex gap-6 text-muted-foreground">
                        <div
                            className="flex gap-2 items-center hover:text-foreground"
                            onClick={() => Like(post._id)}
                        >
                            <HandHeart />
                            <span>{post.likes}</span>
                        </div>
                        <MessageCircle />
                        <Share />
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}
