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
  const faqSchema = generateFAQSchema(content.faq.items);

  return (
    <>
      <HomeTemplate />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
