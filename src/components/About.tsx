
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 reveal">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-6 reveal reveal-delay-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 reveal">
            <p className="text-lg text-foreground/90">
              I'm a passionate Software Engineer with 2+ years of hands-on experience specializing in backend development, automation, and web scraping using Python. I thrive on solving complex challenges through clean, scalable code and have delivered impactful solutions across diverse domains.
            </p>
            <p className="text-lg text-foreground/90">
              My core expertise lies in Python and its frameworks, including Django, Flask, PyQt5, Selenium, BeautifulSoup, and Requests. Whether it's building RESTful APIs, automating workflows, or scraping data at scale, I craft robust and secure backend systems tailored to real-world business needs.
            </p>
            <p className="text-lg text-foreground/90">
              Beyond Python, I also work proficiently with JavaScript (React, Node.js) to build dynamic frontend interfaces and API-driven applications. I've also developed full-stack projects integrating PHP, MySQL, SQL, HTML5, and CSS3, demonstrating versatility across the stack.
            </p>
          </div>

          <div className="space-y-4 reveal reveal-delay-1">
            <h3 className="text-xl font-semibold">🛠️ What I Bring to the Table:</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Clean, well-documented, and maintainable code
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Real-world automation & scraping tools
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Scalable APIs and backend systems
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Full-stack web applications
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Security-aware development approach
              </li>
            </ul>
            <p className="text-lg mt-4">
              📈 Whether you're a startup needing fast backend development, an enterprise seeking automation solutions, or a business looking to optimize workflows—I deliver results that make an impact.
            </p>
            
            <div className="flex gap-4 mt-6">
              <Button asChild variant="outline">
                <a href="#skills">See My Skills</a>
              </Button>
              <Button asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
