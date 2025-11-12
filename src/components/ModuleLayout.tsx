import { ReactNode } from "react";
import Navigation from "./Navigation";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ModuleLayoutProps {
  children: ReactNode;
  prevModule?: string;
  nextModule?: string;
  prevLabel?: string;
  nextLabel?: string;
}

const ModuleLayout = ({ children, prevModule, nextModule, prevLabel, nextLabel }: ModuleLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {children}
        
        {/* Navigation between modules */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          {prevModule ? (
            <Link to={prevModule}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {prevLabel || "Précédent"}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          
          {nextModule && (
            <Link to={nextModule}>
              <Button className="gap-2">
                {nextLabel || "Suivant"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default ModuleLayout;
