import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Building } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Office Cleaning Services in Atlanta, GA | MoeMoe Enterprises',
    description: 'Professional office cleaning services in Atlanta for a healthier, more productive workspace. Flexible contracts available for businesses of all sizes. Get a free quote!',
    alternates: {
        canonical: '/services/office-cleaning-services-atlanta',
    },
};

const serviceHighlights = [
    { text: 'Common area and lobby cleaning' },
    { text: 'Office and cubicle sanitization' },
    { text: 'Restroom cleaning and disinfection' },
    { text: 'Kitchen and breakroom maintenance' },
    { text: 'Trash removal and recycling' },
    { text: 'Floor care (vacuuming, mopping)' },
];

const industriesServed = [
    "Corporate Offices",
    "Medical Facilities",
    "Tech Startups",
    "Retail Stores",
    "Educational Institutions",
    "Law Firms",
    "Co-working Spaces",
    "Fitness Centers"
];

export default function OfficeCleaningPage() {
    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
                <Image
                    src={PlaceHolderImages.commercialCleaning.imageUrl}
                    alt="Bright, clean modern office space in Atlanta"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={PlaceHolderImages.commercialCleaning.imageHint}
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" data-aos="fade-up">
                        Atlanta Office Cleaning Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        Create a lasting first impression and a healthier work environment with our reliable commercial cleaning services for businesses across Atlanta, GA.
                    </p>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
                            <Link href="/quote?service=cleaning">Get a Free Office Cleaning Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold tracking-tight">A Clean Office is a Productive Office</h2>
                            <p className="mt-4 text-muted-foreground">
                                In the competitive Atlanta business landscape, the cleanliness of your office directly impacts employee morale, client perception, and overall productivity. MoeMoe Enterprises provides professional business cleaning services in Atlanta that go beyond the surface. We deliver a consistently clean and sanitary environment that allows your team to thrive and your clients to feel confident in your brand.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                We understand that every business is unique. That's why we offer customized cleaning plans tailored to your facility's size, your industry's standards, and your company's schedule. Whether you need daily, weekly, or monthly service, our insured and bonded team provides discreet, efficient, and thorough office cleaning services that don't disrupt your workflow. From high-rises in Buckhead to creative lofts in Inman Park, we are Atlanta's trusted partner for commercial cleaning.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <Card className="p-6">
                                <CardHeader>
                                    <CardTitle>Our Comprehensive Office Cleaning Includes:</CardTitle>
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
                                     <p className="mt-6">
                                        Looking for a more comprehensive solution? Explore our <Link href="/services/janitorial-business-cleaning-atlanta" className="font-semibold text-primary hover:underline">full-service janitorial packages</Link>.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Serving a Wide Range of Atlanta Industries</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                        Our team is equipped to handle the unique cleaning requirements of various commercial spaces.
                    </p>
                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {industriesServed.map((industry, index) => (
                            <div key={industry} className="bg-secondary text-secondary-foreground rounded-full px-5 py-2 font-medium" data-aos="fade-up" data-aos-delay={index * 50}>
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                 <div className="container mx-auto px-4 md:px-6">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-last" data-aos="fade-left">
                             <Image
                                src={PlaceHolderImages.sanitizationServices.imageUrl}
                                alt="Professional cleaning a commercial space in Atlanta"
                                width={800}
                                height={600}
                                className="w-full rounded-lg shadow-lg"
                                data-ai-hint={PlaceHolderImages.sanitizationServices.imageHint}
                            />
                        </div>
                        <div data-aos="fade-right">
                             <h2 className="text-3xl font-bold tracking-tight">The MoeMoe Advantage for Atlanta Businesses</h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <Building className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Customized Cleaning Schedules</h4>
                                        <p className="text-muted-foreground">We work around your business hours to provide cleaning services with minimal disruption to your operations.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Building className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Trained & Vetted Professionals</h4>
                                        <p className="text-muted-foreground">Our cleaning staff is fully trained, background-checked, and committed to upholding the highest standards of quality and security.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Building className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Health-Focused Cleaning</h4>
                                        <p className="text-muted-foreground">We use industry-approved disinfectants to target high-touch surfaces, helping to reduce the spread of germs and keep your workforce healthy.</p>
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
                        Elevate Your Workspace Today
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                        Discover the difference a professional clean can make. Contact us for a free, no-obligation quote for your office cleaning services in Atlanta, GA.
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
