
import { Button } from "@/components/ui/button";

export default function SchedulingPage() {
    return (
        <div className="flex flex-col gap-4">
             <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Scheduling</h1>
            </div>
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-8"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight">Scheduling Calendar Coming Soon</h2>
                    <p className="text-muted-foreground mt-2">
                        This is where you will manage all scheduled jobs for cleaning, moving, and courier services.
                         {/* TODO: Add a calendar component here (e.g., from a library like react-big-calendar) */}
                    </p>
                    <Button className="mt-4">Create New Job</Button>
                </div>
            </div>
        </div>
    )
}
