import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Calendar,
  ExternalLink,
  Activity,
  Hash,
  Timer
} from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "25,847",
    label: "Active Members",
    change: "+1,247 this month",
    color: "text-neon-green"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    value: "1.2M+",
    label: "Messages Sent",
    change: "+87k this week",
    color: "text-neon-blue"
  },
  {
    icon: <Hash className="w-6 h-6" />,
    value: "150+",
    label: "Channels",
    change: "Organized topics",
    color: "text-neon-purple"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    value: "98.5%",
    label: "Uptime",
    change: "Always online",
    color: "text-neon-green"
  }
];

const recentActivity = [
  {
    type: "signal",
    content: "🎯 $SOL long signal hit TP2 - +85% profit",
    time: "2 min ago",
    author: "@CryptoWhale",
    engagement: "127 reactions"
  },
  {
    type: "discussion",
    content: "Deep dive: Understanding Ethereum's upcoming upgrades",
    time: "15 min ago",
    author: "@EthDev",
    engagement: "43 replies"
  },
  {
    type: "alert",
    content: "🚨 Major Bitcoin whale movement detected",
    time: "1 hour ago",
    author: "@ChainAnalyst",
    engagement: "89 reactions"
  },
  {
    type: "education",
    content: "Tutorial: Setting up your first DeFi yield strategy",
    time: "2 hours ago",
    author: "@DeFiExpert",
    engagement: "156 saves"
  }
];

const CommunitySection = () => {
  return (
    <section className="py-24 px-4 bg-deep-space relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,255,145,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Community
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Stats</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what makes Skelionz the most active and engaged Web3 community. 
            Real numbers, real impact, real opportunities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-card/30 backdrop-blur-sm border-slate-border hover:shadow-glow-primary transition-all duration-300 group text-center"
            >
              <CardHeader className="pb-2">
                <div className={`${stat.color} mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-foreground">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground font-medium mb-1">
                  {stat.label}
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Recent Activity */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Timer className="w-6 h-6 text-neon-green" />
              Live Activity Feed
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <Card 
                  key={index}
                  className="bg-card/20 backdrop-blur-sm border-slate-border hover:bg-card/40 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                      <span className="text-xs text-neon-blue">{activity.engagement}</span>
                    </div>
                    <p className="text-foreground mb-2">{activity.content}</p>
                    <p className="text-sm text-neon-green">by {activity.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-neon-purple" />
              Community Highlights
            </h3>
            
            <div className="space-y-6">
              <Card className="bg-gradient-accent/10 border-neon-purple/30">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Weekly Trading Contest</h4>
                  <p className="text-muted-foreground mb-4">
                    Compete with fellow traders and win exclusive NFTs and token rewards. 
                    This week's prize pool: $10,000 USDC
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-neon-purple">Ends in 3 days</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground">847 participants</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary/10 border-neon-green/30">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">AMA with Vitalik Buterin</h4>
                  <p className="text-muted-foreground mb-4">
                    Exclusive AMA session with Ethereum's co-founder. Ask questions about 
                    the future of Web3 and blockchain technology.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-neon-green" />
                    <span className="text-neon-green">Tomorrow, 8 PM UTC</span>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center pt-4">
                <Button variant="web3-primary" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join the Conversation
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;