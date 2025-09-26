import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SERVICES } from '@/lib/config';

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" data-aos="fade-up">Our Professional Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
            MoeMoe Enterprises offers top-tier moving and cleaning services tailored to meet the needs of our clients in the Metro Atlanta area.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <div
                key={service.name}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
                data-aos="fade-up"
              >
                <div className={index % 2 === 1 ? 'md:order-last' : ''}>
                  <Image
                    src={PlaceHolderImages[service.image].imageUrl}
                    alt={PlaceHolderImages[service.image].description}
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-lg"
                    data-ai-hint={PlaceHolderImages[service.image].imageHint}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">{service.name}</h2>
                  <p className="mt-4 text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Whether you're moving across town or need a pristine space to live or work in, our dedicated team is here to help. We combine expertise with a commitment to customer satisfaction.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform duration-300 hover:scale-105">
                    <Link href={service.href}>Get a Free Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
