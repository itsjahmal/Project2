
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles, Building, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Our Moving & Cleaning Services in Atlanta, GA',
  description: 'Explore our full range of residential cleaning, commercial cleaning, local moving, and courier services in Atlanta. Your one-stop solution for home and business needs.',
};

const serviceCategories = [
  {
    title: "Residential Cleaning Services",
    icon: Sparkles,
    image: PlaceHolderImages.residentialCleaning,
    description: "Our residential cleaning services in Atlanta, GA, are designed to give you a pristine living space without the hassle. We cover everything from routine upkeep to intensive deep cleans.",
    links: [
      { name: "House Cleaning Services", href: "/services/house-cleaning-services-atlanta" },
      { name: "Deep Cleaning Services", href: "/services/deep-cleaning-services-atlanta" },
      { name: "Move-In / Move-Out Cleaning", href: "/services/move-in-move-out-cleaning-atlanta" },
    ]
  },
  {
    title: "Commercial & Business Cleaning",
    icon: Building,
    image: PlaceHolderImages.commercialCleaning,
    description: "Maintain a clean, safe, and productive workplace with our commercial cleaning services in Atlanta. We provide reliable janitorial solutions for businesses of all sizes.",
    links: [
      { name: "Office Cleaning Services", href: "/services/office-cleaning-services-atlanta" },
      { name: "Janitorial & Business Cleaning", href: "/services/janitorial-business-cleaning-atlanta" },
    ]
  },
  {
    title: "Moving & Courier Services",
    icon: Truck,
    image: PlaceHolderImages.serviceMoving,
    description: "Trust our professional local movers in Atlanta, GA, for a seamless relocation experience. We also offer swift and secure courier and same-day delivery services.",
    links: [
      { name: "Local Moving Services", href: "/services/moving-services-atlanta" },
      { name: "Atlanta's Local Movers", href: "/services/local-movers-atlanta-ga" },
      { name: "Courier & Same-Day Delivery", href: "/services/courier-same-day-delivery-atlanta" },
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Professional Services in Atlanta</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            MoeMoe Enterprises offers a complete suite of top-tier moving, courier, and cleaning services tailored to meet the needs of our clients in the Metro Atlanta area.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <Card key={category.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                  <Image
                    src={category.image.imageUrl}
                    alt={category.image.description}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                    data-ai-hint={category.image.imageHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </div>
                  <p className="mt-2 text-muted-foreground flex-grow">{category.description}</p>
                  <ul className="mt-4 space-y-2">
                    {category.links.map(link => (
                      <li key={link.href}>
                        <Button asChild variant="link" className="p-0 h-auto text-base">
                          <Link href={link.href} className="flex items-center">
                            {link.name} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Your Free, No-Obligation Quote Today!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Ready to experience the MoeMoe Enterprises difference? Contact us for a customized quote for your cleaning or moving needs in Atlanta.
          </p>
          <div className="mt-8">
             <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href="/quote">Request a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
