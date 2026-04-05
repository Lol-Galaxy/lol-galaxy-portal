import Image from "next/image";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const APPS = [
  {
    name: "LoLSight",
    tagline: "Analyse stratégique pré-match",
    description:
      "Génère un rapport de draft personnalisé : champions à bannir, picks probables adverses et recommandations basées sur le SoloQ réel de chaque joueur.",
    href: process.env.LOLSIGHT_URL ?? "#",
    available: true,
    accentClass: "glow-blue",
    borderColor: "oklch(0.65 0.22 250 / 0.4)",
    badge: "Disponible",
    badgeColor: "text-[#60a5fa] bg-[#60a5fa1a]",
    icon: "⚔️",
    bgImage: null,
  },
  {
    name: "LoLCuriosity",
    tagline: "Statistiques personnelles avancées",
    description:
      "Analyse en profondeur ton historique de parties : archétype de jeu, duos, tilt champion, sessions et corrélation avec tes habitudes de vie.",
    href: process.env.LOLCURIOSITY_URL ?? "#",
    available: true,
    accentClass: "glow-gold",
    borderColor: "#C89B3C66",
    badge: "Disponible",
    badgeColor: "text-[#C89B3C] bg-[#C89B3C1a]",
    icon: "📊",
    bgImage: "/caitlyn-lolcuriosity.png",
  },
  {
    name: "LoL Self Improve",
    tagline: "Corrèle ta vie et tes perfs",
    description:
      "Bientôt — Mesure l'impact de ton sommeil, stress et énergie sur ton rang. Mini-jeux de dextérité et mémoire pour optimiser ta préparation.",
    href: null,
    available: false,
    accentClass: "glow-purple",
    borderColor: "oklch(0.55 0.25 290 / 0.3)",
    badge: "Bientôt",
    badgeColor: "text-[#c084fc] bg-[#c084fc1a]",
    icon: "🧠",
    bgImage: null,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-grid relative overflow-hidden">
      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.22 250) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.25 290) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-1.5 text-sm mb-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" style={{ boxShadow: "0 0 8px #4ade80" }} />
            Écosystème League of Legends
          </div>

          <h1 className="text-6xl font-bold tracking-tight mb-4">
            <span className="gradient-text">LoL Galaxy</span>
          </h1>

          <p className="text-xl max-w-xl mx-auto leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Des outils indépendants pour analyser, comprendre et progresser sur{" "}
            <span style={{ color: "var(--foreground)" }}>League of Legends</span>.
          </p>
        </header>

        {/* Cards */}
        <section className="grid gap-6 md:grid-cols-3">
          {APPS.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>
          <div className="flex items-center justify-center gap-6 mb-3">
            <a
              href="https://github.com/Alverel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github size={16} />
              Alverel
            </a>
          </div>
          <p className="text-xs opacity-50">LoL Galaxy n&apos;est pas affilié à Riot Games.</p>
        </footer>
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------

function AppCard({ app }: { app: (typeof APPS)[number] }) {
  const inner = (
    <div
      className={`relative rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-[1.02] ${app.available ? app.accentClass : ""}`}
      style={
        app.available
          ? { borderColor: app.borderColor, borderWidth: "1px", borderStyle: "solid" }
          : {}
      }
    >
      {/* Image de fond (si définie) */}
      {app.bgImage && (
        <>
          <Image
            src={app.bgImage}
            alt=""
            fill
            className="object-cover object-top"
            style={{ opacity: 0.18 }}
            aria-hidden
          />
          {/* Dégradé navy LoLCuriosity par-dessus l'image */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #0A142899 0%, #0A1428cc 45%, #0A1428f5 100%)",
            }}
          />
        </>
      )}

      {/* Contenu */}
      <div className="relative z-10 glass p-6 h-full flex flex-col" style={{ background: "transparent", border: "none" }}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{app.icon}</span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${app.badgeColor}`}>
            {app.badge}
          </span>
        </div>

        {/* Content */}
        <h2 className="text-xl font-bold mb-1">{app.name}</h2>
        <p className="text-sm font-medium mb-3" style={{ color: app.available ? app.borderColor.replace("66", "").replace("1a", "") : "var(--primary)" }}>
          {app.tagline}
        </p>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>
          {app.description}
        </p>

        {/* CTA */}
        <div className="mt-6">
          {app.available ? (
            <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: app.borderColor.replace("66", "").replace("1a", "") }}>
              Accéder <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
              En développement <ChevronRight size={14} />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (app.href && app.available) {
    return (
      <a href={app.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
        {inner}
      </a>
    );
  }

  return <div className="group h-full opacity-70">{inner}</div>;
}
