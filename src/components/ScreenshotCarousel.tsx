import { useState, useEffect } from "react";

const ScreenshotCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Placeholder screenshots - in real implementation these would be actual screenshots
  const screenshots = [
    "/screenshots/screen-1.png",
    "/screenshots/screen-2.png", 
    "/screenshots/screen-3.png",
    "/screenshots/screen-4.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        setIsLoading(false);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-gradient-card border border-border/30">
            {/* Floating indicators */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              {screenshots.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            {/* Screenshot container */}
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder content since we don't have actual screenshots */}
              <div className="w-full h-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">aie</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-primary">
                      Demo Screenshot {currentIndex + 1}
                    </div>
                    <div className="text-sm text-muted-foreground max-w-md mx-auto">
                      Interactive risk assessment dashboard showing geopolitical probability analysis and supplier-specific disruption forecasts.
                    </div>
                  </div>
                </div>
              </div>

              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-200">
                  <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;