import { Apple, Eye, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Arshad from "../assets/images/Arshad-pic1.jpg";
import Khurram from "../assets/images/K-Shahzad1.jpg";

const About = () => {
  const values = [
    {
      icon: Apple,
      title: "Mission",
      description: "To build practical IT products and services that help organizations move faster, work smarter, and deliver measurable results."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the most treusted and leading technology partner for businesses seeking reliable, scalable, and human-centred digital solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver engineering excellence through clean code, thoughtful design, and measurable outcomes. We believe in delivering quality that exceeds expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as collaborators combining domina insight, technical craft, and rapid feedback loops to deliver real value."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Successful  Clients" },
    { number: "60+", label: "Team Members" },
    { number: "15+", label: "Years Experience" }
  ];

  const team = [
    {
      name: "Arshad Ali",
      role: "CEO & Founder",
      image:Arshad
    },
    {
      name: "Ahmad Hassan Shahzad",
      role: "Co-Founder",
    },
    {
      name: "Khurran Shahzad",
      role: "Head of Design",
      Image: Khurram
    },
    {
      name: "Ahmad Mukhtar",
      role: "Lead Developer",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Paxelus Tech
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of passionate technologists dedicated to building peaceful, intelligent and connected digital solutions for a global future
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Story */}
          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-card border-border/50 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                 Founded in 2025, TechVision was built on over a decade of experience in academia, consulting, and technology advisory roles. Long before our official launch, our team had been shaping ideas, mentoring innovators, and delivering technology-driven solutions that empowered individuals and organizations alike.
                </p>
                <p>
                What began as a shared passion for innovation has evolved into a dedicated company focused on providing high-quality IT products, projects, and services. We bring together the analytical mindset of educators, the strategic insight of consultants, and the technical expertise of industry professionals.
                </p>
                <p>
                 At TechVision, we believe that technology is more than just a tool; it’s an enabler of growth, creativity, and transformation. Our journey is driven by a commitment to excellence, collaboration, and integrity as we help our clients navigate the ever-evolving digital landscape.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
