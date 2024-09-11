import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AddFriend() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Friend ID" />
      <Button variant="secondary" type="submit">Send Invite</Button>
    </div>
  )
}
