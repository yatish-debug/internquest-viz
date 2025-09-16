import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternshipCard from "@/components/InternshipCard";
import Navigation from "@/components/Navigation";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  TrendingUp,
  Star,
} from "lucide-react";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Mock data for internships
  const internships = [
    {
      id: "1",
      title: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      duration: "3 months",
      salary: "$2,500/month",
      description: "Join our dynamic frontend team to build cutting-edge web applications using React, TypeScript, and modern development practices.",
      requirements: ["React", "TypeScript", "HTML/CSS", "Git", "JavaScript"],
      postedAt: "2 days ago",
      deadline: "March 15, 2024",
      applicants: 45,
      remote: true,
      tags: ["Frontend", "React", "Remote", "Entry Level"],
    },
    {
      id: "2",
      title: "Data Science Intern",
      company: "DataFlow Solutions",
      location: "New York, NY",
      type: "Part-time",
      duration: "6 months",
      salary: "$3,000/month",
      description: "Work with our data science team to analyze large datasets and build machine learning models that drive business insights.",
      requirements: ["Python", "Pandas", "Scikit-learn", "SQL", "Statistics"],
      postedAt: "1 week ago",
      deadline: "March 20, 2024",
      applicants: 67,
      remote: false,
      tags: ["Data Science", "Machine Learning", "Python", "Analytics"],
    },
    {
      id: "3",
      title: "UX Design Intern",
      company: "DesignLab Studio",
      location: "Austin, TX",
      type: "Full-time",
      duration: "4 months",
      salary: "$2,200/month",
      description: "Help create user-centered designs for mobile and web applications. Work closely with product teams to deliver exceptional user experiences.",
      requirements: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      postedAt: "3 days ago",
      deadline: "March 25, 2024",
      applicants: 32,
      remote: true,
      tags: ["UX Design", "Figma", "Remote", "Creative"],
    },
    {
      id: "4",
      title: "Product Management Intern",
      company: "StartupX",
      location: "Seattle, WA",
      type: "Full-time",
      duration: "3 months",
      salary: "$2,800/month",
      description: "Drive product strategy and work with cross-functional teams to deliver innovative solutions that delight customers.",
      requirements: ["Product Strategy", "Analytics", "Agile", "Communication"],
      postedAt: "5 days ago",
      deadline: "March 18, 2024",
      applicants: 28,
      remote: false,
      tags: ["Product Management", "Strategy", "Agile", "Leadership"],
    },
  ];

  const categories = [
    { name: "All", count: 156, icon: Briefcase },
    { name: "Engineering", count: 45, icon: Search },
    { name: "Design", count: 23, icon: Star },
    { name: "Data Science", count: 34, icon: TrendingUp },
    { name: "Marketing", count: 28, icon: Briefcase },
    { name: "Finance", count: 26, icon: DollarSign },
  ];

  const filters = [
    { category: "Location", options: ["Remote", "San Francisco", "New York", "Austin", "Seattle"] },
    { category: "Duration", options: ["3 months", "6 months", "1 year", "Summer"] },
    { category: "Type", options: ["Full-time", "Part-time", "Contract"] },
    { category: "Compensation", options: ["Paid", "Unpaid", "$2000+", "$3000+"] },
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discover Internships</h1>
          <p className="text-muted-foreground">
            Find the perfect internship opportunity that matches your skills and interests
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by role, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="h-12">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" className="h-12">
                <MapPin className="w-4 h-4 mr-2" />
                Location
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => toggleFilter(filter)}
                >
                  {filter} ×
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedFilters([])}
                className="text-muted-foreground"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer transition-smooth"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {filters.map((filterGroup) => (
                    <div key={filterGroup.category}>
                      <h4 className="font-medium text-sm mb-2">{filterGroup.category}</h4>
                      <div className="space-y-2">
                        {filterGroup.options.map((option) => (
                          <Badge
                            key={option}
                            variant={selectedFilters.includes(option) ? "default" : "outline"}
                            className="cursor-pointer mr-2 mb-2 text-xs"
                            onClick={() => toggleFilter(option)}
                          >
                            {option}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="grid" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList className="grid w-full max-w-[200px] grid-cols-2">
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
                <div className="text-sm text-muted-foreground">
                  {internships.length} internships found
                </div>
              </div>

              <TabsContent value="grid" className="space-y-6">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {internships.map((internship) => (
                    <InternshipCard key={internship.id} internship={internship} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list" className="space-y-4">
                {internships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </TabsContent>
            </Tabs>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Internships
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;