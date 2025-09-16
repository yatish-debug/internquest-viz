import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Brain, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const popularSearches = [
    "Software Engineering",
    "Data Science",
    "Product Management",
    "UX Design",
    "Marketing",
    "Finance"
  ];

  const stats = [
    { icon: Brain, value: "95%", label: "AI Match Accuracy" },
    { icon: Users, value: "50,000+", label: "Students Matched" },
    { icon: Award, value: "2,500+", label: "Partner Companies" },
    { icon: TrendingUp, value: "98%", label: "User Satisfaction" }
  ];

  const handleSearch = () => {
    // This would typically navigate to search results
    console.log("Searching for:", searchQuery, "in", location);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient opacity-5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <div className="space-y-6">
              <Badge variant="outline" className="mb-4 shadow-soft hover:shadow-medium transition-smooth">
                <Brain className="w-3 h-3 mr-1" />
                AI-Powered Internship Matching Engine
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                AI-Powered{" "}
                <span className="gradient-text">Internship</span>{" "}
                Matching
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Advanced machine learning algorithms analyze your skills, experience, and preferences 
                to deliver personalized internship recommendations with 95% accuracy.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-10">
              <div className="bg-card/80 backdrop-blur rounded-2xl p-6 shadow-large border border-border/50">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search internships, companies, or roles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 border-0 bg-muted/50 focus:bg-background transition-smooth"
                    />
                  </div>
                  <div className="md:w-48 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 h-12 border-0 bg-muted/50 focus:bg-background transition-smooth"
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    variant="gradient" 
                    size="lg" 
                    className="h-12 px-8"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
                
                {/* Popular Searches */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search) => (
                      <Badge
                        key={search}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                        onClick={() => setSearchQuery(search)}
                      >
                        {search}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="hero" size="xl" className="shadow-glow">
                Get Started Free
              </Button>
              <Button variant="professional" size="xl">
                For Employers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;