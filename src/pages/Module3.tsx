import ModuleLayout from "@/components/ModuleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Module3 = () => {
  return (
    <ModuleLayout prevModule="/module2" prevLabel="Module 2" nextModule="/module4" nextLabel="Module 4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">💻 Module 3</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Créer ton produit digital
          </h2>
          <p className="text-xl text-muted-foreground">
            ✅ Objectif : Concevoir un produit digital simple, utile et professionnel, adapté à ton audience.
          </p>
        </div>

        <Card className="border-l-4 border-primary">
          <CardContent className="p-6">
            <p className="text-lg">
              Le but : transformer ton savoir en valeur concrète, sans te perdre dans la perfection.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🧩 1. Les formats possibles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Il existe de nombreuses façons de partager ton expertise — choisis celle qui correspond le mieux à ton style et à ton audience :
            </p>
            
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📘</span>
                <div>
                  <strong>Ebook ou guide PDF</strong>
                  <p className="text-muted-foreground">Idéal pour transmettre une méthode ou un plan d'action</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🎥</span>
                <div>
                  <strong>Mini-formation vidéo</strong>
                  <p className="text-muted-foreground">Parfaite pour enseigner en direct et créer du lien</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🧩</span>
                <div>
                  <strong>Template ou pack d'outils</strong>
                  <p className="text-muted-foreground">Utile pour les créateurs qui veulent du concret immédiatement</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="text-2xl">💬</span>
                <div>
                  <strong>Coaching en ligne ou atelier</strong>
                  <p className="text-muted-foreground">Idéal pour un accompagnement personnalisé</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📁</span>
                <div>
                  <strong>Pack Notion ou ressources prêtes à l'emploi</strong>
                  <p className="text-muted-foreground">Format très tendance pour les freelances et créateurs</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💬 Conseil :</p>
              <p>Choisis un format que tu peux produire rapidement, même imparfaitement. Le plus important, c'est de lancer et de tester.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💡 2. Les outils gratuits (simples et efficaces)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Pas besoin de gros budget pour créer ton premier produit. Voici les indispensables :</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎨</span>
                  <strong>Canva</strong>
                </div>
                <p className="text-sm">Pour créer un design professionnel, visuels ou PDF élégants</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🧠</span>
                  <strong>Notion / Google Docs</strong>
                </div>
                <p className="text-sm">Pour structurer ton contenu facilement</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <strong>Gumroad / Etsy</strong>
                </div>
                <p className="text-sm">Pour héberger et vendre ton produit digital sans site complexe</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎬</span>
                  <strong>CapCut / Loom</strong>
                </div>
                <p className="text-sm">Pour enregistrer des vidéos claires et authentiques</p>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💬 Astuce :</p>
              <p>Combine un outil de création (Canva / Notion) avec un outil de vente (Gumroad) pour avoir un mini-écosystème simple et fonctionnel.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💸 3. Les outils payants (pour passer à la vitesse supérieure)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Si tu veux professionnaliser ton activité, ces plateformes t'offrent plus de contrôle et d'automatisation :</p>
            
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4">
                <strong>🏗️ Teachable, Podia, Systeme.io</strong>
                <p className="text-sm text-muted-foreground">Plateformes complètes pour héberger formations, paiements et pages de vente</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <strong>📧 Mailchimp / ConvertKit</strong>
                <p className="text-sm text-muted-foreground">Pour automatiser tes emails et relancer tes prospects</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <strong>🤖 ChatGPT / Copy.ai</strong>
                <p className="text-sm text-muted-foreground">Pour accélérer ta création de contenu et trouver les bons mots</p>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💡 Astuce pro :</p>
              <p>Commence simple, puis automatise quand tu maîtrises les bases.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent">
          <CardHeader>
            <CardTitle className="text-2xl">🚀 4. L'approche MVP (Minimum Viable Product)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg font-semibold">
              Ne cherche pas la perfection. Cherche le test.
            </p>
            <p>
              Un produit simple qui résout un vrai problème se vend mieux qu'un produit "parfait" mais sans valeur réelle.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-bold mb-3">💬 Philosophie :</h3>
              <p className="text-lg italic mb-4">"Crée vite, lance tôt, améliore avec ton audience."</p>
              <ul className="space-y-2">
                <li>• Chaque vente est un retour</li>
                <li>• Chaque retour est une amélioration</li>
                <li>• Tu ne lances pas un produit figé — tu lances une évolution continue</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💡 Astuce pro :</p>
              <p><strong>Crée → Vends → Améliore.</strong></p>
              <p>C'est le cycle gagnant du créateur digital.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">📝 Mini-exercice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-3">
              <li>Liste 3 formats de produits que tu pourrais créer (ebook, atelier, pack d'outils…).</li>
              <li>Choisis-en 1 et décris le résultat concret que ton client obtiendra après l'avoir utilisé.</li>
              <li>Donne-lui un titre accrocheur en une phrase (ex : "Le Starter Kit pour lancer ton business digital en 7 jours").</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  );
};

export default Module3;
