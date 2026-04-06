import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";

interface HowToPlayProps {
  content?: typeof defaultContent;
}

/**
 * Parses a paragraph string.
 * If the paragraph starts with **Header:** it returns { heading, body }.
 * Otherwise returns { heading: null, body }.
 */
function parseParagraph(text: string): { heading: string | null; body: string } {
  const match = text.match(/^\*\*([^*]+)\*\*:?\s*([\s\S]*)/);
  if (match) {
    return { heading: match[1].trim(), body: match[2].trim() };
  }
  return { heading: null, body: text };
}

export function HowToPlay({ content = defaultContent }: HowToPlayProps) {
  const paragraphs = content.howToPlay.description.split('\n\n').filter(Boolean);

  return (
    <section
      id="how-to-play"
      className={cn(
        "mb-24",
        theme.howToPlay.spacing.section,
        theme.layout.section.scrollMargin
      )}
    >
      <h2 className={cn(
        "text-3xl font-bold text-center",
        theme.howToPlay.spacing.title,
        theme.howToPlay.colors.title
      )}>
        {content.howToPlay.title}
      </h2>

      <div className={theme.howToPlay.layout.container}>
        {/* Text content */}
        <div className={theme.howToPlay.layout.content}>
          {paragraphs.map((paragraph, index) => {
            const { heading, body } = parseParagraph(paragraph);
            if (heading) {
              return (
                <div key={index} className="mb-5">
                  <h3 className="text-base font-bold uppercase tracking-wide text-yellow-500 mb-1.5">
                    {heading}
                  </h3>
                  {body && (
                    <p className={cn(theme.howToPlay.colors.description)}>
                      {body}
                    </p>
                  )}
                </div>
              );
            }
            return (
              <p key={index} className={cn(theme.howToPlay.colors.description, "mb-4 last:mb-0")}>
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Image */}
        <div className={theme.howToPlay.layout.imageContainer}>
          <img
            src={content.howToPlay.image}
            alt={content.howToPlay.imageAlt}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
