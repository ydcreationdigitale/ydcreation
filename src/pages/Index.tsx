import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-digital.jpg";
import { Star, BookOpen, Target, TrendingUp, Users, Zap } from "lucide-react";

const Index = () => {
  const testimonials = [
    {
      name: "Sarah B.",
      role: "Auto-entrepreneuse",
      text: "Je galérais à faire connaître mes services en ligne, et grâce à la formation j'ai enfin compris comment structurer ma stratégie digitale. En 3 semaines, j'ai doublé mes demandes de devis ! La partie sur l'optimisation de site web est ultra claire.",
    },
    {
      name: "Lina R.",
      role: "Étudiante en communication",
      text: "J'ai adoré la pédagogie ! Tout est expliqué simplement, étape par étape. J'ai même réussi à lancer ma première mini-campagne Google Ads avec un petit budget et j'ai eu mes premiers clics. Je recommande à 100 %.",
    },
    {
      name: "Julien D.",
      role: "Créateur de contenu",
      text: "Ce pack complet m'a permis d'améliorer mon site, de comprendre le référencement, et d'attirer plus de visiteurs sans dépenser une fortune. Les bonus sont un vrai plus. Excellent rapport qualité-prix !",
    },
  ];

  const modules = [
    {
      number: 1,
      title: "Introduction au Marketing Digital",
      icon: BookOpen,
      description: "Comprendre les bases et les leviers essentiels",
    },
    {
      number: 2,
      title: "Trouver sa niche et sa cible",
      icon: Target,
      description: "Identifier ton public et positionner ton offre",
    },
    {
      number: 3,
      title: "Créer ton produit digital",
      icon: Zap,
      description: "Transformer ton savoir en produit rentable",
    },
    {
      number: 4,
      title: "Construire sa présence en ligne",
      icon: TrendingUp,
      description: "Stratégies gratuites et payantes pour être visible",
    },
    {
      number: 5,
      title: "Lancer et vendre son produit",
      icon: Users,
      description: "Planifier et exécuter un lancement efficace",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            🎯 Les Fondations du Marketing Digital & des Produits Digitaux
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            « Transforme ton savoir, ton idée ou ta passion en un produit digital rentable et authentique. »
          </p>
          <Link to="/module1">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Commencer la formation 🚀
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">💡 Introduction générale</h2>
          <Card>
            <CardContent className="p-8 space-y-4 text-lg">
              <p>
                Bienvenue dans <strong>Les Fondations du Marketing Digital & des Produits Digitaux</strong>. 
                Cette formation est ton point de départ pour bâtir un projet digital fort, durable et cohérent.
              </p>
              <p>
                Le monde change vite. Les métiers du digital explosent. Aujourd'hui, n'importe qui peut transformer 
                une idée en revenu, un savoir en produit, une passion en projet. Mais la clé du succès ne réside pas 
                dans la chance. Elle réside dans la stratégie.
              </p>
              <p>
                Cette formation repose sur <strong>5 modules progressifs</strong>, à suivre dans l'ordre. 
                Chaque module contient des étapes claires, des astuces pro, des exemples concrets, et des 
                mini-exercices pour passer à l'action dès maintenant.
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Créateurs de contenu</h3>
                <p className="text-muted-foreground">Monétise tes connaissances</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Freelances</h3>
                <p className="text-muted-foreground">Propose un produit digital</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Débutants</h3>
                <p className="text-muted-foreground">Crée ta liberté digitale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">🧭 Les 5 Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link key={module.number} to={`/module${module.number}`}>
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2">Module {module.number}</h3>
                          <h4 className="font-semibold mb-2">{module.title}</h4>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
            
            <Link to="/cas-pratique">
              <Card className="h-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-primary">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">🎁 Cas Pratique</h3>
                  <p className="text-muted-foreground">
                    Stratégie complète de lancement d'un produit digital
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">🌟 Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">🎁 Contenu Bonus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://ydcaspratique.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">🌐 Cas Pratique Complet</h3>
                  <p className="text-muted-foreground mb-4">
                    Stratégie de visibilité et conversion d'un site web
                  </p>
                  <Button className="w-full">Accéder au cas pratique</Button>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://ydportofolio.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-accent">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">📘 PlayZone & Ebook</h3>
                  <p className="text-muted-foreground mb-4">
                    Univers digital : Création & Optimisation d'un Site Web
                  </p>
                  <Button variant="secondary" className="w-full">Accès gratuit</Button>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted text-center">
        <div className="container mx-auto px-4">
          <a 
            href="mailto:YDCréationDigitale@gmail.com"
            className="text-primary hover:underline font-semibold"
          >
            YDCréationDigitale@gmail.com
          </a>
          <p className="mt-2 text-muted-foreground">© 2025 - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
