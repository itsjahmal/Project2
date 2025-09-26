
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { ArrowRight, Briefcase, HeartPulse, Scale, ShieldCheck, Sparkles, Building, Handshake, Plane, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Moving, Courier & Cleaning Services in Atlanta, GA',
  description: 'Explore our professional moving, courier, and cleaning services in Metro Atlanta. We offer residential and commercial solutions.',
};

const movingServices = {
  title: "Atlanta Moving & Courier Services",
  categories: [
    {
      name: "Medical & Healthcare",
      icon: HeartPulse,
      image: "medicalCourier",
      description: "HIPAA-certified transport of medical devices, laboratory samples, prescriptions, and confidential healthcare documents.",
      items: ["Medical devices & equipment", "Laboratory specimens", "Prescription deliveries", "Medical records"],
    },
    {
      name: "Law Firms and Legal Services",
      icon: Scale,
      image: "legalCourier",
      description: "Secure delivery of legal documents, contracts, court filings, and confidential business materials with proof of delivery.",
      items: ["Legal documents", "Court filings", "Contracts & agreements", "Confidential files"],
    },
    {
      name: "Business Deliveries",
      icon: Briefcase,
      image: "businessCourier",
      description: "Fast and reliable delivery of business packages, documents, samples, and time-sensitive materials between offices.",
      items: ["Office documents", "Business packages", "Product samples", "Inter-office mail"],
    },
    {
      name: "General Moving",
      icon: Truck,
      image: "generalMoving",
      description: "Comprehensive moving services for residential and commercial relocations. We handle everything from small apartment moves to large house relocations with professional care and efficiency.",
      items: ["Residential relocations", "Apartment moves", "Commercial moving", "Furniture transport", "Packing services", "Storage solutions"],
    },
    {
      name: "International Air Transportation",
      icon: Plane,
      image: "internationalShipping",
      description: "Global courier services with air transportation for international deliveries, customs clearance, and worldwide logistics solutions.",
      items: ["International shipping", "Customs clearance", "Air freight services", "Global tracking"],
    },
  ]
};

const cleaningServices = {
  title: "Atlanta Cleaning Services",
  categories: [
    {
      name: "Residential Cleaning",
      icon: Sparkles,
      image: "residentialCleaning",
      description: "Complete home cleaning services to keep your living space pristine. We offer flexible scheduling, including weekly, bi-weekly, and monthly services.",
      items: ["Recurring Maid Service", "Deep Cleaning", "Apartment Cleaning", "Move-In/Move-Out Cleaning"],
    },
    {
      name: "Commercial & Office Cleaning",
      icon: Building,
      image: "commercialCleaning",
      description: "Professional janitorial services for businesses of all sizes. Maintain a clean, healthy, and productive work environment for your employees and clients.",
      items: ["Office Buildings", "Retail Spaces", "Medical Facilities", "Educational Institutions"],
    },
    {
      name: "Specialty Cleaning Services",
      icon: ShieldCheck,
      image: "specialtyCleaning",
      description: "Targeted cleaning solutions for specific needs. Our trained technicians use specialized equipment to tackle the toughest jobs.",
      items: ["Carpet & Upholstery Cleaning", "Window Washing", "Hard Floor Care (Waxing/Polishing)", "Post-Construction Cleanup"],
    },
     {
      name: "Event & Venue Cleaning",
      icon: Handshake,
      image: "eventCleaning",
      description: "Reliable pre-event and post-event cleaning services for conferences, weddings, parties, and corporate functions. We ensure your venue is spotless before and after.",
      items: ["Pre-Event Preparation", "Post-Event Cleanup", "Restroom Attendants", "Trash Removal"],
    },
    {
      name: "Disinfection & Sanitization",
      icon: HeartPulse,
      image: "sanitizationServices",
      description: "Advanced disinfection services to protect against germs, viruses, and bacteria. Ideal for healthcare settings, schools, and businesses prioritizing health and safety.",
      items: ["Electrostatic Disinfection", "High-Touch Point Sanitization", "Preventative Treatments", "Emergency Response"],
    },
  ]
};


const ServiceCard = ({ category, index }: { category: any; index: number }) => (
  <div
    className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
    data-aos="fade-up"
  >
    <div className={index % 2 === 1 ? 'md:order-last' : ''}>
      <Image
        src={PlaceHolderImages[category.image].imageUrl}
        alt={PlaceHolderImages[category.image].description}
        width={600}
        height={400}
        className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        data-ai-hint={PlaceHolderImages[category.image].imageHint}
      />
    </div>
    <div>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <category.icon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{category.name}</h3>
      </div>
      <p className="mt-4 text-muted-foreground">{category.description}</p>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        {category.items.map((item: string) => (
          <li key={item} className="flex items-start">
            <ArrowRight className="h-5 w-5 mt-1 mr-2 text-primary flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" data-aos="fade-up">Our Professional Services in Atlanta</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
            MoeMoe Enterprises offers top-tier moving, courier, and cleaning services tailored to meet the needs of our clients in the Metro Atlanta area.
          </p>
        </div>
      </section>

      {/* Moving & Courier Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">{movingServices.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              Professional courier and moving solutions for businesses, healthcare providers, legal firms, and individuals.
            </p>
          </div>
          <div className="space-y-20">
            {movingServices.categories.map((category, index) => (
              <ServiceCard key={category.name} category={category} index={index} />
            ))}
          </div>
          <div className="text-center mt-16" data-aos="fade-up">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="/quote?service=moving">Get a Moving or Courier Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Divider */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-border"></div>
      </div>

      {/* Cleaning Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">{cleaningServices.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
             Comprehensive cleaning solutions for homes, offices, and specialty needs across Atlanta.
            </p>
          </div>
          <div className="space-y-20">
            {cleaningServices.categories.map((category, index) => (
              <ServiceCard key={category.name} category={category} index={index} />
            ))}
          </div>
           <div className="text-center mt-16" data-aos="fade-up">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="/quote?service=cleaning">Get a Cleaning Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
