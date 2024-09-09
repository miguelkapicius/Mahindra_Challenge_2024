import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const leaderboard = [
    {
      position: 7,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 2,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 3,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 4,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 5,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 6,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 1,
      name: "eu",
      time: "08:32",
    },
    {
      position: 8,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 9,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 10,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 11,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 12,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 13,
      name: "Pilot 1",
      time: "08:32",
    },
    {
      position: 14,
      name: "Pilot 1",
      time: "08:32",
    },
  ]
  
  export function Leaderboard() {
    return (
      <Table>
        <TableCaption>Leaderboard</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-[100px]">Position</TableHead>
            <TableHead>Pilot</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboard
            .sort((a, b) => a.position - b.position)
            .map((pilot) => (
              <TableRow key={pilot.name}>
                <TableCell className={`text-center font-medium ${pilot.position <= 3 && "text-green-500"} ${pilot.position >= 12 && "text-red-500"}`}>{pilot.position}</TableCell>
                <TableCell>{pilot.name}</TableCell>
                <TableCell className="text-right">{pilot.time}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    )
  }
  