import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ChartNoAxesGantt } from "lucide-react"
  
  const users = [
    {
      id: "INV001",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      pilot: "Mortara",
      username: "Paid",
      points: "2000",
    },
    {
      id: "INV002",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      pilot: "Mortara",
      username: "Paid",
      points: "1900",
    },
    {
      id: "INV003",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      pilot: "Mortara",
      username: "Paid",
      points: "1800",
    },
    {
      id: "INV003",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      pilot: "Mortara",
      username: "Paid",
      points: "1800",
    },
    {
      id: "INV003",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      pilot: "Mortara",
      username: "Paid",
      points: "1800",
    },
  ]
  
  export function Leaderboard() {

    

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User ID</TableHead>
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead>Best Pilot</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Total Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{`#${user.id}`}</TableCell>
              <TableCell className="font-medium">
                <img className="rounded-full size-8" draggable="false" src={user.img} alt={user.username} />
              </TableCell>
              <TableCell>{user.pilot}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell className="text-right flex items-center justify-end gap-2"><ChartNoAxesGantt />{user.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  