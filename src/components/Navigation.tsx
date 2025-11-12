import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const modules = [
    { path: "/module1", label: "Module 1" },
    { path: "/module2", label: "Module 2" },
    { path: "/module3", label: "Module 3" },
    { path: "/module4", label: "Module 4" },
    { path: "/module5", label: "Module 5" },
    { path: "/cas-pratique", label: "Cas Pratique" },
    { path: "/playzone", label: "PlayZone" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            🚀 Formation Marketing Digital
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {modules.map((module) => (
              <Link key={module.path} to={module.path}>
                <Button
                  variant={location.pathname === module.path ? "default" : "ghost"}
                  size="sm"
                >
                  {module.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {modules.map((module) => (
              <Link
                key={module.path}
                to={module.path}
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button
                  variant={location.pathname === module.path ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {module.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
