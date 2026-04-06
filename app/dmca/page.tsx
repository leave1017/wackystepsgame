import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `DMCA Policy – ${siteConfig.name}`,
  description: `${siteConfig.name} DMCA takedown policy. If you believe your copyrighted content is hosted on our site, please contact us.`,
};

const DMCAPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-4xl text-center font-bold mb-2">DMCA Policy</h1>
          <p className="text-center text-muted-foreground mb-10 text-lg">
            Digital Millennium Copyright Act Notice
          </p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Overview</h2>
              <p>
                {siteConfig.name} ("{siteConfig.domain}") respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly to claims of copyright infringement that are properly submitted to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Notice of Alleged Infringement</h2>
              <p>
                If you believe that content available on or through {siteConfig.name} infringes one or more of your copyrights, please notify us by submitting a written DMCA notice to the address below. Your notice must include:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-foreground/80">
                <li>
                  A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has allegedly been infringed.
                </li>
                <li>
                  Identification of the copyrighted work you claim has been infringed, or, if multiple works are covered by a single notification, a representative list of such works.
                </li>
                <li>
                  Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material on our website (e.g., the URL).
                </li>
                <li>
                  Your name, mailing address, telephone number, and email address.
                </li>
                <li>
                  A statement that you have a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
                </li>
                <li>
                  A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of the copyright that is allegedly infringed.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How to Submit a DMCA Notice</h2>
              <p>
                Please send your DMCA notice via email to:
              </p>
              <p className="mt-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline font-medium"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-3">
                Use the subject line: <strong>DMCA Takedown Notice – {siteConfig.domain}</strong>
              </p>
              <p className="mt-3">
                We will review your claim and respond within <strong>3–5 business days</strong>. If your claim is valid, we will remove the infringing content promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Counter-Notice</h2>
              <p>
                If you believe that your content was removed (or access to it was disabled) by mistake or misidentification, you may submit a counter-notice to our email address above. Your counter-notice must include:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-foreground/80">
                <li>Your physical or electronic signature.</li>
                <li>Identification of the material that was removed and the location where it appeared before removal.</li>
                <li>A statement under penalty of perjury that you have a good-faith belief the material was removed by mistake.</li>
                <li>Your name, address, and telephone number.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Repeat Infringers</h2>
              <p>
                It is our policy to terminate, in appropriate circumstances, the accounts of users who are repeat copyright infringers. We reserve the right to take down any content at our sole discretion, with or without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
              <p>
                {siteConfig.name} hosts browser-based games and does not claim ownership of third-party games embedded or linked on this site. We act in good faith to ensure all content complies with applicable copyright laws. If you are a game developer and would like your game removed or credited differently, please contact us.
              </p>
            </section>

            <section className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-sm text-foreground/70">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                For all DMCA inquiries: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DMCAPage;
