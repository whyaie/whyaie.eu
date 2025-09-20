import Hero from "@/components/Hero";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import Features from "@/components/Features";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ScreenshotCarousel />
      <Features />
      
      {/* Demo section */}
      <section id="demo" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <DemoForm />
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
