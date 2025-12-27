
import { Button } from "@/components/ui/button";
import { PlusCircle, MoreHorizontal } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from "@/components/ui/badge";

// MOCK DATA based on the provided SQL schema
const employees = [
    {
        id: 'EMP-001',
        name: 'John Smith',
        email: 'john.s@moemoeenterprise.com',
        phone: '404-555-0101',
        role: 'Cleaner',
    },
    {
        id: 'EMP-002',
        name: 'Maria Garcia',
        email: 'maria.g@moemoeenterprise.com',
        phone: '404-555-0102',
        role: 'Mover',
    },
    {
        id: 'EMP-003',
        name: 'David Lee',
        email: 'david.l@moemoeenterprise.com',
        phone: '404-555-0103',
        role: 'Driver',
    },
    {
        id: 'EMP-004',
        name: 'Sarah Chen',
        email: 'sarah.c@moemoeenterprise.com',
        phone: '404-555-0104',
        role: 'Admin',
    },
];

const roleStyles: { [key: string]: string } = {
    Cleaner: 'bg-blue-100 text-blue-800',
    Mover: 'bg-green-100 text-green-800',
    Driver: 'bg-purple-100 text-purple-800',
    Admin: 'bg-gray-100 text-gray-800',
}


export default function EmployeesPage() {
    return (
        <div className="flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Employees</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add New Employee
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Employee Roster</CardTitle>
                    <CardDescription>Manage your team members and their roles.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* TODO: Fetch employees from your API endpoint */}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead className="hidden md:table-cell">Role</TableHead>
                                <TableHead className="hidden md:table-cell">Contact</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {employees.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell>
                                        <div className="font-medium">{employee.name}</div>
                                        <div className="text-sm text-muted-foreground">{employee.email}</div>
                                    </TableCell>
                                     <TableCell className="hidden md:table-cell">
                                        <Badge variant="outline" className={roleStyles[employee.role]}>
                                            {employee.role}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">{employee.phone}</TableCell>
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
                                                <DropdownMenuItem>Edit Details</DropdownMenuItem>
                                                <DropdownMenuItem>View Schedule</DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
