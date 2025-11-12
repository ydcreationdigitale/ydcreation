import ModuleLayout from "@/components/ModuleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PlayZone = () => {
  return (
    <ModuleLayout prevModule="/cas-pratique" prevLabel="Cas Pratique">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">📘 PlayZone & Ebook Gratuit</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Univers digital : Création & Optimisation d'un Site Web
          </h2>
          <p className="text-xl text-muted-foreground">
            Ton espace d'action pour appliquer immédiatement
          </p>
        </div>

        <Card className="border-2 border-accent">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold mb-4">Accès gratuit à ton univers digital</h3>
            <p className="mb-6 text-lg">
              Découvre des conseils pratiques, des templates prêts à l'emploi et des outils pour créer 
              et optimiser ton site web professionnel.
            </p>
            <a 
              href="https://ydportofolio.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="gap-2">
                Accéder à la PlayZone & Ebook
                <ExternalLink className="h-5 w-5" />
              </Button>
            </a>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">📘 Ebook gratuit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-semibold">"Lancer ton site web professionnel en 7 jours"</p>
              <p className="text-sm text-muted-foreground">
                Découvre les outils gratuits, les modèles de pages et les bonnes pratiques pour créer 
                ton site sans coder.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Guide étape par étape</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Templates de pages prêts à l'emploi</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Conseils d'optimisation SEO</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🧩 PlayZone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Un espace d'action dédié pour appliquer immédiatement ce que tu apprends
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Checklists interactives</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Mini-exercices pratiques</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Suivi de progression</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Zone de téléchargement (templates, modèles, scripts)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
          <CardHeader>
            <CardTitle className="text-2xl">✅ Check-list complète</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="mb-4">Une checklist claire et séquencée pour ton succès digital :</p>
            
            <div className="space-y-3">
              <div className="flex gap-3 items-start bg-background p-4 rounded-lg">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <strong>Définis ta niche</strong>
                  <p className="text-sm text-muted-foreground">Identifie ton public cible et ton positionnement unique</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start bg-background p-4 rounded-lg">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <strong>Crée ton produit</strong>
                  <p className="text-sm text-muted-foreground">Transforme ton savoir en produit digital</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start bg-background p-4 rounded-lg">
                <span className="text-2xl">3️⃣</span>
                <div>
                  <strong>Prépare ta page de vente</strong>
                  <p className="text-sm text-muted-foreground">Crée une page claire et convaincante</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start bg-background p-4 rounded-lg">
                <span className="text-2xl">4️⃣</span>
                <div>
                  <strong>Planifie ton lancement</strong>
                  <p className="text-sm text-muted-foreground">Stratégie de contenu et timeline</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start bg-background p-4 rounded-lg">
                <span className="text-2xl">5️⃣</span>
                <div>
                  <strong>Analyse tes résultats</strong>
                  <p className="text-sm text-muted-foreground">Mesure, apprends et améliore continuellement</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent mt-6">
              <p className="font-semibold">💬 Chaque case cochée t'amène un pas plus près de ton indépendance digitale.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl text-center">🌟 Prêt à passer à l'action ?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-lg">
              Tout ce dont tu as besoin est maintenant entre tes mains. Les fondations sont posées, 
              les outils sont là, la méthode est claire.
            </p>
            
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg text-center">
              <p className="text-xl font-bold mb-4">
                Le seul ingrédient manquant, c'est ton action. 🚀
              </p>
              <p className="italic">
                Commence petit, reste constant, et observe ta transformation digitale prendre vie.
              </p>
            </div>

            <div className="text-center">
              <a 
                href="https://ydportofolio.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  Commencer maintenant
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  );
};

export default PlayZone;
