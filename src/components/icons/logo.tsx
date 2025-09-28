import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/config';

export function Logo() {
  return (
    <Image
      src="https://i.imgur.com/kpvUUgj.png"
      alt={`${SITE_CONFIG.name} Logo`}
      width={160}
      height={40}
      className="h-10 w-auto"
      priority
    />
  );
}
