import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Building, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Janitorial Services in Atlanta, GA | Business Cleaning',
    description: 'Comprehensive janitorial services and business cleaning in Atlanta. We provide complete facility maintenance for a pristine and professional environment. Get a custom plan.',
    alternates: {
        canonical: '/services/janitorial-business-cleaning-atlanta',
    },
};

const janitorialServices = [
    'Daily, weekly, or monthly cleaning schedules',
    'Hard-surface floor care (stripping, waxing, buffing)',
    'Carpet and upholstery cleaning programs',
    'Restroom sanitation and supply restocking',
    'Window and glass cleaning',
    'Waste management and removal',
    'High-touch point disinfection',
    'Day porter services available',
];

export default function JanitorialPage() {
    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
                <Image
                    src={PlaceHolderImages.businessCourier.imageUrl}
                    alt="A clean, professional lobby of a business in Atlanta"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={PlaceHolderImages.businessCourier.imageHint}
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" data-aos="fade-up">
                        Atlanta Janitorial & Business Cleaning Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        A complete cleaning solution for your facility. Our janitorial services in Atlanta ensure your business environment is always clean, safe, and professional.
                    </p>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
                            <Link href="/quote?service=cleaning">Get a Custom Janitorial Plan</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                             <h2 className="text-3xl font-bold tracking-tight">Your Partner in Facility Maintenance</h2>
                            <p className="mt-4 text-muted-foreground">
                                MoeMoe Enterprises offers more than just basic business cleaning; we provide comprehensive janitorial services in Atlanta designed to manage the complete cleanliness and upkeep of your facility. A well-maintained building is crucial for health, safety, and projecting a professional image to clients and employees alike. We act as an extension of your team, handling all aspects of cleaning so you can focus on your core business.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Our janitorial programs are fully customized. We assess your facility's specific needs, traffic patterns, and industry requirements to develop a proactive cleaning schedule. Whether you manage an office building in Midtown, a medical clinic in Decatur, or a retail space in Alpharetta, our team has the training and equipment to maintain your property to the highest standards. We are your reliable partner for long-term facility care.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                             <Card className="p-6">
                                <CardHeader>
                                    <CardTitle>Our Janitorial Services Include:</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {janitorialServices.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="h-5 w-5 mt-1 mr-2 text-primary flex-shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
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
                 <div className="container mx-auto px-4 md:px-6">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-last" data-aos="fade-left">
                             <Image
                                src={PlaceHolderImages.commercialCleaning.imageUrl}
                                alt="A professional janitor cleaning an office floor in Atlanta"
                                width={800}
                                height={600}
                                className="w-full rounded-lg shadow-lg"
                                data-ai-hint="janitor cleaning"
                            />
                        </div>
                        <div data-aos="fade-right">
                             <h2 className="text-3xl font-bold tracking-tight">The Benefits of Professional Janitorial Services</h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <ShieldCheck className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Improved Health & Safety</h4>
                                        <p className="text-muted-foreground">Regular, professional cleaning reduces the presence of germs, allergens, and pollutants, leading to a healthier environment and fewer sick days.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Building className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Enhanced Professional Image</h4>
                                        <p className="text-muted-foreground">A consistently clean facility shows clients, employees, and partners that you care about quality and professionalism.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Long-Term Asset Protection</h4>
                                        <p className="text-muted-foreground">Proper maintenance of floors, carpets, and fixtures extends their lifespan, saving you money on costly replacements.</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="mt-6">
                                For daily cleaning needs, see our <Link href="/services/office-cleaning-services-atlanta" className="font-semibold text-primary hover:underline">Atlanta office cleaning services</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-secondary py-16 md:py-24 text-center">
                 <div className="container mx-auto px-4 md:px-6">
                     <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">A Custom Cleaning Plan for Your Atlanta Business</h2>
                        <p className="mt-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                           No two businesses are the same, and neither are their cleaning needs. We'll conduct a free on-site assessment to build a janitorial service plan that fits your requirements and budget perfectly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
                        Partner with Atlanta's Janitorial Experts
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                        Take the burden of facility maintenance off your plate. Contact MoeMoe Enterprises today for a comprehensive quote on our janitorial services in Atlanta, GA.
                    </p>
                    <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/quote?service=cleaning">Request a Free On-Site Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
