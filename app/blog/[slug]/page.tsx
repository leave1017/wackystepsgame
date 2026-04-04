import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts } from "../blog-data";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-8 mb-4">{line.slice(3)}</h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold mt-6 mb-3">{line.slice(4)}</h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-bold mb-2">{line.slice(2, -2)}</p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-4 mb-1 list-disc">{parseLine(line.slice(2))}</li>
      );
    } else if (/^\d+\./.test(line)) {
      elements.push(
        <li key={key++} className="ml-4 mb-1 list-decimal">{parseLine(line.replace(/^\d+\.\s/, ""))}</li>
      );
    } else if (line.trim() === "") {
      elements.push(<br key={key++} />);
    } else {
      elements.push(
        <p key={key++} className="mb-4 leading-relaxed text-muted-foreground">{parseLine(line)}</p>
      );
    }
  }
  return elements;
}

function parseLine(text: string): React.ReactNode {
  // Handle [text](url) markdown links
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, href] = match;
      return (
        <Link key={i} href={href} className="text-primary hover:underline font-medium">
          {label}
        </Link>
      );
    }
    return part;
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "url": `${siteConfig.url}/blog/${post.slug}`,
    "author": { "@type": "Organization", "name": siteConfig.name },
    "publisher": { "@type": "Organization", "name": siteConfig.name }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteConfig.url}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `${siteConfig.url}/blog/${post.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex items-center gap-1 flex-wrap">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li className="text-foreground font-medium" aria-current="page">{post.title}</li>
          </ol>
        </nav>

        <article>
          <header className="mb-8">
            <time className="text-sm text-muted-foreground" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground">{post.description}</p>
          </header>

          <div className="prose-neutral max-w-none">
            {renderContent(post.content)}
          </div>

          <footer className="mt-12 pt-8 border-t">
            <p className="text-muted-foreground mb-4">
              Enjoyed this article? Play{" "}
              <Link href="/" className="text-primary font-semibold hover:underline">
                Wacky Steps
              </Link>{" "}
              free online — no download needed!
            </p>
            <Link href="/blog" className="text-primary hover:underline">← Back to Blog</Link>
          </footer>
        </article>
      </div>

      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
