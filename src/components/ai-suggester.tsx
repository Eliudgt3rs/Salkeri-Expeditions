"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { suggestDestination } from "@/ai/flows/suggest-destination-flow";
import { SuggestDestinationInputSchema, SuggestDestinationOutput } from "@/ai/schemas/suggestion-schemas";
import { destinations } from "@/lib/destinations";

const formSchema = SuggestDestinationInputSchema;

export default function AISuggester() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SuggestDestinationOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      travelerType: "",
      tripStyle: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setResult(null);
    try {
      const suggestion = await suggestDestination(values);

      // Check for structured errors returned from the flow
      if (suggestion.slug.startsWith('error-')) {
        toast({
          title: "Error",
          description: suggestion.reasoning,
          variant: "destructive",
        });
        setResult(null);
      } else {
        setResult(suggestion);
      }
    } catch (error) {
      // This catch block is now a fallback for network errors or unexpected issues.
      console.error("AI suggestion error:", error);
      toast({
        title: "Error",
        description: "A network error occurred. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedDestination = result ? destinations.find(d => d.slug === result.slug) : null;
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Reset form and results when dialog closes
      form.reset();
      setResult(null);
      setIsLoading(false);
    }
    setIsOpen(open);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <Wand2 className="mr-2 h-5 w-5" />
          Let AI Find Your Safari
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg max-w-[calc(100vw-2rem)] sm:max-w-[480px] p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Find Your Perfect Safari</DialogTitle>
          <DialogDescription>
            Tell us what you're looking for, and our AI will suggest the perfect destination for you.
          </DialogDescription>
        </DialogHeader>
        
        {!result && !isLoading && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your main interests?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Big Five, photography, bird watching" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="travelerType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Who are you traveling with?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select traveler type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="solo">Solo</SelectItem>
                        <SelectItem value="couple">Couple / Honeymoon</SelectItem>
                        <SelectItem value="family">Family with Children</SelectItem>
                        <SelectItem value="group">Group of Friends</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tripStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What's your preferred trip style?</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select trip style" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="adventure">Action-packed Adventure</SelectItem>
                        <SelectItem value="relaxation">Relaxing &amp; Scenic</SelectItem>
                        <SelectItem value="luxury">Ultimate Luxury</SelectItem>
                        <SelectItem value="off-the-beaten-path">Off-the-beaten-path</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white" disabled={isLoading}>
                  {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Getting suggestion...</> : "Suggest Destination"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}

        {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 py-16">
                <Loader2 className="h-12 w-12 animate-spin text-primary"/>
                <p className="text-muted-foreground">Our AI is finding your perfect trip...</p>
            </div>
        )}

        {result && suggestedDestination && (
            <div className="py-4">
                <h3 className="text-lg font-semibold text-primary">Our Recommendation For You:</h3>
                <h2 className="font-headline text-2xl sm:text-3xl my-2">{suggestedDestination.title}</h2>
                <div className="relative w-full h-48 my-4 rounded-lg overflow-hidden">
                    <Image src={suggestedDestination.image} alt={suggestedDestination.title} fill className="object-cover" />
                </div>
                <p className="text-foreground/80">{result.reasoning}</p>
                <DialogFooter className="mt-6 flex-col sm:flex-row sm:justify-start gap-2">
                    <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href={`/destinations/${suggestedDestination.slug}`} onClick={() => setIsOpen(false)}>
                            Explore Destination
                        </Link>
                    </Button>
                     <Button type="button" variant="secondary" onClick={() => setResult(null)}>
                        Try Again
                    </Button>
                </DialogFooter>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
