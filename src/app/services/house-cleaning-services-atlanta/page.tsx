import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
    title: 'House Cleaning Services in Atlanta, GA | MoeMoe Enterprises',
    description: 'Top-rated house cleaning services in Atlanta, GA. We offer reliable, detailed home cleaning services to keep your space immaculate. Get your free quote today!',
    alternates: {
        canonical: '/services/house-cleaning-services-atlanta',
    },
};

const serviceHighlights = [
    { text: 'Kitchen sanitization (countertops, sinks, appliances)' },
    { text: 'Bathroom deep cleaning (showers, tubs, toilets, vanities)' },
    { text: 'Dusting all surfaces, furniture, and fixtures' },
    { text: 'Vacuuming carpets, rugs, and upholstery' },
    { text: 'Mopping hardwood, tile, and laminate floors' },
    { text: 'Emptying trash and recycling bins' },
];

const serviceTiers = [
    {
        name: "Standard Clean",
        description: "Perfect for regular maintenance to keep your Atlanta home consistently fresh and tidy.",
        price: "Weekly, Bi-Weekly, Monthly"
    },
    {
        name: "Deep Clean",
        description: "An intensive, top-to-bottom clean ideal for first-time service or quarterly resets.",
        price: "One-Time Service",
        featured: true
    },
    {
        name: "Move-In/Out Clean",
        description: "Ensure a spotless transition for your old or new home. Essential for renters and homeowners.",
        price: "Specialized Service"
    }
];

export default function HouseCleaningPage() {
    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
                <Image
                    src={PlaceHolderImages.residentialCleaning.imageUrl}
                    alt="Pristine modern kitchen after professional house cleaning services in Atlanta"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={PlaceHolderImages.residentialCleaning.imageHint}
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" data-aos="fade-up">
                        Professional House Cleaning Services in Atlanta
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        Reclaim your time and enjoy a spotless home. MoeMoe Enterprises provides reliable, thorough, and customized home cleaning services across the Atlanta metro area.
                    </p>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
                            <Link href="/quote?service=cleaning">Request Your Free Cleaning Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold tracking-tight">A Higher Standard of Home Cleaning in Atlanta, GA</h2>
                            <p className="mt-4 text-muted-foreground">
                                Your home is your sanctuary. At MoeMoe Enterprises, we understand that you need a residential cleaning service in Atlanta that is not only effective but also trustworthy and respectful of your space. We've built our reputation on providing a level of detail and reliability that Atlanta homeowners can depend on. Our trained, vetted, and insured cleaning professionals use proven techniques and eco-friendly products to ensure your home is not just clean, but healthy and safe for your family.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                From the bustling streets of Midtown to the quiet neighborhoods of Decatur, we bring our meticulous cleaning process to you. We don't just wipe down surfaces; we sanitize kitchens, scrub bathrooms, eliminate dust, and restore order, allowing you to focus on what truly matters.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <Card className="p-6">
                                <CardHeader>
                                    <CardTitle>Our Standard Cleaning Checklist Includes:</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {serviceHighlights.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="h-5 w-5 mt-1 mr-2 text-primary flex-shrink-0" />
                                                <span className="text-muted-foreground">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Flexible Cleaning Plans for Your Atlanta Lifestyle</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                        We offer a range of house cleaning services to fit your specific needs and schedule. Choose the plan that works best for you.
                    </p>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {serviceTiers.map((tier) => (
                            <Card key={tier.name} className={`text-center flex flex-col ${tier.featured ? 'border-primary border-2 shadow-lg' : ''}`} data-aos="fade-up" data-aos-delay="200">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                    <p className="text-muted-foreground pt-2">{tier.price}</p>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p>{tier.description}</p>
                                </CardContent>
                                <div className="p-6 pt-0">
                                     <Button asChild variant={tier.featured ? 'default' : 'outline'} className="w-full">
                                        <Link href="/quote?service=cleaning">Get a Quote</Link>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                 <div className="container mx-auto px-4 md:px-6">
                     <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Why Choose Our Atlanta House Cleaning Team?</h2>
                        <p className="mt-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                           When you hire MoeMoe Enterprises for your home cleaning needs in Atlanta, GA, you're choosing a partner dedicated to excellence.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="text-center" data-aos="fade-up">
                            <h3 className="text-lg font-bold">Local & Trusted</h3>
                            <p className="mt-1 text-sm text-muted-foreground">We're an Atlanta-based business, fully licensed and insured for your protection and peace of mind.</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="150">
                            <h3 className="text-lg font-bold">Eco-Friendly Options</h3>
                            <p className="mt-1 text-sm text-muted-foreground">We offer green cleaning solutions that are safe for your family, pets, and the environment.</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                            <h3 className="text-lg font-bold">Satisfaction Guaranteed</h3>
                            <p className="mt-1 text-sm text-muted-foreground">Our job isn't done until you are completely satisfied. We stand by the quality of our work.</p>
                        </div>
                    </div>
                     <div className="mt-12 text-center" data-aos="fade-up">
                        <p className="text-muted-foreground">Explore our other specialized cleaning services like <Link href="/services/deep-cleaning-services-atlanta" className="font-semibold text-primary hover:underline">Deep Cleaning</Link> and <Link href="/services/move-in-move-out-cleaning-atlanta" className="font-semibold text-primary hover:underline">Move-In/Move-Out Cleaning</Link>.</p>
                    </div>
                </div>
            </section>

            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
                        Enjoy a Cleaner Home Tomorrow
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                        Stop spending your weekends cleaning. Contact MoeMoe Enterprises for a free, no-obligation quote on our professional house cleaning services in Atlanta, GA.
                    </p>
                    <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/quote?service=cleaning">Request a Free Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
