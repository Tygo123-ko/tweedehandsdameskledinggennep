import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Sparkles, Tag } from "lucide-react";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vera's Boutique | Tweedehands Dameskleding in Gennep" },
      {
        name: "description",
        content:
          "Ontdek stijlvolle tweedehands dameskleding bij Vera's Boutique in Gennep. Betaalbare mode, persoonlijke service en een steeds wisselende collectie.",
      },
      { property: "og:title", content: "Vera's Boutique | Tweedehands Dameskleding in Gennep" },
      {
        property: "og:description",
        content: "Betaalbare tweedehands dameskleding met persoonlijke service in Gennep.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const redenen = [
  { icon: Tag, titel: "Betaalbare prijzen", tekst: "Mooie kleding voor een vriendelijke prijs." },
  { icon: Leaf, titel: "Duurzame keuze", tekst: "Kleding krijgt bij ons een tweede leven." },
  { icon: Sparkles, titel: "Unieke kledingstukken", tekst: "Vaak maar één exemplaar per maat." },
  { icon: Heart, titel: "service", tekst: "u kunt snuffelen in een rustige ontspannen sfeer. alle kleding hangt op maat" },
];

function Index() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <h1 className="text-4xl leading-tight text-primary sm:text-5xl">Welkom bij Vera's Boutique</h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed">
              Bij Vera's Boutique in Gennep vind je mooie tweedehands dameskleding voor een betaalbare prijs.
              Wij geloven dat mooie kleding niet nieuw hoeft te zijn. Kom gezellig langs en ontdek onze
              steeds wisselende collectie.
            </p>
            <Link
              to="/collectie"
              className="mt-8 inline-block rounded-full bg-primary px-9 py-4 text-lg font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              Bekijk de collectie
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={photos.storefront}
              alt="De gevel van Vera's Boutique in Gennep met etalage vol dameskleding"
              width={2000}
              height={1499}
              className="w-full rounded-3xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="text-center text-3xl text-primary sm:text-4xl">Waarom tweedehands?</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {redenen.map((r, i) => (
            <Reveal key={r.titel} delay={i * 100}>
              <article className="h-full rounded-3xl bg-background p-7 shadow-soft ring-1 ring-border transition-transform hover:-translate-y-1">
                <span className="inline-flex rounded-2xl bg-mint p-3">
                  <r.icon className="size-7 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-2xl">{r.titel}</h3>
                <p className="mt-2 text-muted-foreground">{r.tekst}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-blush/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <Reveal>
            <img
              src={photos.archway}
              alt="Doorkijk in de winkel met kledingrekken en een grote spiegel"
              className="w-full rounded-3xl object-cover shadow-card"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl text-primary sm:text-4xl">Even rustig rondkijken</h2>
            <p className="mt-5 text-xl">
              Onze winkel is licht, overzichtelijk en gezellig ingericht. Neem gerust de tijd, pas op uw
              gemak en vraag ons om advies. en een praatje hoort er gewoon bij.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-block rounded-full bg-background px-9 py-4 text-lg font-medium shadow-soft transition-transform hover:scale-105"
            >
              Bekijk openingstijden
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
