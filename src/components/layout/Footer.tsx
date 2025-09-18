import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <a 
              href="#home" 
              className="text-2xl font-bold font-heading text-foreground hover:text-primary transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#home");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              NSL<span className="text-gradient">.Lab</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://www.instagram.com/nsl_lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-lg hover:bg-primary/10"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/nsl-lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-lg hover:bg-primary/10"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          
          <div className="border-t border-border/50 pt-6 space-y-2">
            <p className="text-muted-foreground">
              &copy; 2025 NSL Lab. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Innovating Smart Automation Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;