
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Building, Users, Clock } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Office Cleaning Services in Atlanta, GA',
  description: 'Professional office cleaning services in Atlanta, GA. We provide reliable, scheduled cleaning to keep your workplace healthy and productive. Get a free quote!',
};

const checklist = [
  'Disinfection of high-touch surfaces (doorknobs, light switches)',
  'Restroom cleaning and sanitization',
  'Trash and recycling removal',
  'Kitchen and break room cleaning',
  'Dusting of all surfaces, desks, and equipment',
  'Vacuuming carpets and mopping hard floors',
  'Interior window and glass cleaning',
  'Lobby and reception area cleaning',
];

export default function OfficeCleaningPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Atlanta Office Cleaning Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            Create a healthier, more productive work environment with professional office cleaning services in Atlanta, GA. First impressions matter.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Get a Free Office Cleaning Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Invest in a Cleaner, More Productive Atlanta Workplace</h2>
              <p className="mt-4 text-muted-foreground">
                A clean office is essential for the health and well-being of your employees and the professional image of your company. MoeMoe Enterprises provides top-tier office cleaning services in Atlanta, GA, tailored to the specific needs of your workspace. We help businesses of all sizes—from small startups to large corporate headquarters—maintain a pristine environment that boosts productivity and impresses clients.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our flexible scheduling options are designed to work around your business hours, ensuring minimal disruption to your operations. As a leading provider of commercial cleaning services in Atlanta, we use industry-grade, eco-friendly products to ensure a deep, sanitizing clean. Our reliable, bonded, and insured team is trained to handle the unique challenges of an office environment, from sensitive equipment to high-traffic common areas.
              </p>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-base">
                <Link href="/services/janitorial-business-cleaning-atlanta">Explore Our Full Janitorial Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div>
              <Image
                src={PlaceHolderImages.commercialCleaning.imageUrl}
                alt="A pristine and modern office space cleaned by Atlanta office cleaning services"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.commercialCleaning.imageHint}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Atlanta Office Cleaning Checklist</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our service is comprehensive, ensuring no detail is overlooked in maintaining your professional space.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
             <Card>
                <CardContent className="p-6">
                    <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {checklist.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Flexible Cleaning Schedules for Your Atlanta Business</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We understand that every business is different. We offer customizable cleaning frequencies to fit your needs and budget.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader><CardTitle>Daily Cleaning</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Ideal for high-traffic offices, medical facilities, and businesses that require constant upkeep to maintain a professional image.</p></CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader><CardTitle>Weekly Cleaning</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Our most popular option for small to medium-sized businesses in Atlanta, providing consistent cleanliness and hygiene.</p></CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader><CardTitle>Custom Schedules</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">From bi-weekly to monthly, or project-based deep cleans, we create a plan that works perfectly for you.</p></CardContent>
              </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Focus on Your Business, Not the Cleaning
          </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Partner with a reliable and professional office cleaning service in Atlanta, GA. Contact MoeMoe Enterprises today for a free, customized quote.
          </p>
          <div className="mt-8">
             <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="/quote?service=cleaning">Request My Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
