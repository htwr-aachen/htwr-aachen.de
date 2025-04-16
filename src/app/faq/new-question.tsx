"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  question: z
    .string()
    .min(5, {
      message: "Fragen sollten schon Inhalt haben!",
    })
    .max(150, {
      message: "Fragen sollten auch nicht sooo viel Inhalt haben!",
    }),
  description: z
    .string()
    .max(5000, { message: "Das kannst du nicht ernst meinen!" }),
});

const DescriptionPlaceholder =
  "1. Das Abgabedatum der Abschlussarbeit\n2. Das Kolloquium/die Verteidigung\n3. Die Datum der Noteneintragung";

export function NewQuestionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frage</FormLabel>
              <FormControl>
                <Input
                  id="question"
                  className="text-xs"
                  placeholder="Welches Datum gilt als Bachelorarbeitsdatum?"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Dies ist dein Titel deiner Frage.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Beschreibung {"&"} Kontext</FormLabel>
              <FormControl>
                <Textarea
                  id="description"
                  className="min-h-24"
                  placeholder={DescriptionPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Hier eine weiterführenden Beschreibung deiner Frage. Wenn hier
                irgendwas Identifizierendes drin vorkommt ist die Frage weg vom
                Fenster! 👿
                <br />
                (Markdown ist unterstützt - Ja ich kenne SQL- &amp;
                XSS-Injections &amp; XSRF)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button id="submit" type="submit" className="w-full cursor-pointer">
          Stellen
        </Button>
      </form>
    </Form>
  );
}
