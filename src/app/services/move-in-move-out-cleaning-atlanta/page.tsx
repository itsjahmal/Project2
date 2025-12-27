import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, KeyRound } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Move-In & Move-Out Cleaning Services in Atlanta, GA',
    description: 'Ensure a spotless transition with our move-in/move-out cleaning services in Atlanta. Perfect for renters, homeowners, and landlords. Get your free estimate!',
    alternates: {
        canonical: '/services/move-in-move-out-cleaning-atlanta',
    },
};

const moveOutChecklist = [
    'Deep cleaning of kitchen (inside appliances, cabinets)',
    'Full sanitization of all bathrooms',
    'Wiping down all baseboards, doors, and window sills',
    'Cleaning interior windows and light fixtures',
    'Vacuuming all carpets and mopping hard floors',
    'Removing all trash and debris from the property',
];

const moveInChecklist = [
    'Sanitizing all high-touch surfaces for a fresh start',
    'Dusting and wiping all surfaces, including inside closets',
    'Ensuring kitchen and bathrooms are disinfected and ready for use',
    'Final floor cleaning to remove any dust from vacancy',
];

export default function MoveCleaningPage() {
    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
                <Image
                    src={PlaceHolderImages.eventCleaning.imageUrl}
                    alt="Empty, clean room ready for move-in in Atlanta"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={PlaceHolderImages.eventCleaning.imageHint}
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" data-aos="fade-up">
                        Atlanta Move-In / Move-Out Cleaning Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        Start fresh in your new home or secure your deposit on your old one. We provide thorough, reliable move-related cleaning services across Atlanta, GA.
                    </p>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
                            <Link href="/quote?service=cleaning">Get a Move Cleaning Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Make Your Atlanta Move Stress-Free</h2>
                        <p className="mt-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                            Moving is stressful enough without having to worry about cleaning. Whether you're a renter in Atlanta trying to get your security deposit back, a homeowner preparing your property for sale, or moving into a new house, our move-in/move-out cleaning service is the perfect solution. MoeMoe Enterprises handles the dirty work so you can focus on the move itself.
                        </p>
                        <p className="mt-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="150">
                            We work with tenants, landlords, and real estate agents across Atlanta, from Sandy Springs to Smyrna, providing a reliable service that meets the highest standards of cleanliness.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-start">
                    <div data-aos="fade-right">
                        <Card className="p-6">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><KeyRound className="text-primary" /> For a Spotless Move-Out</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-muted-foreground">Our goal is to leave your previous residence in pristine condition, helping you secure your security deposit and leave on good terms. Our checklist is designed to satisfy the strictest landlord inspections.</p>
                                <ul className="space-y-3">
                                    {moveOutChecklist.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-5 w-5 mt-1 mr-2 text-primary flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200">
                        <Card className="p-6">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><KeyRound className="text-primary" /> For a Fresh Move-In</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-muted-foreground">Start life in your new Atlanta home with confidence. We'll sanitize and freshen the entire space before you unpack a single box, ensuring a healthy and welcoming environment from day one.</p>
                                <ul className="space-y-3">
                                    {moveInChecklist.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-5 w-5 mt-1 mr-2 text-primary flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-muted-foreground">Also need help with the physical move? Check out our <Link href="/services/moving-services-atlanta" className="font-semibold text-primary hover:underline">Atlanta moving services</Link>!</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                 <div className="container mx-auto px-4 md:px-6">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                             <Image
                                src={PlaceHolderImages.serviceCleaning.imageUrl}
                                alt="Professional cleaner wiping a surface in an empty apartment in Atlanta"
                                width={800}
                                height={600}
                                className="w-full rounded-lg shadow-lg"
                                data-ai-hint={PlaceHolderImages.serviceCleaning.imageHint}
                            />
                        </div>
                        <div data-aos="fade-left">
                             <h2 className="text-3xl font-bold tracking-tight">Why MoeMoe Enterprises for Your Move-Out/In Clean?</h2>
                            <p className="mt-4 text-muted-foreground">
                                We specialize in preparing properties for transition. Our team understands exactly what's required for a successful move-out inspection or a perfectly prepared new home.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Reliable & On-Time</h4>
                                        <p className="text-muted-foreground">We know moving schedules are tight. We guarantee to be there on time and finish the job efficiently.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">All Supplies Included</h4>
                                        <p className="text-muted-foreground">You've already packed your cleaning supplies. Don't worry, we bring all necessary equipment and products.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Trusted by Atlanta Realtors</h4>
                                        <p className="text-muted-foreground">We are a preferred cleaning partner for many real estate professionals in the Atlanta metro area.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
                        Book Your Move-In or Move-Out Clean Today
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                        Secure your date and get a free, transparent estimate for your move-related cleaning needs in Atlanta, GA.
                    </p>
                    <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/quote?service=cleaning">Get a Free Estimate</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
