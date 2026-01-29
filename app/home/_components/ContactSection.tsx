"use client";

import { Button } from "@/app/_shared/ui/Button";
import Section from "./Section";
import { Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact">
      <div className="grid gap-16 pb-10 lg:grid-cols-2">
        <div className="grid content-start gap-6">
          <h3 className="text-2xl font-semibold text-primary">
            Let&#39;s work together
          </h3>
          <p className="text-lg leading-relaxed text-gray-300">
            Have a project in mind or just want to say hello? I&#39;m always
            open to discussing new opportunities, creative ideas, or ways I can
            help bring your vision to life.
          </p>

          <div className="mt-4 grid gap-6">
            <a
              href="mailto:neven@zdelar.com"
              className="group flex items-center gap-4 text-gray-400 transition hover:text-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition group-hover:bg-primary/20">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-white">neven@zdelar.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-white">Croatia, EU</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-700/50 bg-muted p-8">
          {submitted ? (
            <div className="grid h-full place-items-center gap-4 text-center">
              <Send className="text-primary" size={40} />
              <h4 className="text-2xl font-semibold text-white">
                Message sent!
              </h4>
              <p className="text-gray-400">
                Thanks for reaching out. I&#39;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-md border border-gray-700 bg-background px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="rounded-md border border-gray-700 bg-background px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-md border border-gray-700 bg-background px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary focus:outline-none"
                />
              </div>
              <Button type="submit" size="lg">
                Send message
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
