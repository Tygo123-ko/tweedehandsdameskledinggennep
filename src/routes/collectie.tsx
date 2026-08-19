import { createFileRoute, Link } from "@tanstack/react-router";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/collectie")({
  component: Collectie,
  head: () => ({
    meta: [
      { title: "Collectie | Tweedehands dameskleding in Gennep" },
      {
        name: "description",
        content:
          "Bekijk onze collectie tweedehands dameskleding: blouses, jurken, broeken, jassen, schoenen en accessoires in Gennep.",
      },
      { property: "og:title", content: "Collectie | Vera's Boutique Gennep" },
      {
        property: "og:description",
        content: "Blouses, jurken, broeken, jassen, schoenen en accessoires — steeds wisselend.",
      },
      { property: "og:url", content: "/collectie" },
    ],
    links: [{ rel: "canonical", href: "/collectie" }],
  }),
});

const categorieen = [
  { titel: "Blouses", tekst: "Van klassiek tot kleurrijk, in alle maten. Prijzen tussen € 7,50 en € 9,50.", src: photos.rackWall },
  { titel: "Jurken", tekst: "Voor elke dag en voor bijzondere gelegenheden. Prijzen tussen € 9,50 en € 12,50.", src: photos.entrance },
  { titel: "Broeken", tekst: "Comfortabele pantalons, jeans en rokken. Prijzen tussen € 7,50 en € 9,50.", src: photos.archway },
  { titel: "Jassen", tekst: "Warme mantels, vesten en zomerjasjes. Prijzen tussen € 14,50 en € 24,50.", src: photos.coats },
  { titel: "Schoenen", tekst: "Laarzen, pumps en nette instappers.", src: photos.shoes },
  { titel: "Accessoires", tekst: "Sieraden, tassen, riemen en sjaals.", src: photos.belts },
];

function Collectie() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <h1 className="text-4xl text-primary sm:text-5xl">Onze collectie</h1>
        <p className="mt-5 max-w-2xl text-xl">
          Onze collectie wisselt voortdurend. Hieronder ziet u wat u zoal bij ons kunt vinden — kom gerust
          langs om de nieuwste binnengekomen kleding te bekijken.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categorieen.map((c, i) => (
          <Reveal key={c.titel} delay={i * 80}>
            <article className="h-full overflow-hidden rounded-3xl bg-background shadow-soft ring-1 ring-border transition-transform hover:-translate-y-1">
              <img src={c.src} alt={c.titel} loading="lazy" className="h-60 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl">{c.titel}</h2>
                <p className="mt-2 text-muted-foreground">{c.tekst}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 rounded-3xl bg-mint p-9 text-center">
          <h2 className="text-3xl text-primary">Iets moois gezien?</h2>
          <p className="mt-3 text-xl">Bel ons gerust of kom langs tijdens onze openingstijden.</p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-primary px-9 py-4 text-lg font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            Naar contact
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
