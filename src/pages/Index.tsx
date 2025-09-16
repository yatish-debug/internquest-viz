import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InternshipCard from "@/components/InternshipCard";
import AIRecommendations from "@/components/AIRecommendations";
import AIMatchingProcess from "@/components/AIMatchingProcess";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  Brain,
  Target,
  BarChart3,
} from "lucide-react";

const Index = () => {
  // Featured internships data
  const featuredInternships = [
    {
      id: "1",
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full-time",
      duration: "12 weeks",
      salary: "$8,000/month",
      description: "Work on cutting-edge projects that impact billions of users worldwide. You'll collaborate with world-class engineers on Google's core products.",
      requirements: ["Computer Science", "Python/Java", "Data Structures", "Algorithms"],
      postedAt: "1 day ago",
      deadline: "April 1, 2024",
      applicants: 234,
      remote: false,
      tags: ["Software Engineering", "Tech Giant", "High Impact"],
    },
    {
      id: "2",
      title: "Product Design Intern",
      company: "Airbnb",
      location: "San Francisco, CA",
      type: "Full-time",
      duration: "16 weeks",
      salary: "$6,500/month",
      description: "Shape the future of travel by designing user experiences that connect people worldwide. Work alongside our design team on real product features.",
      requirements: ["Design Thinking", "Figma", "User Research", "Prototyping"],
      postedAt: "2 days ago",
      deadline: "March 30, 2024",
      applicants: 189,
      remote: true,
      tags: ["Product Design", "Travel", "Remote Friendly"],
    },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced machine learning algorithms analyze your profile to find perfect matches with 95% accuracy.",
    },
    {
      icon: Target,
      title: "Smart Recommendations",
      description: "Get personalized internship suggestions based on your skills, interests, and career goals.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Our platform processes millions of data points to predict the best opportunities for you.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CS Student at Stanford",
      avatar: "S",
      quote: "InternQuest's AI matched me with Google in just 2 days! The algorithm understood my skills perfectly and showed me exactly why it was a 98% match.",
      matchScore: 98,
    },
    {
      name: "Marcus Johnson",
      role: "Design Student at RISD",
      avatar: "M", 
      quote: "The AI recommendation engine found me a perfect design internship at Airbnb. It analyzed my portfolio and matched me based on my design philosophy!",
      matchScore: 94,
    },
    {
      name: "Priya Patel",
      role: "Data Science Student at MIT",
      avatar: "P",
      quote: "Amazing! The ML algorithms identified my passion for fintech and connected me with the perfect startup internship. The AI insights were spot-on.",
      matchScore: 96,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* AI Recommendations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AIRecommendations />
        </div>
      </section>

      {/* AI Matching Process */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <AIMatchingProcess />
        </div>
      </section>

      {/* Featured Internships Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Star className="w-3 h-3 mr-1" />
              AI-Curated Opportunities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top <span className="gradient-text">AI Matches</span> For You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our machine learning algorithms have identified these internships as perfect matches for your profile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              View AI Recommendations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Brain className="w-3 h-3 mr-1" />
              AI Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by <span className="gradient-text">Advanced AI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of internship discovery with our cutting-edge machine learning technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students who found their dream internships through InternQuest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <Brain className="w-3 h-3 mr-1" />
                      {testimonial.matchScore}% AI Match
                    </Badge>
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-warning fill-current" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      AI-Powered Match
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Experience AI-Powered Matching?
            </h2>
          </div>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who are discovering their perfect internships through our advanced machine learning algorithms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="shadow-large">
              <Zap className="w-5 h-5 mr-2" />
              Get AI Recommendations
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <BarChart3 className="w-5 h-5 mr-2" />
              See How AI Works
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">InternQuest</span>
            </div>
            <p className="text-muted-foreground mb-6">
              AI-powered internship matching platform connecting students with perfect opportunities worldwide.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">About</a>
              <a href="#" className="hover:text-primary transition-smooth">Privacy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms</a>
              <a href="#" className="hover:text-primary transition-smooth">Contact</a>
            </div>
            <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
              © 2024 InternQuest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
