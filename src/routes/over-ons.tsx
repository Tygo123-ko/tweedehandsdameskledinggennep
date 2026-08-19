import { createFileRoute } from "@tanstack/react-router";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/over-ons")({
  component: OverOns,
  head: () => ({
    meta: [
      { title: "Over ons | Vera's Boutique Gennep" },
      {
        name: "description",
        content:
          "Maak kennis met Vera's Boutique in Gennep: een gezellige tweedehands kledingwinkel met persoonlijke aandacht voor elke klant.",
      },
      { property: "og:title", content: "Over ons | Vera's Boutique Gennep" },
      {
        property: "og:description",
        content: "Een gezellige tweedehands kledingwinkel in Gennep met persoonlijke service.",
      },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
});

function OverOns() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Reveal>
        <h1 className="text-4xl text-primary sm:text-5xl">Over Vera's Boutique</h1>
        <p className="mt-6 text-xl leading-relaxed">
          Vera's Boutique is een gezellige tweedehands kledingwinkel in het centrum van Gennep. U
          mag rustig rondkijken, alles passen en zoveel vragen stellen als u wilt.
        </p>
        <p className="mt-4 text-xl leading-relaxed">
          Onze collectie wisselt voortdurend, omdat wij dagelijks mooie kleding binnenkrijgen. Van
          klassieke blouses en jurken tot warme jassen, schoenen en sieraden — alles zorgvuldig
          uitgezocht, netjes en overzichtelijk op maat gesorteerd.
        </p>
        <p className="mt-4 text-xl leading-relaxed">
          Hier vindt meest goede en goedkoopste kleding stukken, alle kleding zit er nog goed uit als nieuw
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {[
          { src: photos.interior, alt: "Overzicht van de winkel met kledingrekken en sieraden" },
          { src: photos.entrance, alt: "De ingang van de winkel met etalage" },
          { src: photos.counter, alt: "De toonbank met accessoires en sieraden" },
          { src: photos.shoes, alt: "Schoenenkast met laarzen en pumps" },
        ].map((img, i) => (
          <Reveal key={img.src} delay={i * 90}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-72 w-full rounded-3xl object-cover shadow-card"
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
