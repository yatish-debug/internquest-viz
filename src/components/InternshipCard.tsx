import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  DollarSign,
  BookmarkPlus,
  ExternalLink,
  Calendar,
  Building,
  Users,
} from "lucide-react";

interface InternshipCardProps {
  internship: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    duration: string;
    salary?: string;
    description: string;
    requirements: string[];
    postedAt: string;
    deadline: string;
    applicants: number;
    remote: boolean;
    tags: string[];
    logo?: string;
  };
}

const InternshipCard = ({ internship }: InternshipCardProps) => {
  const {
    title,
    company,
    location,
    type,
    duration,
    salary,
    description,
    requirements,
    postedAt,
    deadline,
    applicants,
    remote,
    tags,
  } = internship;

  return (
    <Card className="group hover-lift transition-smooth shadow-soft hover:shadow-large border-border/50 hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {/* Company Logo Placeholder */}
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <Building className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                {title}
              </h3>
              <p className="text-muted-foreground font-medium">{company}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-smooth">
            <BookmarkPlus className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="secondary" className="text-xs">
            <MapPin className="w-3 h-3 mr-1" />
            {location}
            {remote && " • Remote"}
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {duration}
          </Badge>
          {salary && (
            <Badge variant="outline" className="text-xs">
              <DollarSign className="w-3 h-3 mr-1" />
              {salary}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Requirements */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Key Requirements:</h4>
          <div className="flex flex-wrap gap-1">
            {requirements.slice(0, 3).map((req, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {req}
              </Badge>
            ))}
            {requirements.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{requirements.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 4).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              Posted {postedAt}
            </div>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {applicants} applicants
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="professional" size="sm">
              <ExternalLink className="w-3 h-3 mr-1" />
              View Details
            </Button>
            <Button variant="hero" size="sm">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Deadline Notice */}
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
          <p className="text-xs text-warning-foreground">
            <Clock className="w-3 h-3 inline mr-1" />
            Application deadline: {deadline}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;