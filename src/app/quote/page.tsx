
'use client';

import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QuoteForm } from './_components/quote-form';

// A simple loading skeleton for the form
function QuoteFormSkeleton() {
    return (
        <div className="space-y-6">
            <div className="h-10 w-1/2 bg-muted rounded-md animate-pulse"></div>
            <div className="h-10 w-full bg-muted rounded-md animate-pulse"></div>
            <div className="h-10 w-full bg-muted rounded-md animate-pulse"></div>
            <div className="h-24 w-full bg-muted rounded-md animate-pulse"></div>
            <div className="h-12 w-1/3 bg-muted rounded-md animate-pulse"></div>
        </div>
    )
}


export default function QuotePage() {
    return (
        <>
          <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center md:px-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Request a Free Quote</h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Fill out the form below to get a no-obligation quote for your moving or cleaning needs in Atlanta. We'll get back to you within one business day.
              </p>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Quote Request</CardTitle>
                  <CardDescription>
                    The more details you provide, the more accurate your quote for our Atlanta-based services will be.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                    <Suspense fallback={<QuoteFormSkeleton />}>
                        <QuoteForm />
                    </Suspense>
                </CardContent>
              </Card>
            </div>
          </section>
        </>
    )
}
