import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/auth";
import { useContext, useState } from "react";

export function AddFriend() {
    const { addFriend } = useContext(AuthContext);
    const [friendId, setFriendId] = useState("");

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="email"
                placeholder="Friend ID"
                onChange={(e) => setFriendId(e.target.value)}
            />
            <Button
                variant="secondary"
                type="submit"
                onClick={() => addFriend(friendId)}
            >
                Send Invite
            </Button>
        </div>
    );
}
