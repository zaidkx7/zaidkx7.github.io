import { Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ExperienceItem {
  company: string;
  description: string;
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Lobstr.io",
      description: "Developed and enhanced web features to improve user experience and platform performance."
    },
    {
      company: "UrsaCode",
      description: "Collaborated on creating robust web solutions."
    },
    {
      company: "Freelancing | Upwork",
      description: "Delivered customized scraping and automation services to a diverse range of clients globally."
    }
  ];

  return (
    <section className="py-16 bg-[#121621] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3 bg-clip-text text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-[700px] text-[#8E9196]">
            My journey through various roles and projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-[#D6BCFA]/30"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row items-start">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-[#1A1F2C] border-2 border-primary z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-[#1A1F2C]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#1A1F2C]/80 shadow-xl relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#7E69AB]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
                    
                    {/* Company name with icon */}
                    <div className="flex items-center gap-2 mb-3 justify-start md:justify-start">
                      <div className={`flex rounded-full items-center justify-center p-2 bg-primary/20`}>
                        <Briefcase className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#8E9196] mt-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}