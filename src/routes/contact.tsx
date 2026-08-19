import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & openingstijden | Vera's Boutique Gennep" },
      {
        name: "description",
        content:
          "Contactgegevens en openingstijden van Vera's Boutique in Gennep. Bel 06 14208799 of kom langs op donderdag, vrijdag of zaterdag van 10:00 tot 17:00.",
      },
      { property: "og:title", content: "Contact | Vera's Boutique Gennep" },
      { property: "og:description", content: "Bel 06 14208799 of bezoek ons in Gennep." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <h1 className="text-4xl text-primary sm:text-5xl">Contact</h1>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-6 rounded-3xl bg-cream p-8 shadow-soft">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-7 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="text-2xl">Vera's Boutique</h2>
                <p className="text-xl text-muted-foreground">Gennep, Nederland</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 size-7 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="text-2xl">Telefoon</h2>
                <a
                  href="tel:+31614208799"
                  className="mt-2 inline-block rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                  06 14208799
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 size-7 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="text-2xl">Openingstijden</h2>
                <ul className="mt-2 text-xl text-muted-foreground">
                  <li>Donderdag 10:00 – 17:00</li>
                  <li>Vrijdag 10:00 – 17:00</li>
                  <li>Zaterdag 10:00 – 17:00</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <iframe
              title="Kaart met de locatie van Vera's Boutique in Gennep"
              src="https://www.openstreetmap.org/export/embed.html?bbox=5.95%2C51.68%2C6.00%2C51.71&layer=mapnik"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
