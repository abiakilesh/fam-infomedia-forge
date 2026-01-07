import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ExploreCourses from "@/components/home/ExploreCourses";
import ScrollingMarquee from "@/components/home/ScrollingMarquee";
import ClientsPreview from "@/components/home/ClientsPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ExploreCourses />
      <ScrollingMarquee />
      <ClientsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
