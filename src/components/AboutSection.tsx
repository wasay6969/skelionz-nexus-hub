import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Twitter, 
  Github, 
  Linkedin,
  Target,
  Rocket,
  Shield
} from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former Goldman Sachs quantitative trader with 10+ years in traditional finance and 5 years in DeFi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: {
      twitter: "@alexchen_web3",
      linkedin: "/in/alexchen",
      github: "/alexchen"
    }
  },
  {
    name: "Sarah Kim",
    role: "Head of Community",
    bio: "Community building expert who scaled Discord communities from 0 to 100k+ members across multiple Web3 projects.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face",
    social: {
      twitter: "@sarahkim_comm",
      linkedin: "/in/sarahkim",
      github: "/sarahkim"
    }
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    bio: "Full-stack blockchain developer with expertise in Ethereum, Solana, and Layer 2 solutions. Built 15+ DeFi protocols.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    social: {
      twitter: "@marcus_builds",
      linkedin: "/in/marcusrod",
      github: "/marcusrodriguez"
    }
  },
  {
    name: "Emma Watson",
    role: "Head of Strategy",
    bio: "Former venture capital analyst specializing in crypto investments. Advisor to 20+ Web3 startups with $500M+ raised.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    social: {
      twitter: "@emma_strategy",
      linkedin: "/in/emmawatson",
      github: "/emmawatson"
    }
  }
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Mission-Driven",  
    description: "Democratizing access to Web3 opportunities and education for everyone, regardless of background or location."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Innovation First",
    description: "Constantly pushing boundaries with cutting-edge tools, features, and community experiences."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trust & Security",
    description: "Building a safe space where members can learn, trade, and collaborate without fear of scams or bad actors."
  }
];

const AboutSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Skelionz</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2022, Skelionz has grown from a small Discord server to the most 
            influential Web3 community, connecting thousands of traders, developers, and enthusiasts worldwide.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-card/30 backdrop-blur-sm border-slate-border hover:shadow-glow-primary transition-all duration-300 text-center group"
              >
                <CardHeader>
                  <div className="text-neon-green mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="bg-card/20 backdrop-blur-sm border-slate-border hover:shadow-card hover:scale-105 transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-green/30 group-hover:border-neon-green transition-colors duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-neon-blue font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <Button 
                      variant="web3-ghost" 
                      size="icon" 
                      className="w-8 h-8"
                      asChild
                    >
                      <a 
                        href={`https://twitter.com/${member.social.twitter.slice(1)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="web3-ghost" 
                      size="icon" 
                      className="w-8 h-8"
                      asChild
                    >
                      <a 
                        href={`https://linkedin.com${member.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="web3-ghost" 
                      size="icon" 
                      className="w-8 h-8"
                      asChild
                    >
                      <a 
                        href={`https://github.com${member.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Want to learn more about our mission and roadmap?
            </p>
            <Button variant="web3-accent" size="lg" className="hover:scale-105 transition-transform">
              Read Our Whitepaper
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;