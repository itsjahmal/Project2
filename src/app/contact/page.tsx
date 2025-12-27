import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SITE_CONFIG } from '@/lib/config';
import { ContactForm } from './_components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Atlanta Moving and Cleaning Services',
  description: `Contact MoeMoe Enterprises for questions about our Atlanta moving and cleaning services. Call us at ${SITE_CONFIG.phone} or send us a message.`,
};

const contactDetails = [
  { icon: Phone, title: 'Phone', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\D/g, '')}` },
  { icon: Mail, title: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: MapPin, title: 'Service Area', value: SITE_CONFIG.address, href: '#' },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Get In Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We're here to answer any questions you may have about our Atlanta services. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
              {contactDetails.map((detail, index) => (
                <div key={detail.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <detail.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{detail.title}</h3>
                    <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {detail.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <Card className="p-6 sm:p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
