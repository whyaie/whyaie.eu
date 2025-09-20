import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DemoForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgblgvn', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (!response.ok) throw new Error('Request failed');
      
      setIsSubmitted(true);
      setEmail("");
      
      toast({
        title: "Demo request received!",
        description: "We'll get back to you within one business day.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please email johannes@whyaie.eu directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="card-gradient border-primary/20 max-w-lg mx-auto">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            Thanks — your request has been received.
          </h3>
          <p className="text-muted-foreground">
            We'll get back within one business day.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-gradient border-border/50 max-w-lg mx-auto">
      <CardHeader className="text-center">
        <Badge variant="outline" className="mx-auto mb-4 w-fit">
          <Calendar className="mr-2 h-4 w-4" />
          30-minute walkthrough
        </Badge>
        <CardTitle className="text-2xl font-bold text-primary">
          Request a demo
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          Leave your email and we'll reach out to schedule a personalized demonstration.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Work email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="bg-white/80 border-border/50 focus:border-primary/50 transition-colors"
              autoComplete="email"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-button shadow-button hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              <>
                <Calendar className="mr-2 h-5 w-5" />
                Request demo
              </>
            )}
          </Button>

          <div className="text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              <Mail className="h-3 w-3" />
              We'll email you from{" "}
              <strong className="text-primary">johannes@whyaie.eu</strong>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DemoForm;