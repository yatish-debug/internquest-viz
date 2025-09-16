import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, Bell, Briefcase } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">InternQuest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/discover"
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive("/discover") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Discover
            </Link>
            <Link
              to="/companies"
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive("/companies") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Companies
            </Link>
            <Link
              to="/resources"
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive("/resources") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Resources
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/discover"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Discover
              </Link>
              <Link
                to="/companies"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Companies
              </Link>
              <Link
                to="/resources"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;