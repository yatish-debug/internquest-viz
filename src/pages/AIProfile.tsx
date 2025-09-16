import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Brain,
  User,
  Target,
  BarChart3,
  TrendingUp,
  Plus,
  X,
  Save,
  RefreshCw,
  Sparkles,
  Award,
  MapPin,
  Briefcase,
} from "lucide-react";

const AIProfile = () => {
  const [skills, setSkills] = useState([
    "React", "TypeScript", "Python", "Machine Learning", "Data Analysis"
  ]);
  const [interests, setInterests] = useState([
    "AI/ML", "Web Development", "Data Science", "Product Design"
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const profileMetrics = [
    { label: "Profile Strength", value: 92, color: "primary" },
    { label: "Skill Match Rate", value: 88, color: "accent" },
    { label: "Market Demand", value: 95, color: "success" },
    { label: "Recommendation Quality", value: 94, color: "warning" },
  ];

  const aiInsights = [
    {
      category: "Skills Gap Analysis",
      insight: "Adding Docker and Kubernetes skills could increase your match rate by 23%",
      priority: "high",
      action: "Learn containerization technologies"
    },
    {
      category: "Market Trends",
      insight: "AI/ML internships have grown 340% this year in your target locations",
      priority: "medium",
      action: "Focus on ML project portfolio"
    },
    {
      category: "Location Optimization",
      insight: "Remote positions show 45% higher match rates for your skill set",
      priority: "low",
      action: "Consider remote-first applications"
    },
  ];

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setInterests(interests.filter(interest => interest !== interestToRemove));
  };

  const analyzeProfile = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            AI Profile <span className="gradient-text">Builder</span>
          </h1>
          <p className="text-muted-foreground">
            Help our AI understand you better for more accurate internship recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="major">Major/Field of Study</Label>
                    <Input id="major" placeholder="Computer Science" />
                  </div>
                  <div>
                    <Label htmlFor="year">Academic Year</Label>
                    <Input id="year" placeholder="Junior" />
                  </div>
                  <div>
                    <Label htmlFor="location">Preferred Location</Label>
                    <Input id="location" placeholder="San Francisco, CA" />
                  </div>
                  <div>
                    <Label htmlFor="remote">Remote Preference</Label>
                    <Input id="remote" placeholder="Hybrid" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio">Bio/Career Objective</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us about your career goals and what you're passionate about..."
                    className="min-h-20"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm hover:bg-destructive hover:text-destructive-foreground cursor-pointer transition-smooth"
                      onClick={() => removeSkill(skill)}
                    >
                      {skill}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <Button onClick={addSkill} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-primary" />
                  Interests & Career Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant="outline"
                      className="text-sm hover:bg-destructive hover:text-destructive-foreground cursor-pointer transition-smooth"
                      onClick={() => removeInterest(interest)}
                    >
                      {interest}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add an interest..."
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                  />
                  <Button onClick={addInterest} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex gap-4">
              <Button variant="hero" size="lg" className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
              <Button variant="professional" size="lg" onClick={analyzeProfile}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isAnalyzing ? 'animate-spin' : ''}`} />
                {isAnalyzing ? 'Analyzing...' : 'Analyze Profile'}
              </Button>
            </div>
          </div>

          {/* AI Insights Sidebar */}
          <div className="space-y-6">
            {/* Profile Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Profile Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileMetrics.map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{metric.label}</span>
                      <span className="text-sm font-bold text-primary">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-primary" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      insight.priority === 'high' ? 'border-destructive/20 bg-destructive/5' :
                      insight.priority === 'medium' ? 'border-warning/20 bg-warning/5' :
                      'border-success/20 bg-success/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-sm">{insight.category}</h5>
                      <Badge
                        variant={
                          insight.priority === 'high' ? 'destructive' :
                          insight.priority === 'medium' ? 'secondary' :
                          'outline'
                        }
                        className="text-xs"
                      >
                        {insight.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{insight.insight}</p>
                    <p className="text-xs font-medium">{insight.action}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                  <div>
                    <div className="text-2xl font-bold text-primary">127</div>
                    <div className="text-sm text-muted-foreground">Potential Matches</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">94%</div>
                    <div className="text-sm text-muted-foreground">Profile Completeness</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Briefcase className="w-4 h-4 mr-2" />
                    View Matches
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIProfile;