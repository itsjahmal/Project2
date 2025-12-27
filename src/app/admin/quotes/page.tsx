
'use client';
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// MOCK DATA - Replace with API call
const quotes = [
    {
        id: 'Q-001',
        name: 'John Doe',
        email: 'john.doe@example.com',
        service: 'Moving',
        status: 'Pending',
        createdAt: '2024-05-01',
        amount: 550.00
    },
    {
        id: 'Q-002',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        service: 'Cleaning',
        status: 'Approved',
        createdAt: '2024-05-02',
        amount: 250.00
    },
    {
        id: 'Q-003',
        name: 'Alice Johnson',
        email: 'alice.j@example.com',
        service: 'Courier',
        status: 'Completed',
        createdAt: '2024-04-28',
        amount: 75.00
    },
        {
        id: 'Q-004',
        name: 'Mike Brown',
        email: 'mike.b@example.com',
        service: 'Moving',
        status: 'Declined',
        createdAt: '2024-05-03',
        amount: 1200.00
    }
];

const statusStyles = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Approved: 'bg-green-100 text-green-800',
    Completed: 'bg-blue-100 text-blue-800',
    Declined: 'bg-red-100 text-red-800',
}

export default function QuotesPage() {
    // TODO: Add state management and API calls here
    // Example: const [quotes, setQuotes] = useState([]);
    // useEffect(() => {
    //   fetch('/api/quotes').then(res => res.json()).then(data => setQuotes(data));
    // }, []);

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Quotes</h1>
      </div>
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="declined" className="hidden sm:flex">
              Declined
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Moving
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Cleaning</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Courier
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Quote
              </span>
            </Button>
          </div>
        </div>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Quotes</CardTitle>
              <CardDescription>
                Manage all customer quote requests here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Service
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created at
                    </TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                     <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quotes.map((quote) => (
                    <TableRow key={quote.id}>
                        <TableCell>
                            <div className="font-medium">{quote.name}</div>
                            <div className="text-sm text-muted-foreground">{quote.email}</div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{quote.service}</TableCell>
                        <TableCell className="hidden md:table-cell">
                             <Badge variant="outline" className={statusStyles[quote.status as keyof typeof statusStyles]}>
                                {quote.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{quote.createdAt}</TableCell>
                        <TableCell className="text-right">${quote.amount.toFixed(2)}</TableCell>
                         <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Approve</DropdownMenuItem>
                            <DropdownMenuItem>Decline</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-4</strong> of <strong>32</strong>{' '}
                quotes
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
