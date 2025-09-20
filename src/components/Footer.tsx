import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gradient-to-t from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <Card className="card-gradient border-border/30">
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Contact info */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Contact
                </div>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:johannes@whyaie.eu"
                    className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="font-medium">johannes@whyaie.eu</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+358 41 540 3608</span>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-sm text-muted-foreground">
                © {currentYear} AI-Ennakointi Oy
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;