import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Deep Cleaning Services in Atlanta, GA | MoeMoe Enterprises',
    description: 'Transform your home with our deep cleaning services in Atlanta. We tackle grime, dust, and buildup for a truly refreshed space. Book your one-time deep clean today!',
    alternates: {
        canonical: '/services/deep-cleaning-services-atlanta',
    },
};

const deepCleaningTasks = [
    { text: 'Includes all standard cleaning tasks, plus:' },
    { text: 'Detailed scrubbing of baseboards, window sills, and door frames' },
    { text: 'Cleaning inside cabinets, ovens, and refrigerators' },
    { text: 'Intensive grout scrubbing in kitchens and bathrooms' },
    { text: 'Washing interior windows and blinds' },
    { text: 'Sanitizing light switches, door handles, and high-touch areas' },
    { text: 'Removing cobwebs from ceilings and corners' },
    { text: 'Cleaning behind and under movable furniture' },
];

const whoNeedsDeepCleaning = [
    {
        title: "Seasonal Cleaning",
        description: "Perfect for spring cleaning or preparing your home for the holidays. Refresh your Atlanta home for a new season."
    },
    {
        title: "Post-Renovation",
        description: "Construction leaves behind a layer of fine dust. Our team will meticulously clean every surface to make your new space livable."
    },
    {
        title: "Preparing for an Event",
        description: "Hosting a party or family gathering? We'll ensure your home is guest-ready and makes a great impression."
    },
    {
        title: "A Healthier Home",
        description: "A deep clean removes allergens, bacteria, and dust buildup, contributing to a healthier indoor environment for your family."
    }
]

export default function DeepCleaningPage() {
    return (
        <>
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
                <Image
                    src={PlaceHolderImages.specialtyCleaning.imageUrl}
                    alt="A professional deep cleaning a kitchen in Atlanta"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={PlaceHolderImages.specialtyCleaning.imageHint}
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" data-aos="fade-up">
                        Atlanta Deep Cleaning Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        Restore your home to its best condition. Our intensive deep cleaning services in Atlanta, GA, tackle the details for a truly transformative clean.
                    </p>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
                            <Link href="/quote?service=cleaning">Get a Deep Cleaning Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                             <h2 className="text-3xl font-bold tracking-tight">Go Beyond Surface-Level with a Deep Clean</h2>
                            <p className="mt-4 text-muted-foreground">
                                Standard cleaning maintains a tidy home, but a deep clean revitalizes it. At MoeMoe Enterprises, our Atlanta deep cleaning service is a comprehensive, top-to-bottom process designed to eliminate dirt, grime, and allergens from places that are often overlooked. It's the perfect solution for homeowners who want to hit the reset button on their living space.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Our experienced team uses specialized tools and a detailed checklist to ensure no corner is left untouched. We focus on the buildup that accumulates over time in your kitchen, bathrooms, and living areas. This one-time service is ideal for preparing for a new season, before or after a special event, or simply when your home needs a thorough refresh. Experience the difference a true deep clean can make for your Atlanta, GA home.
                            </p>
                             <p className="mt-6">
                                Need regular upkeep after your deep clean? Check out our <Link href="/services/house-cleaning-services-atlanta" className="font-semibold text-primary hover:underline">recurring house cleaning services</Link>.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                             <Card className="p-6 bg-white shadow-lg">
                                <CardHeader>
                                    <CardTitle>Our Deep Cleaning Process Focuses On:</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {deepCleaningTasks.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <Sparkles className="h-5 w-5 mt-1 mr-2 text-primary flex-shrink-0" />
                                                <span className={`text-muted-foreground ${index === 0 ? 'font-bold' : ''}`}>{item.text}</span>
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">When Do You Need a Deep Clean in Atlanta?</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                        A deep clean is an investment in your home's health and longevity. Here are some common reasons our Atlanta clients book this service.
                    </p>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whoNeedsDeepCleaning.map((item, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                                <Card className="h-full">
                                    <CardContent className="p-6 text-center">
                                        <h3 className="text-lg font-bold">{item.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                 <div className="container mx-auto px-4 md:px-6 text-center">
                     <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Ready for a Fresh Start?</h2>
                        <p className="mt-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
                           Our Atlanta deep cleaning service is fully customizable to meet your specific needs and budget. We tackle the tough jobs so you don't have to. We guarantee you'll be amazed at the results.
                        </p>
                        <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                            <Button size="lg" asChild>
                                <Link href="/quote?service=cleaning">Schedule Your Deep Clean</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
