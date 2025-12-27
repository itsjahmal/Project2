import Image from 'next/image';
import { Award, Heart, Users, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MoeMoe Enterprises - Atlanta\'s Trusted Movers & Cleaners',
  description: 'Learn about our story, mission, and the values that make us a leading moving and cleaning service provider in Metro Atlanta.',
};


const values = [
  { icon: Heart, title: 'Customer First', description: 'Our Atlanta-area clients are our top priority. We go above and beyond to ensure complete satisfaction.' },
  { icon: Award, title: 'Uncompromising Quality', description: 'We use the best equipment and trained professionals to deliver a high-quality service, every time.' },
  { icon: Users, title: 'Integrity & Trust', description: 'We operate with honesty and transparency, building lasting relationships with our Atlanta community.' },
];

const serviceAreas = [
  "Atlanta", "Marietta", "Roswell", "Sandy Springs", "Alpharetta", "Johns Creek", "Smyrna", "Dunwoody", "Decatur", "Buckhead", "Midtown", "And more..."
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About MoeMoe Enterprises</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A local Atlanta business built on a foundation of hard work, reliability, and a passion for serving our community.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Atlanta Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in the heart of Atlanta, MoeMoe Enterprises started with a simple mission: to provide exceptional moving and cleaning services that our neighbors could rely on. We saw a need for a service provider that was not just efficient, but also careful, communicative, and truly cared about its customers' peace of mind.
              </p>
              <p className="mt-4 text-muted-foreground">
                From our humble beginnings, we've grown into a trusted name in the Metro Atlanta area, but our core values remain the same. We're a team of dedicated local professionals who take pride in our work and in the community we serve.
              </p>
            </div>
            <div>
              <Image
                src={PlaceHolderImages.aboutStory.imageUrl}
                alt={PlaceHolderImages.aboutStory.description}
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.aboutStory.imageHint}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission & Values</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{value.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <MapPin className="h-8 w-8" />
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Serving Metro Atlanta & Surrounding Areas</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We're proud to offer our premier moving and cleaning services across the greater Atlanta area.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-muted-foreground font-medium">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
