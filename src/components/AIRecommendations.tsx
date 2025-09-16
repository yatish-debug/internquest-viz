import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Target,
  TrendingUp,
  Sparkles,
  ChevronRight,
  RefreshCw,
  Star,
  Zap,
  BarChart3,
} from "lucide-react";

interface RecommendationProps {
  userProfile?: {
    skills: string[];
    interests: string[];
    location: string;
    experience: string;
  };
}

const AIRecommendations = ({ userProfile }: RecommendationProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchScore, setMatchScore] = useState(0);

  // Simulate AI analysis
  useEffect(() => {
    setIsAnalyzing(true);
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
      setMatchScore(95);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const recommendations = [
    {
      id: "1",
      title: "Software Engineering Intern",
      company: "Google",
      matchScore: 98,
      reasons: [
        "Perfect match for React & TypeScript skills",
        "Location preference: Bay Area",
        "Experience level: Entry-level friendly",
        "High demand for your skill set"
      ],
      aiInsights: "Based on your coding projects and technical skills, this role offers excellent growth in full-stack development.",
      salaryRange: "$7,000 - $9,000/month",
      trending: true,
    },
    {
      id: "2",
      title: "AI/ML Research Intern",
      company: "OpenAI",
      matchScore: 94,
      reasons: [
        "Strong Python & Data Science background",
        "Interest in AI/ML algorithms",
        "Research-oriented profile match",
        "Cutting-edge technology exposure"
      ],
      aiInsights: "Your academic background and interest in machine learning make this an ideal career launching opportunity.",
      salaryRange: "$8,500 - $10,000/month",
      trending: true,
    },
    {
      id: "3",
      title: "Product Design Intern",
      company: "Figma",
      matchScore: 89,
      reasons: [
        "Creative portfolio alignment",
        "UX/UI design skills match",
        "Remote work preference",
        "Collaborative team environment"
      ],
      aiInsights: "Your design thinking approach and technical understanding create a unique product designer profile.",
      salaryRange: "$5,500 - $7,000/month",
      trending: false,
    },
  ];

  const aiMetrics = [
    { label: "Profile Completeness", value: 92, icon: Target },
    { label: "Skill Match Rate", value: 88, icon: Brain },
    { label: "Market Demand", value: 95, icon: TrendingUp },
    { label: "Application Success Rate", value: 76, icon: Star },
  ];

  return (
    <div className="space-y-8">
      {/* AI Analysis Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-3">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">AI-Powered Recommendations</h2>
            <p className="text-muted-foreground">Personalized matches based on your profile</p>
          </div>
        </div>

        {isAnalyzing ? (
          <div className="bg-card border rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-center mb-4">
              <RefreshCw className="w-5 h-5 text-primary animate-spin mr-2" />
              <span className="text-sm font-medium">Analyzing your profile...</span>
            </div>
            <Progress value={matchScore} className="w-full max-w-xs mx-auto" />
            <p className="text-xs text-muted-foreground mt-2">Processing skills, experience, and preferences</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card border rounded-2xl p-6 shadow-soft">
            {aiMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <metric.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{metric.value}%</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AI Recommendations */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Top AI Matches</h3>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Recommendations
          </Button>
        </div>

        {recommendations.map((rec, index) => (
          <Card key={rec.id} className="group hover-lift transition-smooth shadow-soft hover:shadow-large border-border/50 hover:border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                      {rec.title}
                    </h4>
                    {rec.trending && (
                      <Badge variant="secondary" className="text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground font-medium">{rec.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{rec.salaryRange}</p>
                </div>
                
                {/* Match Score */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2">
                    <span className="text-xl font-bold text-primary">{rec.matchScore}%</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Match
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* AI Insights */}
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-sm mb-1">AI Insight</h5>
                    <p className="text-sm text-muted-foreground">{rec.aiInsights}</p>
                  </div>
                </div>
              </div>

              {/* Match Reasons */}
              <div>
                <h5 className="font-medium text-sm mb-2 flex items-center">
                  <Target className="w-4 h-4 mr-1 text-primary" />
                  Why This Matches You
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {rec.reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                      {reason}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex items-center text-xs text-muted-foreground">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Ranked #{index + 1} for you
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="professional" size="sm">
                    View Details
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="hero" size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Learning Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">AI is Learning Your Preferences</h4>
              <p className="text-sm text-muted-foreground">
                Our recommendation engine improves with every interaction. The more you use InternQuest, 
                the better we become at finding your perfect match.
              </p>
            </div>
            <Button variant="hero" size="sm">
              View Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIRecommendations;