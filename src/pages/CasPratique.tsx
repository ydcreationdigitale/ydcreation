import ModuleLayout from "@/components/ModuleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CasPratique = () => {
  return (
    <ModuleLayout prevModule="/module5" prevLabel="Module 5" nextModule="/playzone" nextLabel="PlayZone">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">🎁 Cas Pratique Exclusif</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Stratégie complète de lancement d'un produit digital
          </h2>
          <p className="text-xl text-muted-foreground">
            Un exemple réel simulé pour t'apprendre en action
          </p>
        </div>

        <Card className="border-2 border-primary">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">🌐 Univers digital : Création & Optimisation d'un Site Web</h3>
            <p className="mb-6">
              Découvre un cas pratique inspiré du réel, conçu pour te montrer comment appliquer chaque module 
              de la formation dans un projet concret.
            </p>
            <a 
              href="https://ydcaspratique.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                Accéder au cas pratique complet
                <ExternalLink className="h-5 w-5" />
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🎯 Contexte du projet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Thème choisi</h3>
                <p className="text-sm">Créer et vendre un produit digital autour de la création et l'optimisation d'un site web professionnel</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Public cible</h3>
                <p className="text-sm">Freelances, coachs et créateurs de contenu qui veulent une présence en ligne professionnelle</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Objectif</h3>
                <p className="text-sm">Réaliser les premières ventes en quelques jours</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🚀 Étape 1 — Trouver la niche et l'idée</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Le créateur du projet remarque une tendance : beaucoup de freelances ont un site, mais peu savent 
              le rendre efficace (design, référencement, pages claires, appels à l'action).
            </p>
            
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🎓 Le produit</h3>
              <p className="text-lg">"Lancer ton site web professionnel en 7 jours — même sans compétences techniques."</p>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💡 Astuce pro :</p>
              <p>Choisis une problématique visible, urgente et concrète. Les gens achètent la solution à un problème spécifique.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🧩 Étape 2 — Création du produit digital</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Le produit est conçu en 3 formats pour maximiser la valeur perçue :</p>
            
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📘</span>
                <div>
                  <strong>Un ebook</strong>
                  <p className="text-sm text-muted-foreground">"Lancer ton site web professionnel en 7 jours" (guide pratique + templates de pages)</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🎥</span>
                <div>
                  <strong>Des vidéos tutorielles</strong>
                  <p className="text-sm text-muted-foreground">Expliquant comment créer le site avec des outils gratuits (Canva, Notion, Systeme.io)</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="text-2xl">✅</span>
                <div>
                  <strong>Une checklist interactive</strong>
                  <p className="text-sm text-muted-foreground">PlayZone pour suivre chaque étape du projet</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-4 rounded-lg">
              <p><strong>Outils utilisés :</strong> Canva, Google Docs, Loom, Notion, Systeme.io</p>
              <p><strong>Temps de création total :</strong> 5 jours</p>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="italic">💬 Le secret : produire vite, tester, améliorer ensuite.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💬 Étape 4 — Stratégies gratuites utilisées</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Le créateur mise sur le contenu organique pour attirer ses premiers clients :</p>
            
            <div className="space-y-3">
              <div className="bg-primary/10 p-4 rounded-lg">
                <strong>TikTok / Reels</strong>
                <p className="text-sm">Vidéos de 30 secondes montrant l'évolution avant/après du site web</p>
                <p className="text-sm italic mt-1">🎥 "J'ai refait le site d'un freelance en 1h avec cet outil gratuit"</p>
              </div>
              
              <div className="bg-accent/10 p-4 rounded-lg">
                <strong>Instagram Stories</strong>
                <p className="text-sm">Coulisses du projet + témoignages des premiers testeurs</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg">
                <strong>LinkedIn</strong>
                <p className="text-sm">Un post expliquant comment un site optimisé attire plus de clients</p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <strong>Email marketing</strong>
                <p className="text-sm">3 emails automatiques (teasing, offre, relance)</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">💡 Résultat :</p>
              <p>800 vues organiques, 100 clics sur la page, premières ventes avant même la pub.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💰 Étape 5 — Stratégies payantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Pour amplifier les résultats, une campagne test Meta Ads est lancée :</p>
            
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">Ciblage :</h3>
              <ul className="space-y-1 text-sm">
                <li>• Freelances, infopreneurs, coachs, créateurs</li>
                <li>• Âge : 22-45 ans</li>
                <li>• Centres d'intérêt : marketing digital, entrepreneuriat, design, site web</li>
              </ul>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-bold mb-3">Format :</h3>
              <p className="text-sm mb-2">Vidéo 10 secondes + texte d'accroche clair :</p>
              <p className="italic text-sm">
                "Ton site ne te ramène pas de clients ? Découvre la méthode pour créer un site pro en 7 jours, sans coder."
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Résultats de la campagne test</h3>
              <div className="space-y-2">
                <p><strong>Budget test :</strong> 10 €/jour pendant 7 jours → 70 € total</p>
                <p><strong>Résultat :</strong></p>
                <ul className="space-y-1 pl-4">
                  <li>• 2 100 vues</li>
                  <li>• 320 clics (CPC moyen : 0,22 €)</li>
                  <li>• 8 ventes à 39 € → 312 € générés</li>
                </ul>
              </div>
              
              <div className="mt-4 bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                <p className="font-bold text-center text-lg">💡 ROI positif dès la première semaine. Objectif atteint.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">📈 Étape 6 — Analyse et amélioration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-green-700 dark:text-green-300">✅ Ce qui a fonctionné</h3>
                <p className="text-sm">La vidéo authentique + la promesse simple</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-blue-700 dark:text-blue-300">🔄 Ce qui a été ajusté</h3>
                <p className="text-sm">Le visuel de la page de vente, simplifié après les retours</p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-purple-700 dark:text-purple-300">🚀 Étape suivante</h3>
                <p className="text-sm">Automatiser le tunnel de vente avec email et upsell</p>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="italic">💬 Chaque lancement est une leçon. L'échec, c'est juste une donnée à ajuster.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent">
          <CardHeader>
            <CardTitle className="text-2xl">🌟 Résultats simulés</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">1 200</div>
                <div className="text-sm">visiteurs en 10 jours</div>
              </div>
              
              <div className="bg-accent/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-accent mb-2">5%</div>
                <div className="text-sm">de conversion moyenne</div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">x3</div>
                <div className="text-sm">ROI positif sur le budget pub</div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">250</div>
                <div className="text-sm">abonnés email</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg">
              <p className="text-center font-semibold text-lg">
                💡 Ce cas pratique prouve qu'avec une offre claire, une stratégie cohérente et de la persévérance, 
                tu peux générer tes premières ventes en ligne, même en partant de zéro.
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl italic mb-4">
                💬 Tu viens de voir ce qu'un lancement digital bien structuré peut accomplir.
              </p>
              <p className="text-2xl font-bold text-primary">
                À toi maintenant d'écrire ton propre cas réel. 🚀
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  );
};

export default CasPratique;
