
import { Suspense } from 'react'
import EnquiryPageForm from '@/components/enquiry-page-form'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

function EnquiryFormSkeleton() {
  return (
    <Card className="max-w-4xl mx-auto border-primary">
      <CardContent className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-20 w-full" />
        </div>
        <Skeleton className="h-11 w-full" />
      </CardContent>
    </Card>
  )
}

export default function EnquiryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-primary">
                Let's Plan Your Trip
              </h2>
              <p className="text-lg text-foreground/80 mt-4">
                Fill in the form below to get started on your custom-tailored safari
                adventure. One of our safari specialists will get back to you within
                24 hours.
              </p>
            </div>
            <Suspense fallback={<EnquiryFormSkeleton />}>
              <EnquiryPageForm />
            </Suspense>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
