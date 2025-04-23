import type { Metadata } from "next"
import { ContactForm } from "./_components/contact-form"
import { ContactInfo } from "./_components/contact-info"


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for support or inquiries",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8">Have questions or need assistance? We&apos;re here to help.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
