import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CookiePreferences from "@/components/legal/CookiePreferences";
import { SectionLabel } from "@/components/ui/design-system";

type PolicySection = { title: string; paragraphs: string[] };
type Policy = { title: string; summary: string; sections: PolicySection[] };

const policies: Record<string, Policy> = {
  "privacy-policy": {
    title: "Privacy Policy",
    summary:
      "How SYNAPTO SYSTEMS handles information shared through accounts, applications, documents, and support conversations.",
    sections: [
      {
        title: "Information we collect",
        paragraphs: [
          "The information we receive depends on the service you use. It can include contact and account details, company and application information, documents you choose to upload, and messages sent to our team.",
          "When you use the website, basic technical information such as browser, device, and security logs may also be processed to operate and protect the service.",
        ],
      },
      {
        title: "How information is used",
        paragraphs: [
          "Information is used to respond to requests, prepare and manage selected services, communicate about applications, process payments, maintain account security, and meet applicable recordkeeping obligations.",
          "We aim to request information relevant to the service you selected. Do not send passwords or information that a form does not request.",
        ],
      },
      {
        title: "Service providers and disclosures",
        paragraphs: [
          "Some services depend on independent payment, identity, filing, communication, or technology providers. Information may be shared with a provider when needed to carry out your request or when disclosure is required by law.",
          "Providers may process information under their own privacy notices and terms. Review those terms before using a third-party service.",
        ],
      },
      {
        title: "Retention and security",
        paragraphs: [
          "Information is kept for as long as it is reasonably needed to deliver and support a service, maintain required records, resolve disputes, and protect the website and its users.",
          "We use administrative and technical safeguards appropriate to the information we handle. No online transmission or storage method can be guaranteed completely secure.",
        ],
      },
      {
        title: "Your choices and requests",
        paragraphs: [
          "You can contact us to ask about, correct, or request deletion of personal information associated with your account. We may need to verify your identity and may retain information where a legal or service obligation applies.",
          "Cookie choices can be reviewed on the Cookie Settings page. Some essential storage is required for account and security features.",
        ],
      },
      {
        title: "International processing and contact",
        paragraphs: [
          "Because services may involve multiple countries and providers, information may be processed outside your country of residence. Where applicable, we use appropriate safeguards for these transfers.",
          "For privacy questions or requests, email support@synaptosystems.com and include the email address associated with your account.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    summary: "The basic terms for using the SYNAPTO SYSTEMS website, account, and support services.",
    sections: [
      {
        title: "Using our services",
        paragraphs: [
          "SYNAPTO SYSTEMS provides business setup and operational support described on the relevant service page and in your order details. The exact scope, deliverables, and applicable fees depend on the service selected.",
          "We are not a law firm, government agency, bank, or tax authority, and our services do not constitute legal, tax, or financial advice.",
        ],
      },
      {
        title: "Accounts and information",
        paragraphs: [
          "You are responsible for providing accurate, complete, and current information, keeping your sign-in credentials secure, and telling us about changes that affect an active request.",
          "You may use the website only for lawful purposes and may not interfere with its security, access another person's account, or submit information you are not authorized to provide.",
        ],
      },
      {
        title: "Applications and outcomes",
        paragraphs: [
          "You authorize us to use the information and documents you submit to perform the service you requested and to share them with relevant providers or authorities when necessary for that service.",
          "Government agencies and third-party providers make their own decisions and control their own processing times. We cannot guarantee approval, a particular outcome, or a processing date outside our control.",
        ],
      },
      {
        title: "Fees and payment",
        paragraphs: [
          "The service page, checkout, and order confirmation describe the selected service and charges presented for it. Review those details before submitting payment.",
          "Government charges, payment-provider fees, currency conversion, and other third-party costs may be separate where identified in the service or checkout details.",
        ],
      },
      {
        title: "Third-party providers",
        paragraphs: [
          "A service may rely on independent providers. Their availability, eligibility requirements, decisions, terms, and privacy practices are controlled by those providers, not by SYNAPTO SYSTEMS.",
        ],
      },
      {
        title: "Service changes and questions",
        paragraphs: [
          "We may update website content or service availability as requirements change. Any change to an active order will be communicated through the account or contact details associated with it.",
          "For questions about these terms or an order, contact support@synaptosystems.com.",
        ],
      },
    ],
  },
  "refund-policy": {
    title: "Refund Policy",
    summary: "How to ask us to review a refund request and which service costs may affect the decision.",
    sections: [
      {
        title: "Requesting a review",
        paragraphs: [
          "If you believe a charge should be refunded, contact support@synaptosystems.com using the email on your order. Include your order or application reference and a short explanation.",
          "We review requests against the service scope, order details, work already completed, and costs already committed on your behalf.",
        ],
      },
      {
        title: "Work already performed",
        paragraphs: [
          "A refund is not automatic once preparation, review, filing, or other work has begun. Any amount depends on work completed and the terms shown for the selected service.",
        ],
      },
      {
        title: "Government and third-party charges",
        paragraphs: [
          "Government filing charges and costs charged by independent providers may be non-refundable once submitted or incurred. Separate charges are identified in service or checkout details where applicable.",
        ],
      },
      {
        title: "Review and payment method",
        paragraphs: [
          "Our support team will review the information and reply using the contact details on the order. Approved refunds are returned through the original payment method when available; the payment provider may control when the credit appears.",
        ],
      },
      {
        title: "Order-specific terms",
        paragraphs: [
          "Some services have additional cancellation or refund terms shown at checkout or in the order confirmation. Review those terms alongside this page and contact us if anything is unclear before work begins.",
        ],
      },
    ],
  },
  "cancellation-policy": {
    title: "Cancellation Policy",
    summary:
      "How to submit a cancellation request and what to consider when work or third-party processing has started.",
    sections: [
      {
        title: "How to request cancellation",
        paragraphs: [
          "Email support@synaptosystems.com from the address on your order. Include your order or application reference and ask us to stop the service.",
          "A request is not complete until our team confirms it. If a filing or provider process is time-sensitive, contact us as soon as possible.",
        ],
      },
      {
        title: "Work in progress",
        paragraphs: [
          "We will check whether preparation, review, submission, or another service step has started. Work completed before the request may affect any refund under the Refund Policy and your order terms.",
        ],
      },
      {
        title: "External fees and provider processes",
        paragraphs: [
          "Once a government charge or third-party fee has been submitted or incurred, it may not be recoverable. Independent providers may also have their own cancellation processes and terms.",
        ],
      },
      {
        title: "After confirmation",
        paragraphs: [
          "We will confirm the cancellation and any next steps by email. Keep that confirmation with your order records. For any applicable refund, see the Refund Policy.",
        ],
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    summary: "What browser storage is used for on this website and how to manage optional preferences.",
    sections: [
      {
        title: "Cookies and local storage",
        paragraphs: [
          "Cookies and similar browser storage allow a website to remember information between requests. SYNAPTO SYSTEMS may use them for account sessions, security, saved choices, and site operation.",
        ],
      },
      {
        title: "Essential storage",
        paragraphs: [
          "Essential storage supports core functions such as authentication, security, and remembering settings. These features may not work correctly if essential storage is blocked.",
        ],
      },
      {
        title: "Analytics and optional storage",
        paragraphs: [
          "Where analytics tools are enabled, optional storage can help us understand how visitors use the site and which pages need improvement. You can change this preference on the Cookie Settings page.",
        ],
      },
      {
        title: "Managing browser choices",
        paragraphs: [
          "Use Cookie Settings to save your analytics choice on this device. You can also clear or block storage through your browser settings; doing so may affect account and site features.",
        ],
      },
      {
        title: "Changes and questions",
        paragraphs: [
          "The technologies used on the site may change as services evolve. This page will be updated when those changes affect how browser storage is used. Contact support@synaptosystems.com with questions.",
        ],
      },
    ],
  },
  "cookie-settings": {
    title: "Cookie Settings",
    summary:
      "Choose whether optional analytics storage can be used on this device. Essential storage remains active for core site features.",
    sections: [
      {
        title: "Manage your preferences",
        paragraphs: [
          "Your selection is saved in this browser and can be changed whenever you return to this page. Clearing browser storage resets the saved choice.",
        ],
      },
      {
        title: "What each choice means",
        paragraphs: [
          "Essential storage supports login sessions, security, and site preferences. Analytics storage is optional and, where enabled, helps us understand site use.",
          "Read the Cookie Policy for more detail about browser storage on this website.",
        ],
      },
    ],
  },
};

const policyLinks = [
  { label: "Privacy", href: "/legal/privacy-policy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Refunds", href: "/legal/refund-policy" },
  { label: "Cancellation", href: "/legal/cancellation-policy" },
  { label: "Cookies", href: "/legal/cookie-policy" },
  { label: "Cookie settings", href: "/legal/cookie-settings" },
];

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = policies[slug];
  return {
    title: `${policy?.title ?? "Policies"} | SYNAPTO SYSTEMS`,
    description: policy?.summary ?? "Policies and service information for SYNAPTO SYSTEMS.",
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policies[slug];
  if (!policy) notFound();

  return (
    <main className="min-h-screen bg-[var(--fm-graphite-deep)] text-[var(--fm-text-primary)]">
      <section className="relative isolate overflow-hidden border-b border-[var(--fm-border)] bg-[radial-gradient(circle_at_85%_20%,color-mix(in_srgb,var(--fm-lime)_11%,transparent),transparent_32%),linear-gradient(135deg,var(--fm-graphite-deep)_0%,var(--fm-graphite)_100%)] px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-36">
        <div className="fm-page-hero-grid" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link
              href="/"
              className="ml-auto font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--fm-text-secondary)] transition-colors hover:text-[var(--fm-lime)]"
            >
              Back to site
            </Link>
          </div>
          <div className="mt-14 max-w-3xl">
            <SectionLabel>SYNAPTO SYSTEMS / Policies</SectionLabel>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--fm-text-primary)] sm:text-5xl">
              {policy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fm-text-secondary)] sm:text-lg sm:leading-8">
              {policy.summary}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-12">
        <aside className="h-fit lg:sticky lg:top-28">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--fm-lime)]">
            On this page
          </p>
          <nav aria-label="Policy sections" className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-1">
            {policy.sections.map((section, index) => (
              <a
                key={section.title}
                href={`#policy-section-${index + 1}`}
                className="rounded-[var(--fm-radius-sm)] px-3 py-2 text-sm leading-5 text-[var(--fm-text-secondary)] transition-colors hover:bg-[var(--fm-surface)] hover:text-[var(--fm-text-primary)]"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          {policy.sections.map((section, index) => (
            <section
              key={section.title}
              id={`policy-section-${index + 1}`}
              className="scroll-mt-28 border-b border-[var(--fm-border)] py-7 first:pt-0 last:border-b-0"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--fm-lime)]">
                Section {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold leading-snug text-[var(--fm-text-primary)] sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 max-w-3xl space-y-4 text-sm leading-7 text-[var(--fm-text-secondary)] sm:text-base sm:leading-8">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {slug === "cookie-settings" && <CookiePreferences />}

          <section className="border-t border-[var(--fm-border)] pt-7">
            <h2 className="font-display text-xl font-bold text-[var(--fm-text-primary)]">
              Related policies
            </h2>
            <nav aria-label="Related policies" className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {policyLinks
                .filter((link) => link.href !== `/legal/${slug}`)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-[var(--fm-lime-bright)] underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
            </nav>
            <p className="mt-6 text-sm leading-6 text-[var(--fm-text-tertiary)]">
              Need help understanding a service or order? Contact{" "}
              <a className="font-semibold text-[var(--fm-text-primary)] underline" href="mailto:support@synaptosystems.com">
                support@synaptosystems.com
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
