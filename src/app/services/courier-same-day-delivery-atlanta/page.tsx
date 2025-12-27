import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Package, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Same-Day Courier Services in Atlanta, GA | Fast & Reliable',
  description: 'Need urgent delivery? MoeMoe Enterprises offers fast, reliable same-day courier services in Atlanta, GA for documents, packages, and more. Get your free quote!',
};

const features = [
  { icon: Clock, title: 'Speed and Punctuality', description: 'Our primary goal is to deliver your items on time, every time. We understand the urgency of same-day delivery in Atlanta.' },
  { icon: ShieldCheck, title: 'Secure & Confidential', description: 'We handle every package with the utmost care and confidentiality, ensuring it arrives safely at its destination.' },
  { icon: Package, title: 'Versatile Fleet', description: 'From small legal documents to larger parcels, our diverse fleet can accommodate a wide range of delivery needs across Metro Atlanta.' },
  { icon: CheckCircle, title: 'Real-Time Tracking', description: 'Enjoy peace of mind with real-time tracking on your deliveries, so you always know the status of your shipment.' },
];

export default function CourierPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Atlanta Same-Day Courier & Delivery Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            When time is critical, trust MoeMoe Enterprises for fast, secure, and reliable same-day courier services across Atlanta, GA. We are your solution for urgent deliveries.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Get an Urgent Delivery Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Your Go-To Courier Service in Atlanta</h2>
              <p className="mt-4 text-muted-foreground">
                In the fast-paced business environment of Atlanta, waiting is not an option. MoeMoe Enterprises provides premier courier services in Atlanta designed to meet your most urgent needs. Whether it's a critical legal document that needs to reach downtown, a time-sensitive medical sample, or an important business parcel, our team is equipped to handle your delivery with speed and professionalism.
              </p>
              <p className="mt-4 text-muted-foreground">
                We pride ourselves on being more than just a delivery service; we are a reliable partner for businesses and individuals throughout the Atlanta metro area. Our local knowledge allows us to navigate the city's traffic patterns efficiently, ensuring the quickest possible routes for your same-day delivery in Atlanta, GA. We are committed to providing a seamless experience from pickup to drop-off.
              </p>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-base">
                <Link href="/contact">Contact Us for Custom Delivery Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div>
              <Image
                src={PlaceHolderImages.medicalCourier.imageUrl}
                alt="A professional courier handling a package in Atlanta"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.medicalCourier.imageHint}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Atlanta Courier Services?</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our commitment to excellence makes us a leading choice for courier services in Atlanta.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Industries We Serve in Atlanta, GA</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We provide specialized same-day delivery services for a variety of sectors.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              <Card>
                <CardHeader>
                    <Image src={PlaceHolderImages.legalCourier.imageUrl} alt="Legal documents for courier service in Atlanta" width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" data-ai-hint={PlaceHolderImages.legalCourier.imageHint} />
                </CardHeader>
                <CardContent>
                    <CardTitle>Legal & Financial</CardTitle>
                    <p className="mt-2 text-muted-foreground">Secure and timely delivery of court filings, contracts, and other sensitive documents for law firms and financial institutions in Atlanta.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                    <Image src={PlaceHolderImages.medicalCourier.imageUrl} alt="Medical courier services in Atlanta" width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" data-ai-hint={PlaceHolderImages.medicalCourier.imageHint} />
                </CardHeader>
                <CardContent>
                    <CardTitle>Medical & Healthcare</CardTitle>
                    <p className="mt-2 text-muted-foreground">HIPAA-compliant delivery of medical specimens, lab results, and pharmaceuticals for clinics and hospitals across the metro area.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                     <Image src={PlaceHolderImages.businessCourier.imageUrl} alt="Business package delivery in Atlanta" width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" data-ai-hint={PlaceHolderImages.businessCourier.imageHint} />
                </CardHeader>
                <CardContent>
                    <CardTitle>Corporate & Business</CardTitle>
                    <p className="mt-2 text-muted-foreground">From inter-office mail to urgent client packages, we support Atlanta businesses with reliable same-day delivery services.</p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need an Urgent Delivery in Atlanta?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Don't let time run out. Contact MoeMoe Enterprises for a fast and free quote on our same-day courier services in Atlanta, GA. We're ready to get your package moving.
          </p>
          <div className="mt-8">
             <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="/quote?service=courier">Request an Urgent Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
