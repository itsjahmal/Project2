import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QuoteForm } from './_components/quote-form';

function QuotePageContent() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" data-aos="fade-up">Request a Free Quote</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
            Fill out the form below to get a no-obligation quote for your moving or cleaning needs. We'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="text-2xl">Quote Request Form</CardTitle>
              <CardDescription>
                The more details you provide, the more accurate your quote will be.
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

export default function QuotePage() {
  return (
    <Suspense>
      <QuotePageContent />
    </Suspense>
  )
}
