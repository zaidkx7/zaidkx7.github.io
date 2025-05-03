
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent/30 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold">
              Muhammad<span className="text-primary">Zaid</span>
            </a>
            <p className="text-muted-foreground text-sm mt-1">
              Software Engineer & Backend Developer
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/zaidkx7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/zaidkx37"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:zaidkx37@gmail.com"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="https://wa.me/923329975307"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01aaf487e29d60a885"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Upwork"
            >
              <img src="src/assets/upwork.svg" alt="Upwork" className="h-5 w-5 fill-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Muhammad Zaid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
