import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Bot, 
  Award,
  MessageSquare,
  Globe
} from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Vibrant Community",
    description: "Connect with 25k+ passionate Web3 enthusiasts, traders, and developers from around the globe.",
    color: "text-neon-green"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Market Insights",
    description: "Get real-time market analysis, trading signals, and alpha calls from our expert community members.",
    color: "text-neon-blue"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI-Powered Tools",
    description: "Access cutting-edge AI tools for portfolio management, risk analysis, and automated trading strategies.",
    color: "text-neon-purple"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Verified",
    description: "Multi-layered security with KYC verification and anti-scam measures to protect our community.",
    color: "text-neon-green"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock community support with dedicated moderators and help channels.",
    color: "text-neon-blue"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Exclusive Benefits",
    description: "Access premium features, private channels, early project access, and community rewards.",
    color: "text-neon-purple"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Instant notifications, rapid-fire discussions, and real-time market updates that never miss a beat.",
    color: "text-neon-green"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Network",
    description: "Connect with projects, influencers, and opportunities across the entire Web3 ecosystem.",
    color: "text-neon-blue"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Why Choose Skelionz?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the most advanced Web3 community platform with features designed 
            for serious traders, developers, and crypto enthusiasts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-slate-border hover:shadow-card hover:scale-105 transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-2">
                <div className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the future of Web3 communities?
          </p>
          <div className="inline-flex items-center gap-2 text-neon-green">
            <Zap className="w-5 h-5" />
            <span className="text-lg font-semibold">Join 25,000+ active members today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;