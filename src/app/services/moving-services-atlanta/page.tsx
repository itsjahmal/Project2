import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ShieldCheck, Truck, Box } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Moving Services in Atlanta, GA | Professional Movers',
    description: 'Affordable and reliable moving services in Atlanta, GA. Our professional movers handle residential and commercial relocations with care. Get your free moving quote!',
    alternates: {
        canonical: '/services/moving-services-atlanta',
    },
};

const movingServicesList = [
    { title: 'Residential & Apartment Moving', description: 'From single-family homes in Roswell to high-rise apartments in Midtown Atlanta.' },
    { title: 'Commercial & Office Relocation', description: 'Efficiently move your business with minimal downtime.' },
    { title: 'Packing & Unpacking Services', description: 'Save time and protect your belongings with our expert packing solutions.' },
    { title: 'Loading & Unloading Labor', description: 'Just need the muscle? We can load or unload your rental truck or container.' },
    { title: 'Furniture Assembly & Disassembly', description: 'Our team can handle complex furniture to make your move smoother.' },
    { title: 'Secure Storage Solutions', description: 'Short-term or long-term storage options available for your convenience.' },
];

export default function MovingServicesPage() {
    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
                <Image
                    src={PlaceHolderImages.serviceMoving.imageUrl}
                    alt="MoeMoe Enterprises moving truck in front of an Atlanta home"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={PlaceHolderImages.serviceMoving.imageHint}
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" data-aos="fade-up">
                        Atlanta Moving Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        Your trusted, professional movers in Atlanta, GA. We make your residential or commercial relocation simple, safe, and stress-free.
                    </p>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
                            <Link href="/quote?service=moving">Get My Free Moving Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                             <h2 className="text-3xl font-bold tracking-tight">The Leader in Stress-Free Moving Services in Atlanta</h2>
                            <p className="mt-4 text-muted-foreground">
                                Moving can be one of life's most stressful events. At MoeMoe Enterprises, our mission is to change that. As a premier provider of moving services in Atlanta, we combine local expertise with a commitment to customer care. Our team of professional movers is trained to handle your belongings as if they were our own, ensuring a smooth transition from start to finish.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                We are more than just a moving company; we are your relocation partners. From the initial quote to the final box, we provide clear communication, transparent pricing, and unparalleled service. Whether you're moving to a new apartment in Buckhead, a family home in Marietta, or relocating your entire office downtown, our moving services are tailored to your unique needs. We are proud to be the movers Atlanta trusts.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                             <Image
                                src={PlaceHolderImages.generalMoving.imageUrl}
                                alt="Professional movers carefully carrying furniture in Atlanta"
                                width={800}
                                height={600}
                                className="w-full rounded-lg shadow-lg"
                                data-ai-hint={PlaceHolderImages.generalMoving.imageHint}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Our Comprehensive Atlanta Moving Services</h2>
                        <p className="mx-auto mt-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                           We offer a full suite of services to cover every aspect of your move.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {movingServicesList.map((service, index) => (
                            <Card key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <CardHeader>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                     <div className="mt-12 text-center" data-aos="fade-up">
                        <p className="text-muted-foreground">Looking for reliable local movers? <Link href="/services/local-movers-atlanta-ga" className="font-semibold text-primary hover:underline">Learn more about our team</Link>.</p>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Why Choose MoeMoe Enterprises for Your Atlanta Move?</h2>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
                        <div data-aos="fade-up">
                            <Truck className="mx-auto h-12 w-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold">Professional & Efficient Crew</h3>
                            <p className="mt-1 text-sm text-muted-foreground">Our movers are full-time, trained employees—not day laborers. They are fast, careful, and courteous.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="150">
                            <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold">Licensed, Insured & Bonded</h3>
                            <p className="mt-1 text-sm text-muted-foreground">We are a legitimate moving company operating in Georgia. Your move is protected and secure.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                             <Box className="mx-auto h-12 w-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold">Transparent Pricing</h3>
                            <p className="mt-1 text-sm text-muted-foreground">No hidden fees. We provide clear, upfront quotes so you know exactly what to expect on moving day.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
                        Experience a Better Move
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                       Ready to plan your relocation? Contact us for a free, detailed quote for our moving services in Atlanta, GA.
                    </p>
                    <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/quote?service=moving">Request a Free Moving Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
