import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Revolutionizing Candidate Screening With AI",
      client: "Talina",
      category: "Artificial Intelligence",
      description: "Talina’s world isyour key to transforming the screening process with cutting-edge artificial intelligence. We’re not just a platform; we’re the catalyst for a new era in recruitment efficiency.",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      image: "https://j0vssbutor.ufs.sh/f/CFjtoIbksUoK3gj9ZkBBjmg1Ed2JXtNZIGUKoH7TCryR04xb",
      link: "https://talina.ai/"
    },
    {
      title: "Superhuman tax and accounting advisor",
      client: "Simpla",
      category: "AI & Machine Learning",
      description: "Tax and Accounting Compliance Solutions which are 43x cheaper and 12x faster than traditional firms.",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      image: "https://j0vssbutor.ufs.sh/f/CFjtoIbksUoKRtQGlPVK4c0gX9Ofltq53BNUk8iyT1AswHe2",
      link: "https://simpla.ai/"
    },
    {
      title: "Advanced Trading Bot Platform",
      client: "QUANTBOTS",
      category: "Advancdd AI & Qunatitatuve Strategies",
      description: "Quantitative trading bot platform allowing trading firms and communities to deploy custom trading scripts.",
      tech: ["Azure", "Kubernetes", "Docker", "Terraform"],
      image: "https://j0vssbutor.ufs.sh/f/CFjtoIbksUoKPC2ZJucrHsFnXkaYEj8NmyM7DoQeOIu5gx0Z",
      link: "https://https://quantbots.org/"
    },
    {
      title: "Comprehensive Conference Management Solutions",
      client: "NUC-LG",
      category: "Web Development & AI",
      description: "All-in-one platform for organizing academic conferences, managing submissions, and engaging participants. It faciictaes confrince organizers at eash step from call for papers to final proceedings..",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      image: "https://j0vssbutor.ufs.sh/f/CFjtoIbksUoKqqHM9hu14OMSET3Ze0fQJAYbUWr6PVsKHl2N",
      link: "https://cc.pak-school.com/"
    },
    {
      title: "Audio Video Forensic Services",
      client: "Government Agencies",
      category: "Digital Forensics and Artificial Intelligence",
      description: "AI-driven forensic software solution, designed to assist law enforcement agencies in analyzing and verifying digital multimedia evidence. The software integrates advanced modules for video, image, and audio forensics, enabling manipulation detection, compression and artefact analysis, camera and sensor fingerprinting, and voice comparison.",
      tech: ["Python", "Tensor Flow", "Deep Learning"],
      image: "https://j0vssbutor.ufs.sh/f/CFjtoIbksUoKVbjuw1VfbGK1tSwN2FrJ7HhTiq9C3QvzjAUe"
    },
    {
      title: "OBE based Learning Managemnet System",
      client: "Education Institutes",
      category: "Web Development & AI",
      description: "OBE-LMS is an easy-to-use LMS designed to support educational institutions worldwide in implementing OBE frameworks effectively. It ensures full compliance with global accreditation standards and accords. Easy management of courses, assessments, and outcome mapping while supporting continuous quality improvement processes.",
      tech: ["JavaScript", "TensorFlow", "React", "PostgreSQL"],
      image: "https://j0vssbutor.ufs.sh/f/CFjtoIbksUoKkaG0mfdFjAbfn2Jar9GWDUCc34wBVsZOTymL"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful projects delivered for industry-leading clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    Client: {project.client}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-muted text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={()=>{window.location.href=project?.link}} size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
