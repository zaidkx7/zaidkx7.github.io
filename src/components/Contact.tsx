import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { z } from "zod";
import { useTheme } from "./ThemeProvider";
import { useForm, ValidationError } from '@formspree/react';

import UpworkImg from '../assets/upwork.svg';
import UpworkImgBlack from '../assets/upwork_black.svg';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xyzwaako");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { theme } = useTheme();

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      contactSchema.shape[name].parse(value);
      return null;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors[0].message;
      }
      return "Invalid input";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const fieldError = validateField(name as keyof ContactFormData, value);
    setErrors(prev => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors: Partial<Record<keyof ContactFormData, string>> = {};
    let hasErrors = false;

    Object.entries(formData).forEach(([key, value]) => {
      const fieldName = key as keyof ContactFormData;
      const fieldError = validateField(fieldName, value);
      if (fieldError) {
        formErrors[fieldName] = fieldError;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(formErrors);
      return;
    }

    await handleSubmit(e as any);

    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 reveal">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-6 reveal reveal-delay-1"></div>
          <p className="max-w-[700px] text-muted-foreground reveal reveal-delay-2">
            Have a project in mind or want to explore how we can collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8 reveal">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently available for freelance work and full-time opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>zaidkx37@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>+92 332 9975 307</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Connect with Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zaidkx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/80 transition-colors p-3 rounded-full"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/zaidkx37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/80 transition-colors p-3 rounded-full"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:zaidkx37@gmail.com"
                  className="bg-accent hover:bg-accent/80 transition-colors p-3 rounded-full"
                  aria-label="Send Email"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://wa.me/923329975307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/80 transition-colors p-3 rounded-full"
                  aria-label="WhatsApp Profile"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01aaf487e29d60a885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/80 transition-colors p-3 rounded-full"
                  aria-label="Upwork Profile"
                >
                  <img
                    src={theme === "dark" ? UpworkImg : UpworkImgBlack}
                    alt="Upwork"
                    className="h-6 w-6"
                  />
                  <span className="sr-only">Upwork</span>
                </a>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <Button type="submit" className="w-full" disabled={state.submitting}>
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
