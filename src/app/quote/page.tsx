
'use client';

import { Suspense, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QuoteForm } from './_components/quote-form';

// Metadata can't be in a client component in the same file as 'use client'
// but since this page is now fully client-rendered for the fix, we can define metadata separately if needed
// or accept that it might be better handled in a parent layout if this page is purely for dynamic content.
// For now, we focus on fixing the hydration error.

function QuotePageContent() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Render nothing on the server and on the initial client pass
    if (!isClient) {
        return null;
    }

  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" data-aos="fade-up">Request a Free Quote</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
            Fill out the form below to get a no-obligation quote for your moving or cleaning needs in Atlanta. We'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="text-2xl">Your Quote Request</CardTitle>
              <CardDescription>
                The more details you provide, the more accurate your quote for our Atlanta-based services will be.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuoteForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

// We wrap the client content in a parent component that can handle suspense.
export default function QuotePageWrapper() {
  return (
    <Suspense>
      <QuotePageContent />
    </Suspense>
  )
}
