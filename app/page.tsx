import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrendingSection } from "@/components/trending-section";
import { TopCreators } from "@/components/top-creators";
import { BrowseCategories } from "@/components/browse-categories";
import { HowItWorks } from "@/components/how-it-works";
import { FooterNewsletter } from "@/components/footer-newsletter";
import { Footer } from "@/components/footer";

// App.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <TrendingSection />
      <TopCreators />
      <BrowseCategories />
      <HowItWorks />
      <FooterNewsletter />
      <Footer />
    </main>
  );
}
