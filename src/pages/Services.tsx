import { Code2, Smartphone, Brain, Shield, Cloud, GitBranch, Database, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack web development using React, Vue, Angular, and modern frameworks.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Custom CMS Development"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native & Flutter",
        "Native iOS (Swift)",
        "Native Android (Kotlin)",
        "App Store Optimization"
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      features: [
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Custom AI Models"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital infrastructure.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "24/7 Monitoring"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      features: [
        "AWS & Azure",
        "Cloud Migration",
        "Serverless Architecture",
        "Cost Optimization"
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps",
      description: "Streamlined development workflows and continuous integration.",
      features: [
        "CI/CD Pipelines",
        "Docker & Kubernetes",
        "Infrastructure as Code",
        "Automated Testing"
      ]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights.",
      features: [
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Custom Dashboards"
      ]
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Connect and manage your IoT devices at scale.",
      features: [
        "Device Management",
        "Real-time Monitoring",
        "Edge Computing",
        "Smart Home Integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase text-primary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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

export default Services;
