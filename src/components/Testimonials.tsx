import { useEffect, useState, useRef } from "react";
import { Star, StarHalf } from "lucide-react";

import DanyalImg from '../assets/danyal.jpeg';
import IrshadImg from '../assets/irshad.jpeg';
import HamzaImg from '../assets/hamza.png';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
  rating: number;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Muhammad developed an automation system that saved our marketing team 20+ hours per week. His attention to detail and clean code made future maintenance a breeze.",
      author: "Muhammad Danyal",
      position: "Cyber Security Specialist",
      image: DanyalImg,
      rating: 5,
    },
    {
      quote:
        "The web scraping solution Muhammad built for our e-commerce analytics platform was exactly what we needed. It's robust, reliable, and has scaled effortlessly with our business growth.",
      author: "Muhammad Irshad",
      position: "DevOps Engineer",
      image: IrshadImg,
      rating: 5,
    },
    {
      quote:
        "Working with Muhammad on our backend API was a great experience. He not only delivered excellent code but also provided valuable insights on security best practices.",
      author: "Hamza Ali",
      position: "Full Stack Developer",
      image: HamzaImg,
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  // Auto-sliding functionality
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 3000); // Slide every 3 seconds
    };

    startAutoSlide();

    // Pause auto-sliding when hovering
    const slideElement = slideRef.current;
    const handleMouseEnter = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    const handleMouseLeave = () => {
      startAutoSlide();
    };

    if (slideElement) {
      slideElement.addEventListener("mouseenter", handleMouseEnter);
      slideElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (slideElement) {
        slideElement.removeEventListener("mouseenter", handleMouseEnter);
        slideElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [testimonials.length]);

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-background text-foreground transition-colors">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3 bg-clip-text text-foreground">
            Clients Testimonials
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground">
            Real feedback from clients who've experienced transformative results
          </p>
        </div>

        <div 
          ref={slideRef} 
          className="overflow-hidden relative max-w-5xl mx-auto"
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-border relative overflow-hidden transition-colors">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#7E69AB]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#9b87f5]/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
                  
                  {/* Quote symbol */}
                  <div className="absolute top-6 right-8 text-6xl text-[#9b87f5]/20 font-serif text-yellow-400">"</div>
                  
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#9b87f5]/30">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col md:mt-2">
                        <h3 className="text-xl font-semibold text-foreground">{testimonial.author}</h3>
                        <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                        <div className="flex mt-2 gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-sm md:text-sm leading-relaxed mb-6 text-foreground/70 font-extralight font-sans">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? "bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] w-8" 
                    : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
