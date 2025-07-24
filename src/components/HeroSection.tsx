import { Button } from "@/components/ui/button";
import { ExternalLink, Users, MessageCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import skelionzLogo from "@/assets/skelionz-logo.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 33, 33, 0.8), rgba(26, 29, 35, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(166,255,145,0.1)_100%),linear-gradient(0deg,transparent_98%,rgba(166,255,145,0.1)_100%)] bg-[size:100px_100px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={skelionzLogo} 
            alt="Skelionz Logo" 
            className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            SKELIONZ
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-4xl text-foreground mb-4 font-medium">
            The Ultimate Web3 Community
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of Web3 enthusiasts, traders, and builders in the most engaged 
            community across Discord and Twitter. Experience the future of decentralized collaboration.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 text-neon-green">
            <Users className="w-5 h-5" />
            <span className="text-lg font-semibold">25k+ Members</span>
          </div>
          <div className="flex items-center gap-2 text-neon-blue">
            <MessageCircle className="w-5 h-5" />
            <span className="text-lg font-semibold">1M+ Messages</span>
          </div>
          <div className="flex items-center gap-2 text-neon-purple">
            <Star className="w-5 h-5" />
            <span className="text-lg font-semibold">Top Rated</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="web3-primary" 
            size="lg"
            className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform"
            asChild
          >
            <a 
              href="https://discord.gg/skelionz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Join Discord
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          
          <Button 
            variant="web3-outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform"
            asChild
          >
            <a 
              href="https://twitter.com/skelionz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Follow on X
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-green rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;