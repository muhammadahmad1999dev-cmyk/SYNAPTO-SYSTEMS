import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Guides & Blog | SYNAPTO SYSTEMS",
    template: "%s | SYNAPTO SYSTEMS",
  },
  description:
    "Practical guides for international founders covering company formation, banking, tax, and compliance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
