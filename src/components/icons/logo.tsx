import type { SVGProps } from 'react';
import { SITE_CONFIG } from '@/lib/config';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center font-headline font-bold text-2xl text-primary" {...props}>
      {SITE_CONFIG.name}
    </div>
  );
}
