import Link from "next/link";
import { blogPosts } from "./blog-data";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: `Blog - ${siteConfig.name}`,
  description: "Tips, guides, and game recommendations from the Wacky Steps team. Learn how to walk further, unlock characters, and discover the best free browser games.",
  alternates: {
    canonical: `${siteConfig.url}/blog/`,
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li className="text-foreground font-medium" aria-current="page">Blog</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-10 text-lg">
          Tips, guides, and game recommendations from the world of <Link href="/" className="text-primary hover:underline">Wacky Steps</Link> and free browser gaming.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <time className="text-sm text-muted-foreground" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <h2 className="text-2xl font-bold mt-2 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary font-medium hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
