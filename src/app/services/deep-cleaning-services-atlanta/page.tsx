import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Sparkles, Star, Home } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Atlanta Deep Cleaning Services | MoeMoe Enterprises',
  description: 'Revitalize your space with our thorough deep cleaning services in Atlanta, GA. We tackle grime and dirt for a truly spotless home. Get your free deep cleaning quote!',
};

const checklistItems = [
  'Detailed dusting of all surfaces, including baseboards and light fixtures',
  'Intensive kitchen cleaning: appliances, cabinets, and grout',
  'Thorough bathroom sanitation: scrubbing tiles, showers, and toilets',
  'Cleaning inside windows and window sills',
  'Washing doors, frames, and wall scuff marks',
  'Vacuuming upholstery and under furniture',
];

export default function DeepCleaningPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" data-aos="fade-up">Deep Cleaning Services in Atlanta, GA</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90" data-aos="fade-up" data-aos-delay="100">
            Go beyond the surface with MoeMoe Enterprises. Our comprehensive deep cleaning services restore freshness and hygiene to your Atlanta home.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
            <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Get a Free Deep Cleaning Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold tracking-tight">What is a Deep Clean?</h2>
              <p className="mt-4 text-muted-foreground">
                While regular house cleaning maintains a tidy space, a deep clean is a far more intensive and detailed process. Our Atlanta deep cleaning services are designed to tackle the built-up grime, dust, and dirt in areas not typically covered in a standard clean. It’s the perfect solution for a seasonal refresh, preparing for a special event, or revitalizing a home that needs extra attention.
              </p>
              <p className="mt-4 text-muted-foreground">
                At MoeMoe Enterprises, our trained professionals use specialized equipment and eco-friendly products to meticulously clean your home from top to bottom. We focus on the details—scrubbing grout, cleaning inside appliances, and washing baseboards—to leave your environment not just looking clean, but feeling hygienically clean. This service is a cornerstone of our residential cleaning services in Atlanta, GA, aimed at promoting a healthier living space for you and your family.
              </p>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-base">
                <Link href="/services/house-cleaning-services-atlanta">Explore Our Standard Cleaning Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div data-aos="zoom-in">
              <Image
                src={PlaceHolderImages.specialtyCleaning.imageUrl}
                alt="Professional deep cleaning a kitchen in an Atlanta home"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.specialtyCleaning.imageHint}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <Sparkles className="mx-auto h-12 w-12 text-primary" data-aos="zoom-in" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Our Atlanta Deep Cleaning Checklist</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              We cover every corner to ensure a comprehensive clean. Here’s a look at what our deep cleaning services in Atlanta include:
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
                <CardContent className="p-6">
                    <ul className="grid gap-4 sm:grid-cols-2">
                        {checklistItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={index * 100}>
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">When to Schedule a Deep Clean</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              While we recommend a deep clean at least twice a year, here are some ideal times to book our service:
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="text-center" data-aos="fade-up">
                    <CardHeader><CardTitle>Spring Cleaning</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Refresh your home after a long winter and clear out accumulated dust and allergens.</p></CardContent>
                </Card>
                 <Card className="text-center" data-aos="fade-up" data-aos-delay="150">
                    <CardHeader><CardTitle>Moving In or Out</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Ensure a spotless start in your new home or leave your old one in pristine condition. See our <Link href="/services/move-in-move-out-cleaning-atlanta" className="text-primary hover:underline">move-out cleaning services</Link>.</p></CardContent>
                </Card>
                 <Card className="text-center" data-aos="fade-up" data-aos-delay="300">
                    <CardHeader><CardTitle>Post-Renovation</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Eliminate the fine dust and debris that construction work leaves behind.</p></CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
            Ready to Transform Your Home?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
           Experience the deepest clean your home has ever had. Contact us for a free, detailed quote for our deep cleaning services in Atlanta, GA.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
             <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="/quote?service=cleaning">Book Your Deep Clean Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
