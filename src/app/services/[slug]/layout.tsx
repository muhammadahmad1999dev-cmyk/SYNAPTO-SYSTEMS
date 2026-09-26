import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Service Details | SYNAPTO SYSTEMS",
    template: "%s | SYNAPTO SYSTEMS",
  },
  description:
    "Review service details and next steps for your SYNAPTO SYSTEMS business setup.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
