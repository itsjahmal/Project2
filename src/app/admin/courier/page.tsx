
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";

// MOCK DATA based on the provided SQL schema
const courierOps = [
    {
        id: 'COP-001',
        quote_id: 'QT-004',
        driver_id: 'EMP-003',
        pickup_time: '2023-06-26 10:00 AM',
        delivery_time: '2023-06-26 11:30 AM',
        status: 'Delivered',
    },
    {
        id: 'COP-002',
        quote_id: 'QT-006',
        driver_id: 'EMP-003',
        pickup_time: '2023-06-27 02:00 PM',
        delivery_time: null,
        status: 'In Transit',
    },
    {
        id: 'COP-003',
        quote_id: 'QT-007',
        driver_id: 'EMP-005',
        pickup_time: null,
        delivery_time: null,
        status: 'Assigned',
    },
];

const statusStyles: { [key: string]: string } = {
    Assigned: 'bg-yellow-100 text-yellow-800',
    'In Transit': 'bg-blue-100 text-blue-800',
    Delivered: 'bg-green-100 text-green-800',
    Delayed: 'bg-red-100 text-red-800',
}

export default function CourierOpsPage() {
    return (
        <div className="flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Courier Operations</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Dispatch New Courier
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Live Courier Jobs</CardTitle>
                    <CardDescription>Monitor and manage all active courier routes.</CardDescription>
                </CardHeader>
                 <CardContent>
                    {/* TODO: Fetch courier operations from your API endpoint */}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Job ID</TableHead>
                                <TableHead>Driver</TableHead>
                                <TableHead className="hidden md:table-cell">Status</TableHead>
                                <TableHead className="hidden md:table-cell">Pickup Time</TableHead>
                                <TableHead className="hidden md:table-cell">Delivery Time</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {courierOps.map((op) => (
                                <TableRow key={op.id}>
                                    <TableCell>
                                        <div className="font-medium">{op.id}</div>
                                        <div className="text-sm text-muted-foreground">Quote: {op.quote_id}</div>
                                    </TableCell>
                                     <TableCell>Driver {op.driver_id}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Badge variant="outline" className={statusStyles[op.status]}>
                                            {op.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">{op.pickup_time || 'N/A'}</TableCell>
                                    <TableCell className="hidden md:table-cell">{op.delivery_time || 'N/A'}</TableCell>
                                    <TableCell>
                                         <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>View Route</DropdownMenuItem>
                                                <DropdownMenuItem>Update Status</DropdownMenuItem>
                                                <DropdownMenuItem>Contact Driver</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-8"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight">Live Courier Map Coming Soon</h2>
                    <p className="text-muted-foreground mt-2">
                        This is where you will see a live map of all active courier routes and driver locations.
                    </p>
                </div>
            </div>
        </div>
    )
}
