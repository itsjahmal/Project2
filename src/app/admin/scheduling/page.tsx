
'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, ServerCrash } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


type JobStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

type ScheduledJob = {
    id: string;
    quote_id: string;
    employee_id: string;
    date: string; // ISO date string
    status: JobStatus;
};

export default function SchedulingPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [scheduledJobs, setScheduledJobs] = useState<ScheduledJob[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchJobs() {
            setLoading(true);
            setError(null);
            try {
                // The rewrite in next.config.js will proxy this to https://api.moemoeenterprise.com/jobs/list.php
                const response = await fetch('/api/jobs/list.php', {
                    credentials: 'include'
                });
                
                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    throw new Error(errorData?.message || `Failed to fetch jobs. Status: ${response.status}`);
                }

                const data = await response.json();
                if (data.success) {
                    setScheduledJobs(data.jobs);
                } else {
                    throw new Error(data.message || "API returned an error.");
                }
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    const jobsForSelectedDay = scheduledJobs.filter(
        job => date && new Date(job.date).toDateString() === date.toDateString()
    );

    const renderJobContent = () => {
        if (loading) {
            return (
                 <div className="space-y-4">
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                 </div>
            )
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
        
        if (jobsForSelectedDay.length > 0) {
            return jobsForSelectedDay.map(job => (
                <div key={job.id} className="p-4 rounded-lg border bg-card text-card-foreground">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-semibold">Quote ID: {job.quote_id}</p>
                            <p className="text-sm text-muted-foreground">Assigned to: Employee {job.employee_id}</p>
                            <p className="text-sm text-muted-foreground">Time: {new Date(job.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                        <Badge variant="outline">{job.status}</Badge>
                    </div>
                </div>
            ))
        }

        return (
            <div className="text-center text-muted-foreground py-8">
                <p>No jobs scheduled for this day.</p>
            </div>
        )
    }

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
                                    const isScheduled = scheduledJobs.some(job => new Date(job.date).toDateString() === date.toDateString());
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
                            {jobsForSelectedDay.length} jobs scheduled.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       {renderJobContent()}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
