import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-xl font-semibold">Contact Information</h2>
        <p className="text-sm text-muted-foreground">
          You can reach us through any of the following methods.
        </p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardContent className="flex items-start gap-4 p-4">
            <div className="mt-1 rounded-full bg-primary/10 p-2">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                123 Innovation Street
                <br />
                Tech District
                <br />
                San Francisco, CA 94107
                <br />
                United States
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-start gap-4 p-4">
            <div className="mt-1 rounded-full bg-primary/10 p-2">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                +1 (555) 123-4567
                <br />
                Monday to Friday, 9am to 6pm PST
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-start gap-4 p-4">
            <div className="mt-1 rounded-full bg-primary/10 p-2">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                support@insightblog.com
                <br />
                For general inquiries: info@insightblog.com
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-start gap-4 p-4">
            <div className="mt-1 rounded-full bg-primary/10 p-2">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Business Hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Monday to Friday: 9am - 6pm PST
                <br />
                Saturday: 10am - 4pm PST
                <br />
                Sunday: Closed
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 font-medium">Find Us</h3>
        <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
          <div className="text-center">
            <p className="mb-2 text-muted-foreground">Interactive map</p>
            <a href="#" className="inline-flex items-center text-primary">
              Open in Google Maps
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
