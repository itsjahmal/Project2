
'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, MoreHorizontal, ServerCrash } from "lucide-react";
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
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


type EmployeeRole = 'Cleaner' | 'Mover' | 'Driver' | 'Admin';

type Employee = {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: EmployeeRole;
};

const roleStyles: Record<EmployeeRole, string> = {
    Cleaner: 'bg-blue-100 text-blue-800',
    Mover: 'bg-green-100 text-green-800',
    Driver: 'bg-purple-100 text-purple-800',
    Admin: 'bg-gray-100 text-gray-800',
};

function TableSkeleton() {
    return (
        <div className="space-y-2">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
        </div>
    );
}

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchEmployees() {
            try {
                // The rewrite in next.config.js will proxy this to https://api.moemoeenterprise.com/employees/list.php
                const response = await fetch('/api/employees/list.php', {
                    // TODO: Add Authorization header with JWT token
                });
                
                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    throw new Error(errorData?.message || `Failed to fetch employees. Status: ${response.status}`);
                }

                const data = await response.json();
                if (data.success) {
                    setEmployees(data.employees);
                } else {
                    throw new Error(data.message || "API returned an error.");
                }
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchEmployees();
    }, []);

    const renderContent = () => {
        if (loading) {
            return <TableSkeleton />;
        }

        if (error) {
            return (
                <Alert variant="destructive">
                    <ServerCrash className="h-4 w-4" />
                    <AlertTitle>Error Fetching Data</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            );
        }

        if(employees.length === 0) {
            return (
                <div className="text-center p-8 border-dashed border-2 rounded-md">
                    <p className="text-muted-foreground">No employees found.</p>
                </div>
            )
        }

        return (
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
        );
    }

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
                    {renderContent()}
                </CardContent>
            </Card>
        </div>
    )
}
