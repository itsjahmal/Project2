
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Gift, Home, ShieldCheck, Star } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'House Cleaning Services in Atlanta, GA | MoeMoe Enterprises',
  description: 'Professional house cleaning services in Atlanta, GA. We offer reliable, recurring home cleaning services to keep your space spotless. Get your free quote today!',
};

const serviceTiers = [
  { 
    name: 'Standard Clean', 
    description: 'Perfect for regular maintenance (weekly, bi-weekly) to keep your home fresh and tidy.',
    features: ['Dusting all surfaces', 'Vacuuming and mopping floors', 'Cleaning bathrooms & kitchen', 'Wiping down countertops']
  },
  { 
    name: 'Deep Clean', 
    description: 'An intensive, detailed clean for a top-to-bottom refresh. Ideal for seasonal cleaning or first-time service.',
    features: ['Includes all Standard tasks', 'Cleaning baseboards & window sills', 'Washing cabinet exteriors', 'Scrubbing tile grout']
  },
  { 
    name: 'Move-In/Out Clean', 
    description: 'A comprehensive clean to prepare a home for new residents or to ensure you get your deposit back.',
    features: ['Includes all Deep Clean tasks', 'Cleaning inside cabinets & closets', 'Cleaning inside oven & fridge']
  },
];


export default function HouseCleaningPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" data-aos="fade-up">Atlanta House Cleaning Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90" data-aos="fade-up" data-aos-delay="100">
            Reclaim your time and enjoy a spotless home with MoeMoe Enterprises. We provide reliable and thorough home cleaning services across the Atlanta, GA metro area.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
            <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Request a Free Cleaning Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold tracking-tight">Your Trusted Partner for Home Cleaning in Atlanta</h2>
              <p className="mt-4 text-muted-foreground">
                Life in Atlanta is busy. Between work, family, and social commitments, finding time to keep your home consistently clean can be a challenge. That's where MoeMoe Enterprises comes in. As a leading provider of house cleaning services in Atlanta, we deliver the professional touch you need to maintain a beautiful and healthy living environment without sacrificing your valuable free time.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our team of vetted, trained, and friendly cleaning professionals is dedicated to exceeding your expectations. We use eco-friendly products and proven cleaning methods to ensure every corner of your home shines. Whether you need a one-time deep clean or recurring residential cleaning services in Atlanta, GA, we offer flexible scheduling and customized plans to fit your lifestyle and budget.
              </p>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-base">
                <Link href="/about">Learn More About Our Company Values <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div data-aos="zoom-in">
              <Image
                src={PlaceHolderImages.residentialCleaning.imageUrl}
                alt="A bright and clean living room after professional house cleaning services in Atlanta"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.residentialCleaning.imageHint}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Our Atlanta Home Cleaning Services</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              We offer a range of cleaning packages to meet your specific needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {serviceTiers.map((tier, index) => (
              <Card key={tier.name} className="flex flex-col" data-aos="fade-up" data-aos-delay={index * 150}>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{tier.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground text-center flex-grow">{tier.description}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                     <Button asChild variant="outline" className="w-full">
                        <Link href={
                            tier.name === 'Deep Clean' ? '/services/deep-cleaning-services-atlanta' :
                            tier.name === 'Move-In/Out Clean' ? '/services/move-in-move-out-cleaning-atlanta' :
                            SITE_CONFIG.cta.href
                        }>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div data-aos="zoom-in">
              <Image
                src={PlaceHolderImages.avatar2.imageUrl}
                alt="A happy homeowner in Atlanta"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.avatar2.imageHint}
              />
            </div>
            <div data-aos="fade-left">
              <ShieldCheck className="h-12 w-12 text-primary" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight">Why Choose MoeMoe Enterprises for Your Atlanta Home?</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span><strong>Trusted Professionals:</strong> Our cleaning staff is rigorously vetted, insured, and trained to provide 5-star service.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Gift className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Customized Cleaning Plans:</strong> We work with you to create a cleaning schedule and checklist that perfectly fits your needs.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Eco-Friendly Products:</strong> We use safe, effective, and environmentally friendly cleaning supplies to protect your family and pets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
            Enjoy a Cleaner Home Without the Hassle
          </h2>
          <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Let us handle the dirty work. Contact us today for a free, no-obligation quote for our professional house cleaning services in Atlanta, GA.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
             <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="/quote?service=cleaning">Get My Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
