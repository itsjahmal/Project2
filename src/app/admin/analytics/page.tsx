
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, CartesianGrid, XAxis, Bar, Tooltip } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "January", quotes: 186 },
  { month: "February", quotes: 305 },
  { month: "March", quotes: 237 },
  { month: "April", quotes: 73 },
  { month: "May", quotes: 209 },
  { month: "June", quotes: 214 },
]

const chartConfig = {
  quotes: {
    label: "Quotes",
    color: "hsl(var(--chart-1))",
  },
}

export default function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-4">
             <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Quote Requests - Last 6 Months</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                        <BarChart accessibilityLayer data={chartData}>
                             <CartesianGrid vertical={false} />
                             <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltipContent />
                            <Bar dataKey="quotes" fill="var(--color-quotes)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-8"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight">More Analytics Coming Soon</h2>
                    <p className="text-muted-foreground mt-2">
                        This is where you will see detailed analytics for revenue, employee performance, and more.
                    </p>
                </div>
            </div>
        </div>
    )
}
