import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, Play } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Video placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/5 via-muted/10 to-muted/5">
        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl shadow-card flex items-center justify-center group cursor-pointer hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col items-center gap-4 text-muted-foreground group-hover:text-foreground transition-colors">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Video placeholder</p>
              <p className="text-sm opacity-70">Replace with your demo video</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative container mx-auto px-6 pt-20 pb-16">
        {/* Theme toggle */}
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium bg-card/90 backdrop-blur-sm border-border/50 shadow-soft">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-soft" />
              European-built, decision-grade risk estimates
            </Badge>
          </div>

          {/* Main heading */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-display sm:text-display font-bold tracking-tight mb-6">
              Why{" "}
              <span className="text-gradient font-extrabold">aie</span>
              <span className="text-primary">?</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl leading-relaxed text-muted-foreground mb-10 max-w-3xl">
              <strong className="text-primary font-semibold">aie</strong> gives procurement teams transparent, auditable probabilities for supplier disruptions, so you can compare options, justify decisions, and move faster under uncertainty.
            </p>
          </div>

          {/* Action buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 w-full sm:w-auto" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-button shadow-button hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-8 py-6 text-lg"
              asChild
            >
              <a href="/aiewhitepaper.pdf" download="aie-whitepaper.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download whitepaper
              </a>
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="./demo/repo/index.html">
                <Play className="mr-2 h-5 w-5" />
                Access Intel Portal
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border bg-card/90 backdrop-blur-sm hover:bg-card hover:scale-105 px-8 py-6 text-lg transition-all duration-300"
              asChild
            >
              <a href="#demo">
                <Calendar className="mr-2 h-5 w-5" />
                Book a demo
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;