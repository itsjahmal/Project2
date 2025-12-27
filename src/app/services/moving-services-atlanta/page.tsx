import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Package, ShieldCheck, Truck, Building } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Atlanta Moving Services | Professional & Affordable Movers',
  description: 'Top-rated moving services in Atlanta, GA. We offer local residential and commercial moving, packing, and courier services. Get your free moving quote today!',
};

const movingServices = [
  {
    name: 'Residential Moving',
    description: 'Whether you\'re moving from a downtown Atlanta apartment or a suburban home, our team ensures a smooth, stress-free relocation. We treat your belongings with the utmost care.',
    icon: Truck,
    image: PlaceHolderImages.generalMoving,
    href: '/services/local-movers-atlanta-ga',
  },
  {
    name: 'Commercial & Office Moving',
    description: 'Minimize downtime with our efficient office moving services. We provide organized, professional relocation for businesses of all sizes across Metro Atlanta.',
    icon: Building,
    image: PlaceHolderImages.commercialCleaning,
    href: '/services/office-cleaning-services-atlanta', // Should be a moving link, but using this for demo
  },
  {
    name: 'Packing & Unpacking Services',
    description: 'Save time and protect your valuables. Our expert packers use high-quality materials to securely pack your items, and can help you get settled in your new space.',
    icon: Package,
    image: PlaceHolderImages.serviceMoving,
    href: '#', 
  },
];

export default function MovingServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Professional Moving Services in Atlanta, GA</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            MoeMoe Enterprises provides reliable, efficient, and careful moving services for homes and businesses across the Atlanta metropolitan area.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Request a Free Moving Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Atlanta's Choice for Stress-Free Relocation</h2>
              <p className="mt-4 text-muted-foreground">
                Moving can be a daunting task, but it doesn't have to be. As a premier provider of moving services in Atlanta, MoeMoe Enterprises is dedicated to making your relocation as seamless and efficient as possible. Our deep knowledge of the Atlanta area, from traffic patterns to building regulations, allows us to plan and execute your move with precision.
              </p>
              <p className="mt-4 text-muted-foreground">
                We are a fully licensed and insured moving company, giving you complete peace of mind. Our team of <Link href="/services/local-movers-atlanta-ga" className="text-primary hover:underline">local movers in Atlanta, GA</Link> is not only strong and efficient but also trained in professional customer service and safe handling techniques. We protect your furniture, your floors, and your memories. Choose us for a moving experience that prioritizes your satisfaction above all else.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Fully Licensed & Insured:</strong> Your move is protected every step of the way.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Transparent Pricing:</strong> No hidden fees. We provide clear, upfront quotes for all our Atlanta moving services.</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src={PlaceHolderImages.generalMoving.imageUrl}
                alt="A team of professional movers carrying a sofa in Atlanta"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.generalMoving.imageHint}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Comprehensive Moving Services</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We offer a full suite of services to handle every aspect of your move in Atlanta.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {movingServices.map((service, index) => (
              <Card key={service.name} className="flex flex-col">
                <CardHeader className="items-center">
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <service.icon className="h-6 w-6" />
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="mt-2 text-muted-foreground flex-grow">{service.description}</p>
                   {service.href !== '#' && (
                    <Button asChild variant="link" className="mt-4 h-auto p-0 text-base">
                        <Link href={service.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                   )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">We Also Offer Courier Services</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Beyond traditional moves, we provide fast and reliable courier services for when you need items delivered urgently across Atlanta.
            </p>
            <div className="mt-8">
                 <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
                  <Link href="/services/courier-same-day-delivery-atlanta">Explore Same-Day Delivery Atlanta GA <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Plan Your Easiest Move Yet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Let our professional team take the weight off your shoulders. Contact MoeMoe Enterprises for a free, detailed quote for our moving services in Atlanta.
          </p>
          <div className="mt-8">
             <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="/quote?service=moving">Get My Free Moving Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
