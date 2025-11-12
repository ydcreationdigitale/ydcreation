import ModuleLayout from "@/components/ModuleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Module2 = () => {
  return (
    <ModuleLayout prevModule="/module1" prevLabel="Module 1" nextModule="/module3" nextLabel="Module 3">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">🎯 Module 2</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Trouver sa niche et sa cible
          </h2>
          <p className="text-xl text-muted-foreground">
            ✅ Objectif : Identifier ta niche, comprendre ton public cible et positionner ton offre de manière claire et irrésistible.
          </p>
        </div>

        <Card className="border-l-4 border-primary">
          <CardContent className="p-6">
            <p className="text-lg italic">
              "Si tu t'adresses à tout le monde, tu n'intéresses personne. Mais si tu t'adresses à quelqu'un en particulier, tu deviens inoubliable."
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🧩 1. Comprendre la notion de niche</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Une niche, c'est un sous-ensemble d'un marché : un public précis avec un problème spécifique et un objectif clair. 
              C'est là que ton message devient percutant, parce que tu cibles les besoins réels de ton audience.
            </p>
            
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">💡 Exemple :</h3>
              <p className="text-red-500 mb-2">❌ "Je vends des formations."</p>
              <p className="text-green-600">✅ "J'aide les freelances à créer leur première formation en ligne et à vendre sans pub."</p>
              <p className="mt-4 text-sm">Tu vois la différence ? La deuxième phrase est plus spécifique, plus crédible, plus attractive.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🔍 2. Pourquoi la niche est essentielle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Trouver ta niche t'apporte 3 bénéfices majeurs :</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="font-bold text-primary">Clarté —</div>
                <div>tu sais exactement à qui tu t'adresses.</div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-primary">Crédibilité —</div>
                <div>tu deviens une référence dans ton domaine.</div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-primary">Conversion —</div>
                <div>ton message attire ceux qui ont vraiment besoin de toi.</div>
              </div>
            </div>
            
            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent mt-4">
              <p className="italic">💬 Les créateurs qui réussissent ne sont pas les plus connus, mais les plus ciblés.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💡 3. Comment identifier ta niche idéale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Une niche efficace se situe à la croisée de 3 cercles :</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🔥</div>
                <h3 className="font-bold mb-2">Ce que tu aimes</h3>
                <p className="text-sm">Passion</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🎓</div>
                <h3 className="font-bold mb-2">Ce que tu maîtrises</h3>
                <p className="text-sm">Compétence</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-bold mb-2">Ce que les gens recherchent</h3>
                <p className="text-sm">Demande réelle</p>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">🧠 Étapes concrètes :</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Liste tes passions : ce qui t'inspire, ce dont tu pourrais parler sans te lasser.</li>
                <li>Note tes compétences : professionnelles ou personnelles, tout ce que tu sais faire.</li>
                <li>Analyse la demande : cherche ce que les gens veulent vraiment.</li>
              </ol>
            </div>

            <div>
              <h3 className="font-bold mb-3">🧰 Outils gratuits pour valider ta niche :</h3>
              <ul className="space-y-2">
                <li>• <strong>Google Trends</strong> → observe les recherches populaires</li>
                <li>• <strong>Reddit / Quora</strong> → lis les questions que les gens posent</li>
                <li>• <strong>TikTok / YouTube</strong> → regarde les vidéos qui explosent dans ton thème</li>
                <li>• <strong>Instagram</strong> → repère les hashtags les plus engagés</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💡 Astuce pro :</p>
              <p>Ne cherche pas la niche parfaite, choisis celle que tu peux servir le mieux.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">👥 4. Définir ton avatar client (ta cible)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Ton avatar client, c'est ton client idéal. C'est une personne réelle ou imaginaire à qui tu parles comme à un ami.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-bold mb-4">💬 Exemple d'avatar client :</h3>
              <div className="space-y-2">
                <p><strong>Prénom :</strong> Léa</p>
                <p><strong>Âge :</strong> 27 ans</p>
                <p><strong>Statut :</strong> graphiste freelance</p>
                <p><strong>Problème :</strong> elle veut générer des revenus stables sans dépendre de ses clients</p>
                <p><strong>Objectif :</strong> créer un produit digital pour diversifier ses revenus</p>
                <p><strong>Peurs :</strong> "Et si personne n'achète ?"</p>
                <p><strong>Rêve :</strong> vivre de sa créativité, librement</p>
              </div>
            </div>

            <p className="italic">Quand tu connais ton avatar, ton marketing devient naturel. Tu ne vends plus, tu converses.</p>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💬 Astuce coach :</p>
              <p>Écris toujours ton contenu comme si tu t'adressais à une seule personne.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">💎 7. Positionner ton offre de manière unique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Ton positionnement, c'est ce qui te distingue. C'est la promesse que tu fais à ton client.</p>
            
            <div className="bg-secondary/50 p-6 rounded-lg">
              <p className="font-bold mb-2">💬 Exemple :</p>
              <p className="text-lg">"J'aide les créateurs à transformer leurs idées en produits digitaux rentables, même sans budget pub."</p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold mb-3">Ton offre doit être :</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="font-bold text-primary">Claire →</div>
                  <div>ton client comprend immédiatement ce que tu fais</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-bold text-primary">Crédible →</div>
                  <div>tu inspires confiance</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-bold text-primary">Désirable →</div>
                  <div>elle résout un vrai problème</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">💡 Astuce pro :</p>
              <p>Ton positionnement n'est pas figé. Il évolue avec ton expérience et ton audience.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">📝 Mini-exercice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-3">
              <li>Liste tes 3 passions principales.</li>
              <li>Écris une phrase simple : "J'aide [type de client] à [objectif] sans [obstacle]."</li>
              <li>Imagine ton client idéal : âge, métier, motivation, blocage.</li>
              <li>Choisis un canal où tu vas commencer à tester ton message (Instagram, TikTok, LinkedIn…).</li>
            </ol>
            
            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent mt-6">
              <p className="italic">💬 Souviens-toi : ta niche n'est pas une prison, c'est ton tremplin. Tu peux toujours l'affiner, la faire évoluer et la rendre unique à ton image.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  );
};

export default Module2;
