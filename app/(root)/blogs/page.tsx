import { BlogHero } from "./_components/blog-hero";
import { CategoryList } from "./_components/category-list";
import { FeaturedPosts } from "./_components/featured-posts";
import { NewsletterSection } from "./_components/newsletter-section";
import { PopularTags } from "./_components/popular-tags";
import { RecentPosts } from "./_components/recent-post";


const BlogsPage = () => {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <CategoryList />
        <FeaturedPosts />
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentPosts />
          </div>
          <div className="space-y-8">
            <NewsletterSection />
            <PopularTags />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogsPage;
