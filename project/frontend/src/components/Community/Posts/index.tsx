import { ProfileAvatar } from "@/components/Avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDistanceToNow } from 'date-fns';
import { HandHeart, MessageCircle, Share } from "lucide-react";

const posts = [
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
    {
        userId: {
            Image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "Miguel Kapicius",
        },
        date: new Date(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti fuga eaque veritatis sit molestiae. Veritatis quis possimus dolorum quisquam beatae sed magni optio error fugiat necessitatibus. Magnam, voluptas aliquam?",
    },
];

export function Posts() {
    return (
        <section className="space-y-6 pb-6">
            {posts.map((post) => (
                <Card>
                    <CardHeader className="flex flex-row gap-6 items-center">
                        <ProfileAvatar image_url={post.userId.Image} />
                        <div className="flex flex-col m-0">
                            <span>{post.userId.name}</span>
                            <span className="text-muted-foreground text-sm">
                                {formatDistanceToNow(post.date)}
                            </span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {post.content}
                    </CardContent>
                    <CardFooter className="flex gap-6 text-muted-foreground *:size-5">
                        <HandHeart />
                        <MessageCircle />
                        <Share />
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}
