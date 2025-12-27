
import { Button } from "@/components/ui/button";

export default function EmployeesPage() {
    return (
        <div className="flex flex-col gap-4">
             <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Employees</h1>
            </div>
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-8"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight">Employee Management Coming Soon</h2>
                    <p className="text-muted-foreground mt-2">
                        This is where you will manage your team, including roles, contact information, and assignments.
                         {/* TODO: Add a table or list component here to display employees from your API. */}
                    </p>
                    <Button className="mt-4">Add New Employee</Button>
                </div>
            </div>
        </div>
    )
}
