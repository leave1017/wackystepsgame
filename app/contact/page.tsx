import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Contact Us – ${siteConfig.name}`,
  description: `Get in touch with the ${siteConfig.name} team. We welcome feedback, bug reports, business inquiries, and game suggestions.`,
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-4xl text-center font-bold mb-2">Contact Us</h1>
          <p className="text-center text-muted-foreground mb-10 text-lg">
            We'd love to hear from you
          </p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Send Us a Message</h2>
              <p>
                Have a question, found a bug, or want to suggest a new game? Reach out to us directly by email. We read every message and aim to respond within 1–2 business days.
              </p>
              <p className="mt-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {siteConfig.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">What Can You Contact Us About?</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Bug Reports</strong> — If a game isn't loading or something looks broken, let us know.</li>
                <li><strong>Game Suggestions</strong> — Know an awesome browser game we should add? We're always looking for new titles.</li>
                <li><strong>Business Inquiries</strong> — Interested in partnering with us or advertising? Get in touch.</li>
                <li><strong>DMCA / Copyright</strong> — For copyright concerns, please visit our{" "}
                  <Link href="/dmca" className="text-primary hover:underline">DMCA page</Link>.
                </li>
                <li><strong>General Feedback</strong> — We love hearing what you think about {siteConfig.name}!</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">About {siteConfig.name}</h2>
              <p>
                {siteConfig.name} is a free online gaming platform focused on ragdoll physics and casual browser games. Our goal is to make high-quality games instantly accessible to everyone around the world.
              </p>
              <p className="mt-3">
                Learn more on our{" "}
                <Link href="/about" className="text-primary hover:underline font-medium">
                  About Us
                </Link>{" "}
                page.
              </p>
            </section>

            <section className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="italic text-foreground/80">
                We appreciate your support and feedback. Together, let's make {siteConfig.name} the best place to play free browser games!
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
