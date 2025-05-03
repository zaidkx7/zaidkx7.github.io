
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Data Scraper",
      description:
        "A robust web scraping system that extracts product data, prices, and reviews from multiple e-commerce platforms. Built with Python, Selenium, and BeautifulSoup.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
      tech: ["Python", "Selenium", "BeautifulSoup", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Automated Workflow System",
      description:
        "A customizable workflow automation tool designed for marketing teams to schedule and manage social media posts across platforms.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
      tech: ["Python", "Django", "React", "Redis", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "REST API for Inventory Management",
      description:
        "A secure and scalable RESTful API for inventory management with authentication, rate limiting, and detailed documentation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      tech: ["Python", "Flask", "JWT", "MySQL", "Swagger"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for visualizing business metrics and KPIs in real-time with filtering capabilities and export options.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
      tech: ["React", "Node.js", "D3.js", "WebSockets", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Content Management System",
      description:
        "A customizable CMS with role-based access control, media management, and a clean API for frontend integration.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800",
      tech: ["Python", "Django", "PostgreSQL", "AWS S3", "React"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Learning Management System",
      description:
        "A customizable LMS with role-based access control, media management, and a clean API for frontend integration.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800",
      tech: ["Python", "Django", "SQLite", "HTML5", "CSS3", "Bootstrap"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 reveal">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-6 reveal reveal-delay-1"></div>
          <p className="max-w-[700px] text-muted-foreground reveal reveal-delay-2">
            A collection of my recent work showcasing my skills in Python, automation, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border hover:shadow-lg transition-all reveal"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.codeUrl}>View Code</a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.demoUrl}>
                    Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
