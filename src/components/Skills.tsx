
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Beaker } from "lucide-react";

export function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "PHP", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Django", "Flask", "React.js", "Node.js", "Express", "PyQt5"],
    },
    {
      category: "Data & Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "GraphQL", "JSON"],
    },
    {
      category: "Tools & Technologies",
      items: [
        "Git",
        "Docker",
        "Selenium",
        "BeautifulSoup",
        "Requests",
        "REST API",
      ],
    },
    {
      category: "Expertise",
      items: [
        "Web Scraping",
        "Automation",
        "Backend Development",
        "API Design",
        "Security",
        "Testing",
      ],
    },
  ];

  // Main areas of expertise with icons
  const expertise = [
    {
      title: "Python Development",
      description: "Building robust backend systems and APIs using Django, Flask, and other Python frameworks",
      icon: <Code className="h-10 w-10 text-primary" />
    },
    {
      title: "Web Scraping",
      description: "Creating efficient and reliable data extraction tools with Selenium, BeautifulSoup, and Scrapy",
      icon: <Database className="h-10 w-10 text-primary" />
    },
    {
      title: "Automation",
      description: "Developing custom automation solutions to streamline workflows and eliminate repetitive tasks",
      icon: <Beaker className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section id="skills" className="section bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 reveal">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-6 reveal reveal-delay-1"></div>
          <p className="max-w-[700px] text-muted-foreground reveal reveal-delay-2">
            With a strong foundation in Python and its ecosystem, I specialize in backend development, automation, and web scraping.
          </p>
        </div>

        {/* Main expertise areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow reveal">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal reveal-delay-1">
          {skills.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
