import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import BrandLogo from "@/components/BrandLogo";

const FOOTER_GROUPS = [
  {
    title: "Services",
    links: [
      { label: "USA LLC formation", href: "/usa-llc" },
      { label: "UK LTD formation", href: "/uk-ltd" },
      { label: "EIN without SSN", href: "/ein-without-ssn" },
      { label: "ITIN processing", href: "/itin-processing" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Resources & blog", href: "/resources" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Cancellation policy", href: "/legal/cancellation-policy" },
      { label: "Privacy policy", href: "/legal/privacy-policy" },
      { label: "Terms of service", href: "/legal/terms" },
      { label: "Refund policy", href: "/legal/refund-policy" },
      { label: "Cookie policy", href: "/legal/cookie-policy" },
      { label: "Cookie settings", href: "/legal/cookie-settings" },
    ],
  },
];
const socialClass =
  "grid size-9 place-items-center rounded-full border border-[var(--fm-border)] text-[var(--fm-text-secondary)] transition-colors hover:bg-[var(--fm-surface-raised)] hover:text-[var(--fm-text-primary)]";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--fm-border)] bg-[var(--fm-graphite-deep)] text-[var(--fm-text-secondary)]">
      <div className="mx-auto max-w-[1400px] px-6 pb-7 pt-14 sm:px-8 lg:px-12 lg:pt-16">
        <div className="grid gap-x-8 gap-y-10 border-b border-[var(--fm-border)] pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <section className="sm:col-span-2 lg:col-span-1">
            <BrandLogo className="inline-flex" imageClassName="h-9 w-auto" />
            <p className="mt-5 max-w-[270px] text-sm leading-6">
              Business formation and operational support for founders building across borders.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a href="https://www.instagram.com/synaptosystems/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
                <InstagramLogo size={17} />
              </a>
              <a href="https://www.facebook.com/synaptosystems/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
                <FacebookLogo size={17} />
              </a>
              <a href="https://www.linkedin.com/company/synapto-systems/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialClass}>
                <LinkedinLogo size={17} />
              </a>
              <a href="https://www.youtube.com/@SynaptoSystems" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialClass}>
                <YoutubeLogo size={17} />
              </a>
            </div>
          </section>

          {FOOTER_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="mb-4 text-sm font-bold text-[var(--fm-text-primary)]">{group.title}</h2>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13.5px] transition-colors hover:text-[var(--fm-text-primary)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section>
            <h2 className="mb-4 text-sm font-bold text-[var(--fm-text-primary)]">Support</h2>
            <p className="mb-4 max-w-[240px] text-[13px] leading-6">
              Questions about an application or an existing service? Contact our team.
            </p>
            <div className="flex flex-col gap-3 text-[13.5px] font-semibold">
              <a href="mailto:synaptosystemsofficial@gmail.com" className="hover:text-[var(--fm-text-primary)]">
                synaptosystemsofficial@gmail.com
              </a>
              <a href="tel:+14064792101" className="hover:text-[var(--fm-text-primary)]">
                +1 406 4792101
              </a>
              <a href="tel:+923173070894" className="hover:text-[var(--fm-text-primary)]">
                +92 317 3070894
              </a>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[760px] text-xs leading-5 text-[var(--fm-text-tertiary)]">
            SYNAPTO SYSTEMS is not a law firm and does not provide legal advice. Services may involve independent third-party providers.
          </p>
          <p className="shrink-0 text-xs text-[var(--fm-text-tertiary)]">
            © 2026 SYNAPTO SYSTEMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
