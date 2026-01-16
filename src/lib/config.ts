
export const SITE_CONFIG = {
  name: 'MoeMoe Enterprises',
  phone: '(404) 375-9495',
  email: 'info@moemoeenterprise.com',
  fax: '678 813 2150',
  address: 'Metro Atlanta, GA',
  copyright: `© ${new Date().getFullYear()} MoeMoe Enterprises LLC. All rights reserved.`,
  socialLinks: {
    facebook: 'https://facebook.com/moemoemovers',
    instagram: 'https://www.instagram.com/moemoemovers/',
    twitter: 'https://twitter.com/moemoemovers',
  },
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  cta: {
    text: 'Request a Free Quote',
    href: '/quote',
  },
};

export const SERVICES = [
  {
    name: 'Atlanta Moving Services',
    description: 'Relocate with ease in Metro Atlanta. Our professional movers handle your belongings with care, ensuring a stress-free transition to your new home or office.',
    image: 'serviceMoving',
    href: '/services#moving-services',
  },
  {
    name: 'Atlanta Cleaning Services',
    description: 'Impeccable cleaning for homes and offices in Atlanta. From deep cleaning to regular maintenance, we leave your space sparkling clean.',
    image: 'serviceCleaning',
    href: '/services#cleaning-services',
  },
];
