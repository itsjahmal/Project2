import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, MapPin, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_CONFIG, SERVICES } from '@/lib/config';

// Mock data for testimonials and features
const testimonials = [
  { name: 'Sarah L.', avatar: PlaceHolderImages.avatar1, text: "MoeMoe's team was a lifesaver for our downtown move. Professional, efficient, and not a single scratch on our furniture. Highly recommended!" },
  { name: 'Mike R.', avatar: PlaceHolderImages.avatar2, text: "The deep cleaning service exceeded all our expectations. Our office has never looked better. The attention to detail was incredible." },
  { name: 'Jessica Chen', avatar: PlaceHolderImages.avatar3, text: "I was stressed about moving, but they made it so easy. From the first call to the last box, the service was top-notch." },
];

const features = [
  { icon: CheckCircle, title: 'Fully Insured', description: 'Your peace of mind is our priority. We are fully insured for all services.' },
  { icon: Star, title: '5-Star Rated', description: 'Our commitment to quality service is reflected in our happy customers.' },
  { icon: MessageSquare, title: 'Clear Communication', description: 'We keep you informed every step of the way, with no surprises.' },
  { icon: MapPin, title: 'Local Experts', description: 'Proudly serving Metro Atlanta with in-depth local knowledge.' },
  { icon: CheckCircle, title: 'Satisfaction Guaranteed', description: 'We\'re not happy unless you are. We stand by the quality of our work.' }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] w-full">
        <Image
          src={PlaceHolderImages.heroSkyline.imageUrl}
          alt={PlaceHolderImages.heroSkyline.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={PlaceHolderImages.heroSkyline.imageHint}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            data-aos="fade-up"
          >
            Atlanta's Premier Moving & Cleaning
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let us handle the heavy lifting and the dirty work.
            <br />
            Professional service you can trust.
          </p>
          <div
            className="mt-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button size="lg" asChild className="glow-on-hover bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>{SITE_CONFIG.cta.text}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              Comprehensive solutions for your home and office needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <Card key={service.name} className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay={index * 150}>
                <CardHeader className="p-0">
                  <Image
                    src={PlaceHolderImages[service.image].imageUrl}
                    alt={PlaceHolderImages[service.image].description}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                    data-ai-hint={PlaceHolderImages[service.image].imageHint}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                  <Button asChild variant="link" className="mt-4 h-auto p-0">
                    <Link href={service.href}>Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Why Choose Us?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              Reliability, quality, and customer satisfaction are at the core of everything we do.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">What Our Clients Say</h2>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto mt-12 w-full max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="flex h-full flex-col">
                      <CardContent className="flex flex-grow flex-col p-6">
                        <p className="flex-grow text-muted-foreground">"{testimonial.text}"</p>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <div className="flex text-yellow-500">
                              <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                            </div>
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

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Contact us today for a free, no-obligation quote. Let MoeMoe Enterprises make your next move or cleaning project a breeze.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
             <Button size="lg" asChild className="animate-pulse bg-accent text-accent-foreground hover:animate-none hover:bg-accent/90">
              <Link href={SITE_CONFIG.cta.href}>{SITE_CONFIG.cta.text}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
