import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SYNAPTO SYSTEMS",
  description:
    "Learn how SYNAPTO SYSTEMS helps international founders connect company formation, tax, payments, and compliance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
