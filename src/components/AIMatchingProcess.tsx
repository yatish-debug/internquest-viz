import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Database,
  GitBranch,
  Target,
  Zap,
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const AIMatchingProcess = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Analyze your skills, experience, preferences, and career goals",
      technologies: ["Python", "Pandas", "Data Processing"],
      status: "completed",
    },
    {
      icon: Brain,
      title: "ML Algorithm Processing",
      description: "Apply clustering and similarity scoring algorithms to find matches",
      technologies: ["Scikit-learn", "TensorFlow", "Neural Networks"],
      status: "completed",
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "Compare your profile against thousands of internship requirements",
      technologies: ["Vector Similarity", "Cosine Distance", "NLP"],
      status: "processing",
    },
    {
      icon: BarChart3,
      title: "Confidence Scoring",
      description: "Generate match confidence scores based on multiple factors",
      technologies: ["Statistical Models", "Weighted Scoring", "Probability"],
      status: "pending",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Improve recommendations based on your interactions and feedback",
      technologies: ["Reinforcement Learning", "Feedback Loops", "Model Updates"],
      status: "pending",
    },
  ];

  const metrics = [
    {
      label: "Data Points Analyzed",
      value: "2.5M+",
      icon: Database,
      description: "Skills, experiences, and preferences processed"
    },
    {
      label: "ML Models Active",
      value: "12",
      icon: Brain,
      description: "Different algorithms working together"
    },
    {
      label: "Match Accuracy",
      value: "94.2%",
      icon: Target,
      description: "Success rate of our recommendations"
    },
    {
      label: "Processing Speed",
      value: "<2s",
      icon: Zap,
      description: "Average time to generate matches"
    },
  ];

  const algorithmFeatures = [
    {
      name: "Skill Clustering",
      description: "Groups similar technical and soft skills using K-means clustering",
      accuracy: 92,
    },
    {
      name: "Experience Matching",
      description: "Matches your experience level with appropriate opportunities",
      accuracy: 88,
    },
    {
      name: "Cultural Fit Analysis",
      description: "Analyzes company culture compatibility using NLP",
      accuracy: 85,
    },
    {
      name: "Location Optimization",
      description: "Considers remote preferences and geographical constraints",
      accuracy: 96,
    },
    {
      name: "Salary Prediction",
      description: "Predicts salary ranges based on skills and market data",
      accuracy: 89,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <Badge variant="outline" className="mb-4">
          <Brain className="w-3 h-3 mr-1" />
          AI-Powered Technology
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          How Our <span className="gradient-text">AI Engine</span> Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Advanced machine learning algorithms analyze thousands of data points to find your perfect internship match
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Process Steps */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">The AI Matching Process</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`shadow-soft hover:shadow-medium transition-smooth ${
                step.status === 'completed' ? 'border-success/50 bg-success/5' :
                step.status === 'processing' ? 'border-primary/50 bg-primary/5' :
                'border-border'
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-success/20 text-success' :
                      step.status === 'processing' ? 'bg-primary/20 text-primary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {step.status === 'completed' ? 
                        <CheckCircle className="w-5 h-5" /> : 
                        <step.icon className="w-5 h-5" />
                      }
                    </div>
                    <Badge variant={
                      step.status === 'completed' ? 'default' :
                      step.status === 'processing' ? 'secondary' :
                      'outline'
                    } className="text-xs">
                      {step.status === 'completed' ? 'Complete' :
                       step.status === 'processing' ? 'Active' : 'Queued'}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground mb-3">{step.description}</p>
                  <div className="space-y-1">
                    {step.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Algorithm Features */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center">
            <GitBranch className="w-5 h-5 mr-2 text-primary" />
            Machine Learning Algorithms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {algorithmFeatures.map((feature, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{feature.name}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-primary">{feature.accuracy}%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
              </div>
              <Progress value={feature.accuracy} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card className="bg-gradient-to-r from-muted/50 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2 text-primary" />
            Powered by Advanced Tech Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Python", description: "Core ML processing" },
              { name: "Scikit-learn", description: "ML algorithms" },
              { name: "Pandas", description: "Data processing" },
              { name: "Flask/FastAPI", description: "Backend APIs" },
              { name: "PostgreSQL", description: "Data storage" },
              { name: "Redis", description: "Caching layer" },
              { name: "TensorFlow", description: "Deep learning" },
              { name: "React", description: "Frontend UI" },
            ].map((tech, index) => (
              <div key={index} className="text-center p-3 bg-card rounded-lg border border-border/50">
                <div className="font-medium text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIMatchingProcess;