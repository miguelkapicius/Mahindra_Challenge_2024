import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Friend ID" />
      <Button type="submit">Add Friend</Button>
    </div>
  )
}
