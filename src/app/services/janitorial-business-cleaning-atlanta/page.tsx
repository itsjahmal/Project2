import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Building, Users, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Janitorial & Business Cleaning Services in Atlanta, GA',
  description: 'Professional janitorial services in Atlanta, GA for a clean, safe, and productive business environment. Customized cleaning schedules. Get your free quote!',
};

const industries = [
  { name: 'Corporate Offices', description: 'Maintaining a pristine and professional atmosphere for your employees and clients in Atlanta.' },
  { name: 'Medical Facilities', description: 'Adhering to strict hygiene standards for clinics and healthcare providers.' },
  { name: 'Retail Spaces', description: 'Creating a clean and welcoming shopping experience for your customers.' },
  { name: 'Educational Institutions', description: 'Ensuring a safe and sanitary learning environment for students and staff.' },
  { name: 'Warehouses & Industrial', description: 'Providing robust cleaning solutions for large-scale commercial facilities.' },
  { name: 'Fitness Centers', description: 'Keeping gym equipment and facilities sanitized and ready for members.' },
];

export default function JanitorialPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" data-aos="fade-up">Atlanta Janitorial & Business Cleaning Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90" data-aos="fade-up" data-aos-delay="100">
            Reliable, professional, and thorough business cleaning services in Atlanta, GA. We keep your commercial space immaculate so you can focus on what you do best.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
            <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Get a Free Business Cleaning Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold tracking-tight">The Mark of a Professional Atlanta Business</h2>
              <p className="mt-4 text-muted-foreground">
                The cleanliness of your commercial space is a direct reflection of your brand. A clean, well-maintained environment not only impresses clients but also boosts employee morale and productivity. MoeMoe Enterprises offers comprehensive janitorial services in Atlanta designed to meet the unique needs of your business. We understand that every facility has different requirements, which is why we don’t offer a one-size-fits-all solution.
              </p>
              <p className="mt-4 text-muted-foreground">
                Instead, we provide customized business cleaning services in Atlanta, GA. We work with you to develop a cleaning schedule and scope of work that aligns with your operational hours, budget, and specific industry standards. From daily upkeep to periodic deep cleaning, our insured and bonded team uses state-of-the-art equipment and eco-friendly products to deliver consistent, high-quality results. Partner with us to ensure your business always looks its best.
              </p>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-base">
                <Link href="/services/office-cleaning-services-atlanta">See Our Specialized Office Cleaning Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div data-aos="zoom-in">
              <Image
                src={PlaceHolderImages.commercialCleaning.imageUrl}
                alt="A clean and modern office space after janitorial services in Atlanta"
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
            <Building className="mx-auto h-12 w-12 text-primary" data-aos="zoom-in" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Business & Janitorial Services for Every Atlanta Industry</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              Our experienced team is equipped to handle the specific cleaning needs of various commercial environments across Metro Atlanta.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card key={industry.name} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{industry.description}</p>
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
                src={PlaceHolderImages.aboutStory.imageUrl}
                alt="The professional and friendly janitorial team in Atlanta"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.aboutStory.imageHint}
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold tracking-tight">Our Commitment to Your Business</h2>
              <p className="mt-4 text-muted-foreground">When you choose MoeMoe Enterprises for your janitorial services in Atlanta, you get more than just a clean facility. You get a dedicated partner committed to excellence.</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Reliability and Trust:</strong> Our fully insured and bonded team is background-checked and professionally trained for your peace of mind.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Flexible Scheduling:</strong> We work around your business hours—offering services during the day, evenings, or weekends to minimize disruption.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Quality Assurance:</strong> We perform regular inspections and maintain open communication to ensure our cleaning services consistently meet your high standards.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
            Elevate Your Business Environment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Show your clients and employees you care with a professionally maintained facility. Contact us for a free, no-obligation quote for our business cleaning services in Atlanta, GA.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
             <Button size="lg" asChild className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="/quote?service=cleaning">Get a Commercial Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
