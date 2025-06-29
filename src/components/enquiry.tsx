"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

import { useToast } from "@/hooks/use-toast";
import { DatePicker } from "@/components/date-picker";
import { destinations } from "@/lib/destinations";

interface EnquiryProps {
  defaultDestination?: string;
}

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
  interests: z.string().optional(),
  destination: z.string().min(1, {
    message: "Please select a destination.",
  }),
});

export default function Enquiry({ defaultDestination }: EnquiryProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      partySize: 1,
      interests: "",
      destination: defaultDestination || "",
    },
  });

  useEffect(() => {
    if (defaultDestination) {
      form.setValue("destination", defaultDestination);
    }
  }, [defaultDestination, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const encodedMessage = encodeURIComponent(
      `New Inquiry:\n\nName: ${values.name}\nEmail: ${values.email}\nPreferred Date: ${values.preferredDates.toDateString()}\nParty Size: ${values.partySize}\nInterests: ${values.interests || 'Not specified'}\nDestination: ${values.destination}`
    );

    const whatsappUrl = `https://wa.me/+254719790026?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Optional toast
    // toast({ title: "Opening WhatsApp", description: "Redirecting to WhatsApp..." });

    form.reset();
  }

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">
            Let's Plan Your Trip
          </h2>
          <p className="text-lg text-foreground/80 mt-4">
            Fill in the form below to get started on your custom-tailored safari adventure. One of our safari specialists will get back to you within 24 hours.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-primary">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Your Name" {...field} />
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
                          <Input placeholder="example@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Destination</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a destination" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {destinations.map((destination) => (
                            <SelectItem key={destination.slug} value={destination.title}>
                              {destination.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interests &amp; Ideas</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your dream safari..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
