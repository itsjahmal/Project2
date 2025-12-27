import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, FileText, UserCog } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { Logo } from '@/components/icons/logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              Your trusted partner for moving and cleaning services in Metro Atlanta. We handle the hard work so you don't have to.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-headline text-md mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {SITE_CONFIG.navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
               <li>
                  <Link href={SITE_CONFIG.cta.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {SITE_CONFIG.cta.text}
                  </Link>
                </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-headline text-md mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`} className="text-muted-foreground transition-colors hover:text-primary">{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-muted-foreground transition-colors hover:text-primary">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Fax: {SITE_CONFIG.fax}</span>
              </li>
            </ul>
          </div>
           <div className="md:col-span-3">
            <h4 className="font-headline text-md mb-4 font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-muted-foreground transition-colors hover:text-primary"><Facebook /></a>
              <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-muted-foreground transition-colors hover:text-primary"><Instagram /></a>
              <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="text-muted-foreground transition-colors hover:text-primary"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>{SITE_CONFIG.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
