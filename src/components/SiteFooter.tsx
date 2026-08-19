import { Facebook, Instagram, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl text-primary">Vera's Boutique</h2>
          <p className="mt-2 text-muted-foreground">Tweedehands dameskleding</p>
          <p className="text-muted-foreground">Zandstraat 44</p>
          <p className="text-muted-foreground">6591 CX Gennep</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Openingstijden</h3>
          <ul className="mt-2 text-muted-foreground">
            <li>Donderdag 10:00 – 17:00</li>
            <li>Vrijdag 10:00 – 17:00</li>
            <li>Zaterdag 10:00 – 17:00</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <a
            href="tel:+31614208799"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-blush px-5 py-3 font-medium transition-transform hover:scale-105"
          >
            <Phone className="size-5" /> 06 14208799
          </a>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="rounded-full bg-background p-3 shadow-soft transition-transform hover:scale-110"
            >
              <Facebook className="size-6 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="rounded-full bg-background p-3 shadow-soft transition-transform hover:scale-110"
            >
              <Instagram className="size-6 text-primary" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-muted-foreground">
        © {new Date().getFullYear()} Vera's Boutique · Gennep
      </div>
    </footer>
  );
}
