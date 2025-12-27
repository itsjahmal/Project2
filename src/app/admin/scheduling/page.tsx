
'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle } from 'lucide-react';

// MOCK DATA based on the provided SQL schema
const scheduledJobs = [
    {
        id: 'SCH-001',
        quote_id: 'QT-001',
        employee_id: 'EMP-002',
        date: new Date('2024-07-15T09:00:00'),
        status: 'Confirmed'
    },
    {
        id: 'SCH-002',
        quote_id: 'QT-003',
        employee_id: 'EMP-003',
        date: new Date('2024-07-15T13:00:00'),
        status: 'Confirmed'
    },
    {
        id: 'SCH-003',
        quote_id: 'QT-005',
        employee_id: 'EMP-001',
        date: new Date('2024-07-16T10:00:00'),
        status: 'Pending'
    },
];

export default function SchedulingPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    // TODO: Fetch scheduled jobs from your API based on the selected month/year
    const jobsForSelectedDay = scheduledJobs.filter(
        job => date && job.date.toDateString() === date.toDateString()
    );

    return (
        <div className="flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Scheduling</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Job
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                     <CardContent className="p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="p-0 [&_td]:w-14 [&_td]:h-14"
                             components={{
                                Day: ({ date, displayMonth }) => {
                                    const isScheduled = scheduledJobs.some(job => job.date.toDateString() === date.toDateString());
                                    const isSelected = date.toDateString() === (new Date()).toDateString();
                                    return (
                                        <div className={`relative h-14 w-14 p-0 ${isSelected ? 'bg-muted' : ''}`}>
                                            {date.getDate()}
                                            {isScheduled && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary"></span>}
                                        </div>
                                    );
                                },
                            }}
                        />
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Jobs for {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Today'}</CardTitle>
                        <CardDescription>
                            {/* TODO: Connect this to your API */}
                            {jobsForSelectedDay.length} jobs scheduled.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {jobsForSelectedDay.length > 0 ? jobsForSelectedDay.map(job => (
                             <div key={job.id} className="p-4 rounded-lg border bg-card text-card-foreground">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold">Quote ID: {job.quote_id}</p>
                                        <p className="text-sm text-muted-foreground">Assigned to: Employee {job.employee_id}</p>
                                        <p className="text-sm text-muted-foreground">Time: {job.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    </div>
                                    <Badge variant="outline">{job.status}</Badge>
                                </div>
                             </div>
                        )) : (
                            <div className="text-center text-muted-foreground py-8">
                                <p>No jobs scheduled for this day.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
