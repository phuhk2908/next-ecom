import type { Metadata } from "next";
import { ContactForm } from "./_components/contact-form";
import { ContactInfo } from "./_components/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for support or inquiries",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">Contact Us</h1>
        <p className="mb-8 text-muted-foreground">
          Have questions or need assistance? We&apos;re here to help.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
