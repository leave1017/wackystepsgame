import { HomeTemplate } from "@/components/home/HomeTemplate";
import { generateFAQSchema, organizationSchema, websiteSchema } from "@/app/schema";
import { content } from "@/config/content";
import { siteConfig } from "@/config/site";

export const metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Page() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { ...organizationSchema, "@context": undefined },
      { ...websiteSchema, "@context": undefined },
      { ...generateFAQSchema(content.faq.items), "@context": undefined },
    ].map(({ "@context": _, ...rest }) => rest),
  };

  return (
    <>
      <HomeTemplate />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
