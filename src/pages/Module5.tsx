import ModuleLayout from "@/components/ModuleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Module5 = () => {
  return (
    <ModuleLayout prevModule="/module4" prevLabel="Module 4" nextModule="/cas-pratique" nextLabel="Cas Pratique">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">💰 Module 5</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Lancer et vendre son produit
          </h2>
          <p className="text-xl text-muted-foreground">
            ✅ Objectif : Planifier, exécuter et optimiser un lancement efficace — même sans budget.
          </p>
        </div>

        <Card className="border-l-4 border-primary">
          <CardContent className="p-6">
            <p className="text-lg italic">
              💬 Souviens-toi : La vente, c'est une relation. Crée du lien chaque jour, la conversion viendra naturellement.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🚀 Stratégies gratuites pour vendre sans budget</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">
              Tu n'as pas besoin d'argent pour commencer à vendre. Tu as besoin de stratégie, d'énergie et de cohérence.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">💬 1. Le contenu organique : ton moteur de visibilité</h3>
              <p className="mb-4">
                Le contenu, c'est ton vendeur silencieux. Il travaille pour toi 24h/24, 7j/7.
              </p>
              
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent">
                <p className="italic text-sm">
                  💡 Souviens-toi : les gens n'achètent pas ton produit, ils achètent ta compétence et ton énergie.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <div className="bg-background p-4 rounded">
                  <strong>Mini-vidéos (TikTok, Reels, Shorts)</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Structure gagnante : Problème → Solution → Résultat → Appel à l'action
                  </p>
                </div>
                
                <div className="bg-background p-4 rounded">
                  <strong>Posts inspirants</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Raconte ton parcours, tes galères, ta progression
                  </p>
                </div>
                
                <div className="bg-background p-4 rounded">
                  <strong>Carrousels informatifs</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Partage des étapes ou des conseils clairs (Instagram/LinkedIn)
                  </p>
                </div>
                
                <div className="bg-background p-4 rounded">
                  <strong>Stories quotidiennes</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Montre les coulisses, ton authenticité crée la proximité
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">📣 2. Le storytelling : ton atout le plus puissant</h3>
              <p className="mb-4">
                Le storytelling, c'est l'art de vendre sans vendre. C'est raconter ton parcours d'une façon qui 
                inspire ton audience à agir.
              </p>
              
              <div className="bg-primary/10 p-4 rounded">
                <p className="font-semibold mb-2">💬 Exemple :</p>
                <p className="italic text-sm">
                  "Quand j'ai lancé mon premier produit digital, j'ai eu peur que personne n'achète. 
                  J'ai persévéré, j'ai testé, et aujourd'hui je vis de ce que j'aime. Si je l'ai fait, 
                  toi aussi tu peux."
                </p>
              </div>
              
              <p className="mt-3 text-sm">
                👉 Chaque post de ton histoire devient une porte d'entrée vers ton produit.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">💌 3. L'email marketing sans budget</h3>
              <p>
                Tu peux démarrer gratuitement avec MailerLite ou Systeme.io. Même une petite liste (20 à 100 personnes) 
                peut t'apporter des ventes si ton message est bien ciblé.
              </p>
              
              <div className="bg-background border-l-4 border-primary pl-4 py-3">
                <p className="font-semibold mb-2">📧 Séquence gratuite type :</p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Email 1 (Jour 1)</strong> — Annonce & valeur : "Je prépare quelque chose pour t'aider à lancer ton produit."</li>
                  <li><strong>Email 2 (Jour 3)</strong> — Offre & teasing : "Tu veux découvrir la méthode que j'utilise ?"</li>
                  <li><strong>Email 3 (Jour 5)</strong> — Lancement officiel : "C'est en ligne 🎉 ! Voici ton accès immédiat."</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">🤝 4. Les collaborations & partenariats</h3>
              <p>
                Les partenariats sont un levier puissant et souvent négligé. Collabore avec des micro-créateurs 
                qui partagent ton audience cible.
              </p>
              
              <div className="bg-accent/10 p-4 rounded">
                <p className="font-semibold mb-2">💬 Exemples :</p>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Fais un live commun Instagram avec un autre créateur</li>
                  <li>Échange une interview courte sur TikTok ou YouTube</li>
                  <li>Partage mutuellement vos liens dans vos stories</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">📆 6. Le teasing stratégique</h3>
              <p>Créer l'attente est un art. Avant ton lancement, parle de ton produit sans le vendre. Fais monter la curiosité.</p>
              
              <div className="bg-primary/10 p-4 rounded">
                <p className="font-semibold mb-2">💬 Exemples de teasing efficaces :</p>
                <ul className="space-y-1 text-sm">
                  <li>• "Je travaille sur un projet qui pourrait changer ta façon de créer en ligne 👀"</li>
                  <li>• "3 jours avant le grand lancement… tu es prêt ?"</li>
                  <li>• "Je vous montre demain comment j'ai créé ce produit de A à Z"</li>
                </ul>
              </div>
              
              <div className="bg-accent/10 p-3 rounded mt-3 border-l-4 border-accent">
                <p className="text-sm font-semibold">💡 Astuce pro :</p>
                <p className="text-sm">Les gens adorent suivre un processus. Montre-leur les coulisses plutôt que le produit final.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">📊 7. La preuve sociale gratuite</h3>
              <p>Tu peux créer de la preuve sociale même sans clients au départ :</p>
              
              <ul className="space-y-2">
                <li>• Montre tes résultats personnels ("Voici ce que j'ai obtenu grâce à cette méthode")</li>
                <li>• Partage des retours de testeurs ou d'amis qui ont essayé ton produit</li>
                <li>• Mets en avant des exemples avant/après ou des messages de remerciement</li>
              </ul>
              
              <div className="bg-accent/10 p-3 rounded mt-3 border-l-4 border-accent">
                <p className="text-sm font-semibold">💬 Astuce pro :</p>
                <p className="text-sm">La preuve sociale, c'est la clé de la confiance. Sans elle, même la meilleure offre passe inaperçue.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🧭 8. La régularité et la discipline</h3>
              <p className="mb-3">
                La vraie différence entre ceux qui réussissent et ceux qui abandonnent ? 
                👉 <strong>La constance</strong>.
              </p>
              <p className="text-sm">
                Même sans budget, si tu publies, engages et échanges chaque semaine, tes résultats s'accumulent.
              </p>
              
              <div className="bg-accent/10 p-3 rounded mt-4 border-l-4 border-accent">
                <p className="text-sm font-semibold">💡 Astuce coach :</p>
                <p className="text-sm">
                  La vente, c'est une relation. Crée du lien chaque jour, la conversion viendra naturellement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent">
          <CardHeader>
            <CardTitle className="text-2xl">🌟 Conclusion inspirante</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Bravo 🎉 Tu viens de poser les fondations solides de ton futur digital. Tu sais maintenant comment 
              penser comme un marketeur, agir comme un créateur, et vendre comme un professionnel.
            </p>
            
            <p>
              Mais souviens-toi : le succès ne vient pas en une nuit. Il vient de la constance, de l'apprentissage 
              continu et du passage à l'action.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <p className="font-semibold text-lg mb-3">
                Chaque post que tu publies, chaque test que tu lances, chaque client que tu aides te rapproche 
                de ton indépendance.
              </p>
              <p className="italic">
                Ne t'arrête pas ici. Continue à créer, apprendre, ajuster, et partager. 
                Ton aventure digitale ne fait que commencer 🚀
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">📝 Mini-exercice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-3">
              <li>Liste les 3 canaux gratuits que tu veux exploiter cette semaine (ex : TikTok, Email, Collaboration).</li>
              <li>Planifie une action par jour sur chaque canal.</li>
              <li>Note le retour après 7 jours : vues, interactions, messages, ventes potentielles.</li>
            </ol>
            
            <div className="bg-accent/10 p-4 rounded border-l-4 border-accent mt-6">
              <p className="italic text-sm">
                💬 Souviens-toi : tu n'as pas besoin de gros moyens. Tu as besoin d'une stratégie claire, 
                d'un message fort et d'une présence constante. C'est ainsi que les plus grands créateurs ont 
                commencé : avec une idée, un téléphone et de la persévérance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  );
};

export default Module5;
