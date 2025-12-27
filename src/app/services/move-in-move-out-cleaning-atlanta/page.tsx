import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Key, Sparkles, Home } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Move-In & Move-Out Cleaning Services in Atlanta, GA | MoeMoe',
  description: 'Ensure a spotless transition with our move-in/move-out cleaning services in Atlanta, GA. Perfect for tenants, landlords, and homeowners. Get your free quote!',
};

const forRenters = [
    { icon: Key, title: 'Secure Your Deposit', description: 'Our thorough cleaning meets landlord standards, helping you get your full security deposit back.'},
    { icon: CheckCircle, title: 'Reduce Moving Stress', description: 'Focus on your move while we handle the cleaning. We save you time and energy during a busy period.'},
];

const forLandlords = [
    { icon: Home, title: 'Attract Quality Tenants', description: 'A professionally cleaned property shows better and attracts responsible tenants faster.'},
    { icon: Sparkles, title: 'Faster Turnaround', description: 'Our efficient cleaning services get your property market-ready sooner, minimizing vacancy time.'},
];

export default function MoveOutCleaningPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Atlanta Move-In & Move-Out Cleaning</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            Start fresh or leave it spotless. MoeMoe Enterprises provides comprehensive move-in and move-out cleaning services across Atlanta, GA.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Get a Free Moving Clean Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">The Perfect Start and Finish to Any Move in Atlanta</h2>
              <p className="mt-4 text-muted-foreground">
                Moving is a huge task. The last thing you want to worry about is scrubbing your old place or cleaning your new one. Our move-in/move-out cleaning service in Atlanta is designed to take that burden off your shoulders. Whether you're a renter aiming to secure your security deposit, a landlord preparing for new tenants, or a homeowner wanting a completely fresh start, we provide the deepest clean possible.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our move-out cleaning goes beyond a standard service. We clean inside cabinets, drawers, the oven, and the refrigerator. We scrub baseboards, wash walls, and ensure every hidden corner is dust-free. For move-in cleaning, we sanitize all surfaces, ensuring your new Atlanta home is pristine and ready for you to make it your own. It's the most thorough of our residential cleaning services in Atlanta, GA.
              </p>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-base">
                <Link href="/services/deep-cleaning-services-atlanta">See What's Included in a Deep Clean <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div>
              <Image
                src={PlaceHolderImages.eventCleaning.imageUrl}
                alt="An empty, sparkling clean apartment after move-out cleaning in Atlanta"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.eventCleaning.imageHint}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 md:grid-cols-2">
             <div>
                <h2 className="text-3xl font-bold tracking-tight text-center">For Renters Leaving Their Atlanta Property</h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    {forRenters.map(item => (
                        <Card key={item.title} className="text-center">
                            <CardHeader>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="mt-4">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
             </div>
             <div>
                <h2 className="text-3xl font-bold tracking-tight text-center">For Landlords & Property Managers</h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    {forLandlords.map(item => (
                        <Card key={item.title} className="text-center">
                            <CardHeader>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="mt-4">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
                 <h2 className="text-3xl font-bold tracking-tight">A Checklist That Covers Everything</h2>
                <p className="mt-4 text-muted-foreground">Our move-in/move-out cleaning is the most detailed service we offer. We clean places that haven't been touched in years, ensuring the property is in its best possible condition.</p>
            </div>
            <div className="mt-8 max-w-4xl mx-auto">
                <Card>
                    <CardContent className="p-8 grid gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="font-bold text-lg">Kitchen</h3>
                            <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Inside/outside of oven & fridge</li>
                                <li>Inside/outside of cabinets & drawers</li>
                                <li>Backsplashes & countertops</li>
                                <li>Sinks and faucets</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg">Bathrooms</h3>
                            <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Scrubbing of tubs, showers, & toilets</li>
                                <li>Cleaning mirrors & vanities</li>
                                <li>Inside cabinets and drawers</li>
                                <li>Grout and tile cleaning</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg">All Areas</h3>
                            <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Baseboards, window sills, & ledges</li>
                                <li>Walls and doors spot cleaned</li>
                                <li>Light fixtures & ceiling fans</li>
                                <li>Floors vacuumed and mopped</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg">Bedrooms & Living Areas</h3>
                            <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Inside closets and shelves</li>
                                <li>Dusting all surfaces</li>
                                <li>Cleaning mirrors and glass</li>
                                <li>Vacuuming carpets and edges</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Make Your Move Easier
          </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Let our professionals handle the cleaning so you can focus on your move. Contact us for a free quote on move-in or move-out cleaning services in Atlanta, GA.
          </p>
          <div className="mt-8">
             <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="/quote?service=cleaning">Get a Quote for Your Move</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
