import ModuleLayout from "@/components/ModuleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Module1 = () => {
  return (
    <ModuleLayout nextModule="/module2" nextLabel="Module 2">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">🧭 Module 1</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Introduction au Marketing Digital
          </h2>
          <p className="text-xl text-muted-foreground">
            ✅ Objectif : Comprendre les bases du marketing digital, ses leviers essentiels et ses stratégies gratuites et payantes.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🧩 1. Comprendre le Marketing Digital</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Le marketing digital, c'est l'ensemble des stratégies utilisées pour faire connaître ton produit, 
              attirer ton audience et la convertir en clients — tout cela, grâce à Internet.
            </p>
            
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Les leviers du marketing digital :</h3>
              <ul className="space-y-2">
                <li><strong>La visibilité</strong> — comment les gens te trouvent (SEO, pub, réseaux)</li>
                <li><strong>Le trafic</strong> — comment attirer des visiteurs</li>
                <li><strong>La conversion</strong> — comment transformer les visiteurs en acheteurs</li>
                <li><strong>La fidélisation</strong> — comment créer une relation durable avec ton audience</li>
                <li><strong>L'optimisation</strong> — comment améliorer continuellement tes résultats</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💬 2. Les stratégies gratuites</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Les stratégies gratuites reposent sur le temps et la valeur. Elles sont parfaites si tu débutes.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold mb-2">Le contenu organique</h3>
                <p>Publie sur TikTok, Instagram, LinkedIn ou YouTube pour partager ton expertise.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  👉 Exemple : poste des mini-conseils tirés de ton futur produit.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold mb-2">Le SEO (référencement naturel)</h3>
                <p>Fais en sorte que ton contenu soit trouvé sur Google grâce à des mots-clés pertinents.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold mb-2">L'email marketing</h3>
                <p>Construis une liste d'abonnés et envoie-leur des astuces gratuites.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold mb-2">Les communautés</h3>
                <p>Participe à des groupes Facebook, Reddit ou Discord en apportant de la valeur.</p>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💡 Astuce pro :</p>
              <p>La régularité prime sur la perfection. Publier chaque semaine vaut mieux que planifier sans agir.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💸 3. Les stratégies payantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Les stratégies payantes permettent d'aller plus vite. Elles reposent sur les publicités en ligne (Ads).
            </p>

            <div className="space-y-4">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Meta Ads (Facebook & Instagram)</h3>
                <p>Idéal pour toucher des audiences précises (freelances, créateurs, etc.).</p>
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Google Ads</h3>
                <p>Capte les gens en recherche active ("formation marketing digital", "créer un produit digital").</p>
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">TikTok Ads</h3>
                <p>Mise sur des vidéos courtes, naturelles, et engageantes.</p>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💡 Astuce pro :</p>
              <p>Commence petit (5 à 10€/jour) et teste plusieurs visuels avant d'augmenter ton budget.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">📝 Mini-exercice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-3">
              <li>Liste les 3 canaux digitaux que tu pourrais utiliser dès aujourd'hui pour promouvoir ton idée.</li>
              <li>Classe-les selon le temps que tu peux y consacrer et ton niveau actuel.</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  );
};

export default Module1;
