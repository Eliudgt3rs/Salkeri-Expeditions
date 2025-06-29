"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { DatePicker } from "./date-picker"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  preferredDates: z.date({
    required_error: "A date is required.",
  }),
  partySize: z.coerce.number().min(1, {
    message: "Party size must be at least 1.",
  }),
});

export default function Enquiry() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      partySize: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Enquiry Sent!",
      description: "Thank you for your interest. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">Start Your Adventure</h2>
            <p className="text-lg text-foreground/80">
              Have questions or ready to book? Fill out the form, and one of our safari specialists will be in touch. For immediate assistance, feel free to call us.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <p className="text-lg"><strong>Phone:</strong> <a href="tel:+254712345678" className="hover:text-primary transition-colors">+254 712 345 678</a></p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg"><strong>Email:</strong> <a href="mailto:booking@simbatrails.com" className="hover:text-primary transition-colors">booking@simbatrails.com</a></p>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="font-medium">Follow us on Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Enquiry Form</CardTitle>
              <CardDescription>Let's plan your dream safari.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jane.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="preferredDates"
                      render={({ field }) => (
                        <FormItem className="flex flex-col pt-2 space-y-2">
                          <FormLabel>Preferred Start Date</FormLabel>
                          <DatePicker field={field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="partySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Travel Party Size</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Submit Enquiry</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
