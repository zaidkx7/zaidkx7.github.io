
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TypedText } from "@/components/TypedText";

import ZaidImg from '../assets/zaid.jpeg';

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="w-40 h-40 border-2 border-primary mb-4 animate-fade-in">
            <AvatarImage
              src={ZaidImg}
              alt="Muhammad Zaid"
              loading="eager"
            />
            <AvatarFallback>MZ</AvatarFallback>
          </Avatar>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in">
            <TypedText
              text="Hi, I'm Muhammad Zaid"
              typingSpeed={80}
              deleteSpeed={60}
              delayBeforeDelete={3000}
              delayBeforeRestart={1000}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
            />
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 font-medium mt-2 animate-fade-in">
            Backend Developer • Scraping Expert • Automation Expert
          </p>

          <p className="max-w-[700px] text-muted-foreground mt-4 animate-fade-in">
            Crafting robust backend solutions, sophisticated automation tools, and data scraping applications with Python excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
          <Button 
              asChild 
              size="lg" 
              className="hire-me-button rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] hover:from-[#33C3F0] hover:to-[#7E69AB] shadow-lg shadow-primary/20 transform transition-all duration-300 hover:scale-105 animate-pulse-subtle"
            >
              <a href="#contact">
                Hire Me <ArrowRight className="ml-2 h-5 w-5 animate-bounce-horizontal" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
