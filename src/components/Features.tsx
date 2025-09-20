import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Target, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Transparent & auditable probabilities",
      description: "Every risk assessment is backed by transparent methodology and auditable data sources."
    },
    {
      icon: Target,
      title: "Supplier and factory specific",
      description: "Detailed risk models tailored to each supplier's unique geographic and operational profile."
    },
    {
      icon: Zap,
      title: "Compare mitigation strategies",
      description: "Evaluate different risk mitigation approaches based on their estimated impact and cost."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Main explanation card */}
        <Card className="card-gradient border-border/50 mb-16 overflow-hidden">
          <CardHeader className="text-center pb-6">
            <Badge variant="outline" className="mx-auto mb-4 w-fit">
              How it works
            </Badge>
            <CardTitle className="text-2xl font-bold text-primary mb-4">
              I like it. What is it?
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-primary font-semibold">aie</strong> builds a transparent probability layer for potential geopolitical and regulatory events and propagates those probabilities through supplier-specific risk models. The output is a decision-grade view of disruption risk and mitigation options for each supplier.
            </p>

            {/* Feature grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CheckCircle className="h-5 w-5 text-primary mb-2" />
                  <p className="font-medium text-foreground leading-relaxed">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Features;