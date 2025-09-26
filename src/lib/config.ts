
export const SITE_CONFIG = {
  name: 'MoeMoe Enterprises',
  phone: '(404) 375-9495',
  email: 'info@moemoeenterpise.com',
  address: 'Metro Atlanta, GA',
  copyright: `© ${new Date().getFullYear()} MoeMoe Enterprises LLC. All rights reserved.`,
  socialLinks: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
  },
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  cta: {
    text: 'Request a Quote',
    href: '/quote',
  },
};

export const SERVICES = [
  {
    name: 'Moving Services',
    description: 'Relocate with ease. Our professional movers handle your belongings with care, ensuring a stress-free transition to your new home or office.',
    image: 'serviceMoving',
    href: '/quote?service=moving',
  },
  {
    name: 'Cleaning Services',
    description: 'Impeccable cleaning for homes and offices. From deep cleaning to regular maintenance, we leave your space sparkling clean.',
    image: 'serviceCleaning',
    href: '/quote?service=cleaning',
  },
];
