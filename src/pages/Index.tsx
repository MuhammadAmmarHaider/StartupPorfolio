import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Brain, Shield, Cloud, GitBranch, Users, Lightbulb, Palette, Rocket, TestTube, LifeBuoy, DollarSign, UserPlus, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [selectedService, setSelectedService] = useState("Custom Software Development");
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge AI and ML technologies.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
    },
    {
      icon: GitBranch,
      title: "DevOps",
      description: "Streamlined development workflows and CI/CD pipelines.",
    },
  ];

  const clients = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Tesla", "Netflix", "Spotify"
  ];

  const serviceDetails = {
    "Custom Software Development": {
      title: "Custom Software Development",
      description: "We build software solutions designed specifically to fit your unique business needs.",
      technologies: ['Java', 'Django', 'React Native', 'Vue.js', 'React', 'Flutter', 'Python', 'AWS', 'Azure']
    },
    "App Modernization": {
      title: "App Modernization",
      description: "We update and improve older applications to make them faster, safer, and compatible with today's technology.",
      technologies: ['Flutter', 'Kubernetes', 'AWS', 'Azure', 'React Native', 'React', 'Java', 'Python', 'Django']
    },
    "DevOps": {
      title: "DevOps",
      description: "We set up automated development and deployment pipelines to speed up your software delivery.",
      technologies: ['Docker', 'Terraform', 'Kubernetes', 'Gitlab', 'Circle CI', 'Git', 'AWS', 'Azure', 'Ansible', 'Jenkins']
    },
    "MVP Development": {
      title: "MVP Development",
      description: "We help startups launch their first product quickly and effectively to test ideas in the market.",
      technologies: ['Swift', 'Flutter', 'React', 'Vue JS', 'Java', 'Kotlin', 'React Native']
    },
    "Data & Advanced Analytics": {
      title: "Data & Advanced Analytics",
      description: "We turn your data into valuable insights that support smart business decisions.",
      technologies: ['Airflow', 'Data Bricks', 'Power BI', 'Data Lake', 'Data Warehouse', 'AWS Bedrock', 'LLMs', 'PyTorch', 'Superset']
    },
    "Robotic Process Automation": {
      title: "Robotic Process Automation",
      description: "We automate routine tasks to save time and increase productivity.",
      technologies: ['Salesforce', 'REST', 'SOAP', 'ABBYY FlexiCapture', 'AWS Textract', 'Azure Cognitive']
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Transform Your Business
              <br />
              with Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We deliver innovative technology solutions that drive growth and empower businesses to thrive in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/projects">
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-muted-foreground">
              Join hundreds of companies that trust us with their technology
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-muted transition-colors cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                  {client}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Software Consulting & Development Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer a range of expert services to help your business grow and stay ahead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Custom Software Development", icon: Code2 },
                { title: "App Modernization", icon: Smartphone },
                { title: "DevOps", icon: GitBranch },
                { title: "MVP Development", icon: Rocket },
                { title: "Data & Advanced Analytics", icon: Brain },
                { title: "Robotic Process Automation", icon: Cloud },
              ].map((service, index) => (
                <Card
                  key={index}
                  className={`p-6 cursor-pointer hover:-translate-y-1 transition-all duration-300 animate-scale-in ${
                    selectedService === service.title 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card hover:shadow-soft'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedService(service.title)}
                >
                  <service.icon className={`h-8 w-8 mb-3 ${
                    selectedService === service.title ? 'text-accent' : 'text-accent'
                  }`} />
                  <h3 className="font-semibold">{service.title}</h3>
                </Card>
              ))}
            </div>

            {/* Featured Service Detail */}
            <Card className="p-8 bg-gradient-card sticky top-24">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {serviceDetails[selectedService].title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {serviceDetails[selectedService].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {serviceDetails[selectedService].technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button className="w-full sm:w-auto">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 bg-gradient-dark text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-4">
                How <span className="text-accent">we work</span>
              </h2>
              <p className="text-white/80">
                Take a moment to get familiar with our approach.
              </p>
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              {[
                { number: "01", title: "Ideate", description: "We start by understanding your business goals and exploring the best AI-driven ideas to solve your challenges." },
                { number: "02", title: "Design", description: "We design user-friendly workflows and smart system architecture tailored to your needs." },
                { number: "03", title: "Develop", description: "Our team builds the solution using the right technologies, focusing on quality and speed." },
                { number: "04", title: "Test", description: "We test everything thoroughly to ensure it works well, is secure, and performs reliably." },
                { number: "05", title: "Launch", description: "Once ready, we deploy the solution and make sure it integrates smoothly into your existing systems." },
                { number: "06", title: "Support", description: "After launch, we provide ongoing support, monitor performance, and improve the solution as your needs evolve." },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-white/20">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-accent mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Engagement Models</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              We offer versatile engagement models designed to align with your specific business needs, technical requirements, and budget considerations. Whether you're launching a new product, scaling operations, or seeking long-term development support, our models provide the flexibility and expertise you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: DollarSign,
                title: "Fixed Cost",
                description: "Ideal for clearly defined projects with established requirements and timelines, our fixed-cost model ensures predictable budgeting and transparent delivery.",
              },
              {
                icon: UserPlus,
                title: "Staff/ Resource Augmentation",
                description: "Quickly scale your internal teams by integrating our experienced professionals into your existing workflow. This model allows for agile expansion without the long-term commitment of hiring.",
              },
              {
                icon: Rocket,
                title: "Startup",
                description: "We understand the fast-paced and resource-conscious nature of startups. This engagement offers flexible, scalable solutions tailored to early-stage companies, enabling rapid development and market entry.",
              },
              {
                icon: Briefcase,
                title: "Dedicated Development Team",
                description: "Establish a long-term strategic partnership with a dedicated team that works exclusively on your projects. This model fosters deep domain understanding, continuous collaboration, and sustained innovation.",
              },
            ].map((model, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <model.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-primary">{model.title}</h3>
                <p className="text-muted-foreground text-sm">{model.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg">
              Explore Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-dark text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-accent">TechVision</span>?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We move at startup speed—with enterprise discipline.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                icon: Brain,
                title: "AI-Native Approach",
                description: "We integrate AI at the core of every project with transparent roadmaps and measurable results. This ensures your solutions deliver real, scalable business impact.",
              },
              {
                icon: Code2,
                title: "Full-Stack Expertise",
                description: "Our team masters every layer of technology, from frontend interfaces to backend systems and cloud infrastructure. This allows us to build robust, seamless, and secure end-to-end solutions.",
              },
              {
                icon: Brain,
                title: "Applied Machine Learning",
                description: "We develop practical ML models tailored to solve your unique challenges, turning data into actionable insights. From predictive analytics to NLP, we make AI work for your business.",
              },
              {
                icon: Cloud,
                title: "Cloud-Ready & Scalable",
                description: "Our cloud-native designs enable your systems to scale effortlessly on platforms like AWS, Azure, and GCP. This ensures optimal performance, security, and cost-efficiency as you grow.",
              },
              {
                icon: Shield,
                title: "Transparent & Strategic",
                description: "We foster trust through open communication and regular updates, aligning our work closely with your goals. Our strategic approach keeps your projects on track and maximizes value.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-primary/50 border-accent/20 hover:bg-primary/60 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-accent">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="group">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
