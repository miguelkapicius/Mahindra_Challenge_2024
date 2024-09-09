import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const users = [
    {
      id: "INV001",
      pilot: "Mortara",
      username: "Paid",
      points: "2000",
    },
    {
      id: "INV002",
      pilot: "Mortara",
      username: "Paid",
      points: "1900",
    },
    {
      id: "INV003",
      pilot: "Mortara",
      username: "Paid",
      points: "1800",
    },
    {
      id: "INV003",
      pilot: "Mortara",
      username: "Paid",
      points: "1800",
    },
    {
      id: "INV003",
      pilot: "Mortara",
      username: "Paid",
      points: "1800",
    },
  ]
  
  export function Leaderboard() {
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User ID</TableHead>
            <TableHead>Best Pilot</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Total Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow className={index <= 2 ? "bg-green-300 text-black" : ""} key={index}>
              <TableCell className="font-medium">{`#${user.id}`}</TableCell>
              <TableCell>{user.pilot}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell className="text-right">{user.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  