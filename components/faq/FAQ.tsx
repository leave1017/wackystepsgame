import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";

interface FAQProps {
  content?: typeof defaultContent;
}

export function FAQ({ content = defaultContent }: FAQProps) {
  return (
    <section
      id="faq"
      className={cn(
        theme.faq.layout.section,
        theme.faq.spacing.section,
        theme.layout.section.scrollMargin
      )}
    >
      <h2 className={cn(theme.faq.typography.title, theme.faq.spacing.title)}>
        {content.faq.title}
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {content.faq.items.map((item) => (
          <div
            key={item.value}
            className="border rounded-lg p-6 bg-card"
          >
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              {item.question}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
