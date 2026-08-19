import { createFileRoute } from "@tanstack/react-router";
import { gallery } from "@/lib/images";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/galerij")({
  component: Galerij,
  head: () => ({
    meta: [
      { title: "Foto galerij | Vera's Boutique Gennep" },
      {
        name: "description",
        content:
          "Bekijk foto's van Vera's Boutique in Gennep: de winkel, het interieur en onze wisselende collectie tweedehands dameskleding.",
      },
      { property: "og:title", content: "Foto galerij | Vera's Boutique Gennep" },
      { property: "og:description", content: "Foto's van onze winkel, het interieur en de kleding." },
      { property: "og:url", content: "/galerij" },
    ],
    links: [{ rel: "canonical", href: "/galerij" }],
  }),
});

function Galerij() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <h1 className="text-4xl text-primary sm:text-5xl">Foto galerij</h1>
        <p className="mt-5 max-w-2xl text-xl">
          Een kijkje in onze winkel in Gennep: het interieur, de rekken en de sfeer.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((img, i) => (
          <Reveal key={img.src} delay={(i % 3) * 90}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-72 w-full rounded-3xl object-cover shadow-card transition-transform hover:scale-[1.02]"
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
