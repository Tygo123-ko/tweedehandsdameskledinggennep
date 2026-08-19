import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/collectie", label: "Collectie" },
  { to: "/galerij", label: "Foto galerij" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block font-display text-2xl text-primary sm:text-3xl">Vera's Boutique</span>
          <span className="block text-sm tracking-wide text-muted-foreground">Secondhand · Gennep</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdmenu">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-blush text-accent-foreground" }}
              className="rounded-full px-5 py-3 text-lg transition-colors hover:bg-mint"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          className="rounded-full border border-border p-3 transition-colors hover:bg-mint lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 lg:hidden" aria-label="Mobiel menu">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-blush" }}
              className="mt-2 block rounded-2xl px-5 py-4 text-lg transition-colors hover:bg-mint"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
