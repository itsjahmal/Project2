import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, MapPin, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Local Movers in Atlanta, GA | MoeMoe Enterprises',
    description: 'Searching for "local movers near me" in Atlanta? MoeMoe Enterprises are your expert local movers in Atlanta, GA, offering reliable and affordable relocation services.',
    alternates: {
        canonical: '/services/local-movers-atlanta-ga',
    },
};

const whyChooseLocal = [
    { title: "Unmatched Knowledge of Atlanta", description: "We know the city's layouts, traffic patterns, and building regulations, ensuring an efficient move." },
    { title: "Personalized, Neighborly Service", description: "As a local Atlanta business, we treat you like a neighbor, not a number. Your satisfaction is our top priority." },
    { title: "Support the Local Economy", description: "Choosing us means you're investing back into the Atlanta community." },
    { title: "Flexible & Responsive", description: "Being local allows us to be more flexible with scheduling and responsive to your last-minute needs." }
];

const areas = ["Downtown", "Midtown", "Buckhead", "Decatur", "Sandy Springs", "Roswell", "Marietta", "Alpharetta", "Smyrna", "Johns Creek", "Dunwoody", "and surrounding neighborhoods..."];

export default function LocalMoversPage() {
    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
                <Image
                    src={PlaceHolderImages.aboutStory.imageUrl}
                    alt="A friendly team of local movers in Atlanta, GA"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={PlaceHolderImages.aboutStory.imageHint}
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" data-aos="fade-up">
                        Your Expert Local Movers in Atlanta, GA
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        When you need reliable local movers in Atlanta, GA, you need a team that knows the city inside and out. MoeMoe Enterprises is your trusted, neighborhood moving company.
                    </p>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
                            <Link href="/quote?service=moving">Get a Quote From Your Local Movers</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">The Advantage of Choosing True Local Movers</h2>
                        <p className="mt-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                            Large national chains don't have the on-the-ground expertise that a dedicated local moving company provides. As your local movers in Atlanta, GA, we offer a level of service and familiarity that makes a real difference on moving day. We're not just moving your belongings; we're moving our neighbors. Our reputation in the Atlanta community is our most valuable asset, and we work hard on every job to protect it.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whyChooseLocal.map((item, index) => (
                            <Card key={item.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <CardContent className="p-6 text-center">
                                    <h3 className="text-lg font-bold">{item.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="md:order-last" data-aos="fade-left">
                             <h2 className="text-3xl font-bold tracking-tight">Our Local Atlanta Moving Process</h2>
                            <p className="mt-4 text-muted-foreground">
                                We've streamlined our process to ensure your local move is as efficient as possible.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Step 1: Detailed Local Quote</h4>
                                        <p className="text-muted-foreground">We provide a clear, accurate quote based on the specifics of your Atlanta-area move, with no hidden fees.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Step 2: Strategic Planning</h4>
                                        <p className="text-muted-foreground">We plan the best route and time, considering Atlanta traffic and logistics to save you time and money.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Step 3: Careful Execution</h4>
                                        <p className="text-muted-foreground">Our trained crew carefully packs, loads, and transports your items, treating your property with respect.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Step 4: Efficient Unloading</h4>
                                        <p className="text-muted-foreground">We place your furniture and boxes in the designated rooms, making your unpacking process much easier.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-right">
                             <Image
                                src={PlaceHolderImages.avatar2.imageUrl}
                                alt="A smiling, confident local mover from Atlanta, GA"
                                width={800}
                                height={600}
                                className="w-full rounded-lg shadow-lg"
                                data-ai-hint={PlaceHolderImages.avatar2.imageHint}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                 <div className="container mx-auto px-4 md:px-6 text-center">
                    <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">We Move All Over Metro Atlanta</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                        Our service area covers the entire metro region. If you're moving in or around Atlanta, we've got you covered.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2" data-aos="fade-up" data-aos-delay="200">
                        {areas.map((area) => (
                            <span key={area} className="text-muted-foreground font-medium">{area}</span>
                        ))}
                    </div>
                     <p className="mt-8 text-muted-foreground" data-aos="fade-up">
                        For a complete list of our capabilities, see our main <Link href="/services/moving-services-atlanta" className="font-semibold text-primary hover:underline">Atlanta moving services</Link> page.
                    </p>
                </div>
            </section>

            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
                        Hire Your Neighborhood Movers
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                       Choose the local movers Atlanta, GA trusts. Contact MoeMoe Enterprises for a friendly chat and a free, detailed moving estimate.
                    </p>
                    <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/quote?service=moving">Request a Free Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
