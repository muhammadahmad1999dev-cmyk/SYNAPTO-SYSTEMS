import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Business Services | SYNAPTO SYSTEMS",
    template: "%s | SYNAPTO SYSTEMS",
  },
  description:
    "Explore company formation, tax, banking, payment, and compliance services for international founders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
