import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      client: "Amazon",
      category: "Web Development",
      description: "Complete redesign and optimization of a major e-commerce platform, resulting in 40% increase in conversion rates.",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      client: "Google",
      category: "AI & Machine Learning",
      description: "Custom analytics dashboard with predictive modeling and real-time data visualization for enterprise clients.",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Mobile Banking Application",
      client: "Meta",
      category: "Mobile Development",
      description: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions.",
      tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Infrastructure Migration",
      client: "Microsoft",
      category: "Cloud Solutions",
      description: "Successfully migrated legacy systems to cloud infrastructure, reducing costs by 50% and improving performance.",
      tech: ["Azure", "Kubernetes", "Docker", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Cybersecurity Platform",
      client: "Tesla",
      category: "Cybersecurity",
      description: "Enterprise-grade security platform with threat detection, real-time monitoring, and automated responses.",
      tech: ["Python", "Machine Learning", "Elasticsearch", "Kafka"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    },
    {
      title: "DevOps Automation Suite",
      client: "Netflix",
      category: "DevOps",
      description: "Complete CI/CD pipeline automation reducing deployment time from hours to minutes.",
      tech: ["Jenkins", "Docker", "Kubernetes", "AWS"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop"
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
                    <Button size="sm" variant="outline" className="flex-1">
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
