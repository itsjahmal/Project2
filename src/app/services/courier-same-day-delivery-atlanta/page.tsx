import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Clock, ShieldCheck, Briefcase, Scale, HeartPulse } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Courier & Same Day Delivery Services in Atlanta, GA',
    description: 'Fast, reliable courier and same-day delivery services in Atlanta, GA. We specialize in medical, legal, and business deliveries with real-time tracking.',
    alternates: {
        canonical: '/services/courier-same-day-delivery-atlanta',
    },
};

const courierServices = [
    { icon: Medical & Healthcare, title: 'Medical Courier', description: 'HIPAA-compliant transport of specimens, records, and medical equipment.' },
    { icon: Scale, title: 'Legal Courier', description: 'Secure and timely delivery of court filings, contracts, and sensitive documents.' },
    { icon: Briefcase, title: 'Business Deliveries', description: 'Inter-office mail, client packages, and time-sensitive business materials.' },
    { icon: Clock, title: 'Scheduled & Routed Delivery', description: 'Daily or weekly routes for consistent delivery needs.' },
];

export default function CourierPage() {
    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
                 <video
                    src="https://i.imgur.com/7Lm76jf.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" data-aos="fade-up">
                        Atlanta Courier & Same-Day Delivery Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        When time is critical, trust MoeMoe Enterprises. We provide fast, secure, and reliable courier services across Metro Atlanta.
                    </p>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
                            <Link href="/quote?service=moving">Request a Courier Service</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                             <h2 className="text-3xl font-bold tracking-tight">Delivering for Atlanta Businesses, On Time, Every Time</h2>
                            <p className="mt-4 text-muted-foreground">
                                In a fast-paced city like Atlanta, speed and reliability are paramount. MoeMoe Enterprises offers a premier courier service designed to meet the urgent delivery needs of businesses and individuals. Whether it's a critical legal document that needs to reach the courthouse, a sensitive medical specimen for a lab, or an urgent package for a client across town, our same-day delivery service in Atlanta has you covered.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Our team of professional, uniformed drivers understands the importance of your delivery. We leverage local knowledge and GPS technology to navigate Atlanta's traffic efficiently, ensuring your package arrives securely and on schedule. We provide real-time tracking and proof of delivery for your complete peace of mind. Choose the courier service Atlanta trusts for its most critical deliveries.
                            </p>
                        </div>
                         <div data-aos="fade-left">
                            <Card className="p-6">
                                <CardHeader>
                                    <CardTitle>Why Our Atlanta Courier Service?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <Clock className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold">Speed and Urgency</h4>
                                                <p className="text-muted-foreground">Multiple service levels, including Rush (1-2 hours), Standard (3-4 hours), and Same-Day.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <ShieldCheck className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold">Security and Confidentiality</h4>
                                                <p className="text-muted-foreground">All drivers are background-checked and trained to handle sensitive materials with the utmost discretion.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-6 w-6 mt-1 mr-3 text-primary flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold">Proof of Delivery</h4>
                                                <p className="text-muted-foreground">Receive instant email confirmation and signature verification upon completion of your delivery.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Specialized Courier Services for Your Industry</h2>
                        <p className="mx-auto mt-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                           We have experience serving a wide range of industries with specific delivery protocols.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {courierServices.map((service, index) => (
                            <Card key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <CardHeader className="items-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-center">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                     <div className="mt-12 text-center" data-aos="fade-up">
                        <p className="text-muted-foreground">We also offer comprehensive <Link href="/services/moving-services-atlanta" className="font-semibold text-primary hover:underline">moving services</Link> for larger-scale needs.</p>
                    </div>
                </div>
            </section>

            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
                        Schedule Your Atlanta Delivery Today
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                       Need it there now? Contact MoeMoe Enterprises for a fast quote and immediate dispatch for your same-day delivery in Atlanta, GA.
                    </p>
                    <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/quote?service=moving">Request Courier Service</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
