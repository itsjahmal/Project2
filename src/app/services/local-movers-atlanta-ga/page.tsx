import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Package, Star, Users } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Local Movers in Atlanta, GA | Top-Rated & Reliable',
  description: 'Searching for the best local movers in Atlanta, GA? MoeMoe Enterprises offers affordable, reliable, and professional moving services. Get your free moving quote now!',
};

const moveProcess = [
  { title: '1. Free Quote', description: 'Start with a detailed, transparent quote with no hidden fees. We assess your needs to provide an accurate estimate.' },
  { title: '2. Strategic Planning', description: 'Our logistics team plans the perfect moving day strategy, coordinating all details for a seamless experience.' },
  { title: '3. Professional Packing', description: 'Our optional packing services use high-quality materials to protect your belongings, from fragile items to bulky furniture.' },
  { title: '4. Efficient Moving Day', description: 'Our uniformed, trained movers arrive on time, ready to execute the plan with efficiency and care.' },
  { title: '5. Safe Unloading', description: 'We carefully unload and place your items in your new space as directed, ensuring a smooth transition.' },
];

export default function LocalMoversPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" data-aos="fade-up">Your Trusted Local Movers in Atlanta, GA</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90" data-aos="fade-up" data-aos-delay="100">
            MoeMoe Enterprises makes moving within the Atlanta metro area simple, stress-free, and affordable. We are the local movers Atlanta, GA residents trust.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
            <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Get a Free Moving Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold tracking-tight">Why Atlantans Choose Our Local Moving Services</h2>
              <p className="mt-4 text-muted-foreground">
                Moving, even locally, can be one of life's most stressful events. Choosing the right local movers in Atlanta, GA, makes all the difference. At MoeMoe Enterprises, we are more than just a truck and a team; we are your dedicated partners in transition. We are a locally owned and operated business, which means we have an intimate understanding of Atlanta's neighborhoods, from the bustling streets of Midtown to the quiet suburbs of Alpharetta.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our reputation is built on a foundation of trust, reliability, and unparalleled customer service. Every member of our moving team is professionally trained, background-checked, and committed to treating your belongings as if they were our own. We combine local expertise with a commitment to excellence, making us the go-to moving company for thousands of satisfied customers across the Atlanta metro area. When you search for "local movers Atlanta GA," you're looking for a team that's dependable, and that's exactly who we are.
              </p>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-base">
                <Link href="/services/moving-services-atlanta">Explore All Our Moving Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div data-aos="zoom-in">
              <Image
                src={PlaceHolderImages.serviceMoving.imageUrl}
                alt="A team of professional local movers in Atlanta, GA, loading a truck"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.serviceMoving.imageHint}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Our 5-Step Local Moving Process</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              We've perfected our process to ensure a smooth and efficient move every time.
            </p>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" aria-hidden="true"></div>
            {moveProcess.map((step, index) => (
                 <div key={index} className="relative mb-8" data-aos="fade-up" data-aos-delay={index * 150}>
                    <div className="flex items-center justify-center">
                        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-secondary">
                            <Star className="h-5 w-5" />
                        </div>
                    </div>
                     <Card className={`mt-4 w-full sm:w-2/3 ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                        <CardHeader>
                            <CardTitle>{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Comprehensive Moving Solutions</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              As full-service local movers in Atlanta, GA, we offer more than just transportation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              <Card data-aos="fade-up">
                <CardHeader><CardTitle>Residential Moving</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Apartments, condos, or single-family homes—no local move is too big or too small for our expert Atlanta team.</p></CardContent>
              </Card>
              <Card data-aos="fade-up" data-aos-delay="150">
                <CardHeader><CardTitle>Commercial Moving</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Efficiently relocate your office or business with minimal downtime. We plan every detail to get you back to work fast.</p></CardContent>
              </Card>
              <Card dataaos="fade-up" data-aos-delay="300">
                <CardHeader><CardTitle>Packing & Unpacking</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">Save time and protect your valuables with our professional packing and unpacking services.</p></CardContent>
              </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
            Make Your Next Move Your Best Move
          </h2>
          <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Ready to experience a hassle-free move? Contact the local movers Atlanta, GA trusts. Get your free, no-obligation quote from MoeMoe Enterprises today!
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
             <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="/quote?service=moving">Get My Free Moving Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
