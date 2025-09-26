
export const SITE_CONFIG = {
  name: 'MoeMoe Enterprises',
  phone: '(404) 375-9495',
  email: 'info@moemoeenterpise.com',
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

export const FAQ = [
  {
    question: 'What areas in Metro Atlanta do you serve?',
    answer: 'We proudly serve the entire Metro Atlanta area, including but not limited to Atlanta proper, Roswell, Marietta, Sandy Springs, Alpharetta, Johns Creek, Smyrna, and Dunwoody. If you\'re unsure if you\'re in our service area, please don\'t hesitate to contact us!'
  },
  {
    question: 'Are you a licensed and insured moving company in Georgia?',
    answer: 'Yes, MoeMoe Enterprises is a fully licensed and insured company. We adhere to all state and local regulations to ensure your belongings are protected and your service is professional and secure.'
  },
  {
    question: 'How do I get a quote for my move or cleaning service?',
    answer: 'The best way is to fill out our online form on the "Request a Quote" page. Provide as much detail as possible, and we will get back to you with a free, no-obligation quote within one business day.'
  },
  {
    question: 'What types of cleaning do you offer?',
    answer: 'We offer a wide range of cleaning services, including residential deep cleaning, regular maid service, office and commercial cleaning, and move-in/move-out cleaning to prepare a property for its next occupants.'
  },
  {
    question: 'How do you protect my furniture during a move?',
    answer: 'Our professional moving team uses high-quality packing materials, including moving blankets, shrink wrap, and padding to protect all of your furniture and fragile items. We treat every item with the utmost care.'
  }
];
