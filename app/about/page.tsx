import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `About Us – ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, the team behind the free online ragdoll walking game. Our mission is to bring fun, accessible browser games to everyone.`,
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-4xl text-center font-bold mb-2">About Us</h1>
          <p className="text-center text-muted-foreground mb-10 text-lg">
            The team behind {siteConfig.name}
          </p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
              <p>
                We are a small, passionate team of game developers and designers dedicated to creating fun, free browser-based games. {siteConfig.name} was born from a simple idea: bring joyful, silly, and accessible gameplay to anyone with a browser — no downloads, no sign-ups, no barriers.
              </p>
              <p className="mt-3">
                Our flagship game, <strong>Wacky Steps</strong>, puts you in control of a ragdoll character navigating sidewalk cracks, traffic, and unpredictable obstacles. It's easy to pick up, impossible to put down.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p>
                At {siteConfig.name}, our mission is simple: make people smile. We believe great games don't need to be complicated — a perfectly timed stumble, a ridiculous ragdoll tumble, or a new personal best distance is enough to make someone's day.
              </p>
              <p className="mt-3">
                We are committed to keeping all our games free to play, forever. No paywalls, no intrusive ads, no hidden costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Games</h2>
              <p>
                In addition to Wacky Steps, we host a growing library of fun browser games — from physics-based action to clicker games and sports titles. Every game on our platform is hand-picked for quality, replayability, and instant fun.
              </p>
              <p className="mt-3">
                Browse our full collection on the{" "}
                <Link href="/games" className="text-primary hover:underline font-medium">
                  Hot Games
                </Link>{" "}
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Get In Touch</h2>
              <p>
                We love hearing from our players. Whether you have a bug report, a game suggestion, or just want to share your high score, reach out to us anytime:
              </p>
              <p className="mt-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline font-medium"
                >
                  {siteConfig.email}
                </a>
              </p>
            </section>

            <section className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="italic text-foreground/80">
                Thank you for playing {siteConfig.name}. Every step counts — keep walking!
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
