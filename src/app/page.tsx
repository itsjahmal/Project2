import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, MapPin, MessageSquare, Star, ArrowRight, ShieldCheck, Truck, Sparkles, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG } from '@/lib/config';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQ } from '@/lib/faq';

const testimonials = [
  { name: 'Sarah L.', avatar: PlaceHolderImages.avatar1, text: "MoeMoe's team was a lifesaver for our downtown Atlanta move. Professional, efficient, and not a single scratch on our furniture. Highly recommended for any local movers in Atlanta GA!" },
  { name: 'Mike R.', avatar: PlaceHolderImages.avatar2, text: "The commercial cleaning service for our Marietta office exceeded all our expectations. The attention to detail was incredible. The best janitorial services in Atlanta." },
  { name: 'Jessica Chen', avatar: PlaceHolderImages.avatar3, text: "I was stressed about moving within Roswell, but their moving services in Atlanta made it so easy. From the first call to the last box, the service was top-notch." },
];

const trustSignals = [
  { icon: ShieldCheck, title: 'Licensed & Insured', description: 'Your peace of mind is our priority. We are fully licensed and insured for all services in Georgia.' },
  { icon: Star, title: '5-Star Rated', description: 'Our commitment to quality is reflected in hundreds of happy Atlanta-area customers.' },
  { icon: MessageSquare, title: 'Clear Communication', description: 'We keep you informed every step of the way, with no surprise fees or hidden costs.' },
  { icon: MapPin, title: 'Atlanta Experts', description: 'Proudly serving Metro Atlanta with in-depth local knowledge of neighborhoods from Buckhead to Decatur.' },
];

const services = [
    {
      name: 'Residential Cleaning Services',
      description: 'Experience a new level of clean. Our house cleaning services in Atlanta leave your home spotless, from standard tidying to deep cleaning and move-out services.',
      icon: Sparkles,
      image: PlaceHolderImages.residentialCleaning,
      href: '/services/house-cleaning-services-atlanta'
    },
    {
      name: 'Commercial Cleaning Services',
      description: 'Maintain a professional and healthy environment with our business cleaning services in Atlanta. We offer flexible contracts for offices, retail, and more.',
      icon: Building,
      image: PlaceHolderImages.commercialCleaning,
      href: '/services/office-cleaning-services-atlanta'
    },
     {
      name: 'Moving & Courier Services',
      description: 'Whether you\'re moving across town or need same-day delivery, our local movers in Atlanta, GA provide reliable, efficient, and careful service every time.',
      icon: Truck,
      image: PlaceHolderImages.serviceMoving,
      href: '/services/moving-services-atlanta'
    }
  ];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] w-full">
        <Image
          src={PlaceHolderImages.heroSkyline.imageUrl}
          alt="Skyline of Atlanta, GA, the primary service area for MoeMoe Enterprises"
          fill
          className="object-cover"
          priority
          data-ai-hint={PlaceHolderImages.heroSkyline.imageHint}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Atlanta's Premier Moving & Cleaning Services
          </h1>
          <p
            className="mt-6 max-w-3xl text-lg md:text-xl"
          >
            Top-rated residential & commercial cleaning, local moving, and same-day courier services across Metro Atlanta.
          </p>
          <div
            className="mt-10"
          >
            <Button size="lg" asChild className="glow-on-hover bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Request a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your All-in-One Solution in Atlanta, GA</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              One company for all your home and business service needs. We specialize in professional cleaning, moving, and courier solutions across Metro Atlanta.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {services.map((service, index) => (
              <Card key={service.name} className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
                <CardHeader className="items-center">
                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <service.icon className="h-8 w-8" />
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-center">{service.name}</h3>
                  <p className="mt-2 text-muted-foreground flex-grow">{service.description}</p>
                   <Button asChild variant="link" className="mt-4 h-auto p-0 text-base mx-auto">
                    <Link href={service.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Signals */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Atlanta Trusts MoeMoe Enterprises</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Reliability, quality, and customer satisfaction are at the core of everything we do. We're your neighbors, dedicated to serving the Atlanta community.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((feature, index) => (
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

      {/* Testimonials */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Atlanta Clients Say</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
             Our reputation is built on the satisfaction of our customers.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto mt-12 w-full max-w-6xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="flex h-full flex-col">
                      <CardContent className="flex flex-grow flex-col p-6">
                         <div className="flex text-yellow-500 mb-4">
                            <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" />
                        </div>
                        <p className="flex-grow text-muted-foreground">"{testimonial.text}"</p>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 text-muted-foreground">
              Find answers to common questions about our moving and cleaning services in the Atlanta area.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-12 max-w-3xl mx-auto">
            {FAQ.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-bold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready for a Smooth Move or a Spotless Space?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Contact us today for a free, no-obligation quote. Let MoeMoe Enterprises make your next moving or cleaning project in Atlanta a breeze.
          </p>
          <div className="mt-8">
             <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>Request a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
