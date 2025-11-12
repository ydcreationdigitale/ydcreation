import ModuleLayout from "@/components/ModuleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Module4 = () => {
  return (
    <ModuleLayout prevModule="/module3" prevLabel="Module 3" nextModule="/module5" nextLabel="Module 5">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">🌐 Module 4</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Construire sa présence en ligne
          </h2>
          <p className="text-xl text-muted-foreground">
            ✅ Objectif : Maîtriser les stratégies gratuites et payantes pour être visible et attirer ton audience.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💬 Stratégies gratuites pour vendre sans budget</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">
              Tu n'as pas besoin d'un budget pub pour faire tes premières ventes. Tu as besoin de créativité, 
              de régularité et d'une vraie stratégie de contenu.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🌱 1. Le contenu organique : ton levier de visibilité</h3>
              <p className="mb-4">
                Le contenu gratuit, c'est ton arme la plus puissante. Il t'aide à attirer les bonnes personnes, 
                sans dépenser un euro.
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="bg-background p-4 rounded">
                  <strong>TikTok / Reels / Shorts</strong>
                  <p className="text-sm text-muted-foreground">Vidéos courtes avec un conseil concret</p>
                  <p className="text-sm italic mt-1">Exemple : "3 erreurs que j'ai faites en lançant mon premier produit digital"</p>
                </div>
                
                <div className="bg-background p-4 rounded">
                  <strong>Carrousels Instagram / LinkedIn</strong>
                  <p className="text-sm text-muted-foreground">Étapes, mini-tutoriels, ou check-lists utiles</p>
                </div>
                
                <div className="bg-background p-4 rounded">
                  <strong>Stories</strong>
                  <p className="text-sm text-muted-foreground">Montre les coulisses, ton authenticité crée la connexion</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">💌 2. Email marketing gratuit</h3>
              <p className="mb-4">Créer une mini-liste email te permet de parler directement à ton audience.</p>
              
              <div className="space-y-2 mt-4">
                <p className="font-semibold">Plan simple :</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Offre un petit cadeau digital (guide, checklist, mini-formation)</li>
                  <li>Collecte des emails via un lien en bio</li>
                  <li>Envoie 3 emails : annonce et valeur → ton histoire + teasing → offre officielle</li>
                </ol>
              </div>
              
              <div className="bg-accent/10 p-3 rounded mt-4 border-l-4 border-accent">
                <p className="text-sm italic">💬 Ton email doit ressembler à une conversation, pas à une pub.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">🤝 3. Collaborations et partenariats</h3>
              <p>
                Les collaborations multiplient ta portée sans dépenser. Fais un live avec un autre créateur, 
                un échange de publications, ou une interview croisée.
              </p>
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent">
                <p className="font-semibold">💡 Astuce pro :</p>
                <p>Choisis des partenaires avec la même cible, mais une offre complémentaire.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">🧑‍🤝‍🧑 4. Les communautés et groupes</h3>
              <p>
                Facebook, Discord, Reddit, Slack — les communautés sont des mines d'or pour te faire connaître. 
                Apporte de la valeur avant de parler de ton offre.
              </p>
            </div>

            <div className="bg-accent/10 p-4 rounded border-l-4 border-accent">
              <p className="font-semibold">💡 Astuce pro :</p>
              <p>La crédibilité se construit par la répétition. Sois visible, sincère et constant.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💸 Stratégies payantes pour booster ton lancement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">
              Les publicités payantes ne sont pas réservées aux grandes marques. Bien utilisées, elles deviennent 
              ton accélérateur de croissance.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">📘 Meta Ads (Facebook & Instagram)</h3>
              <p className="mb-3">C'est la régie la plus complète pour les créateurs et freelances.</p>
              
              <div className="space-y-2">
                <p><strong>Format conseillé :</strong> Image carrée (1:1) ou vidéo courte (10-15s)</p>
                <p><strong>Budget minimal :</strong> 5 à 10 € / jour pendant 5 jours</p>
                <p><strong>Ciblage :</strong> Centres d'intérêt (marketing digital, freelances, entrepreneuriat...)</p>
              </div>
              
              <div className="bg-accent/10 p-3 rounded mt-4 border-l-4 border-accent">
                <p className="font-semibold text-sm">💬 Astuce pro :</p>
                <p className="text-sm">Fais 3 versions d'une même pub et observe celle qui attire le plus de clics (CTR {'>'} 1,5%).</p>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">🔍 Google Ads (Search)</h3>
              <p className="mb-3">Le levier du trafic à intention d'achat : les gens tapent déjà ce qu'ils veulent.</p>
              
              <div className="space-y-2">
                <p><strong>Exemples de mots-clés :</strong></p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
                  <li>"formation marketing digital freelance"</li>
                  <li>"créer un produit digital"</li>
                  <li>"ebook à vendre en ligne"</li>
                </ul>
                <p className="mt-3"><strong>Budget minimal :</strong> 10 à 20 € / jour pendant 5 jours</p>
              </div>
            </div>

            <div className="bg-accent/20 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">🎥 TikTok Ads</h3>
              <p className="mb-3">La plateforme la plus virale pour les produits digitaux. Le secret : l'authenticité.</p>
              
              <div className="space-y-2">
                <p><strong>Format :</strong> Vidéo 9-15s, spontanée, filmée au smartphone</p>
                <p><strong>Budget minimal :</strong> 20 € pour 3 jours de test</p>
                <p><strong>Contenu recommandé :</strong> Avant/Après, témoignage client, démonstration express</p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">🔁 Retargeting (reciblage)</h3>
              <p className="mb-3">80% des visiteurs n'achètent pas la première fois. Le retargeting te permet de les relancer automatiquement.</p>
              
              <div className="space-y-2">
                <p><strong>Principe :</strong> Tu installes un Pixel Meta ou un Tag Google Ads sur ton site</p>
                <p><strong>Budget minimal :</strong> 2 à 5 € / jour, sur 7 à 14 jours</p>
                <p><strong>Messages efficaces :</strong></p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
                  <li>"Tu étais à deux clics de ton lancement — ton offre t'attend encore !"</li>
                  <li>"Dernière chance pour profiter de l'offre à 30 €"</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">🧮 Exemple de budget type pour un lancement test</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Type de campagne</th>
                      <th className="text-center py-2">Durée</th>
                      <th className="text-right py-2">Budget total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Meta Ads test A/B</td>
                      <td className="text-center">7 jours</td>
                      <td className="text-right font-semibold">60 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Google Ads (intentions)</td>
                      <td className="text-center">7 jours</td>
                      <td className="text-right font-semibold">70 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">TikTok Ads viralité</td>
                      <td className="text-center">5 jours</td>
                      <td className="text-right font-semibold">40 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Retargeting (Meta Pixel)</td>
                      <td className="text-center">10 jours</td>
                      <td className="text-right font-semibold">30 €</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="py-2">Total campagne complète</td>
                      <td className="text-center">—</td>
                      <td className="text-right text-lg text-primary">≈ 200 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm italic">
                💡 Si tu obtiens ne serait-ce que 5 ventes à 40 €, tu doubles déjà ton budget investi.
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
              <li>Choisis 2 canaux gratuits (ex : Instagram + email).</li>
              <li>Note une action par jour (poster, répondre, collaborer).</li>
              <li>Observe les retours après une semaine.</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  );
};

export default Module4;
