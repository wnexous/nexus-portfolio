import "@/styles/index.css";
import type { Metadata } from "next";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Nexus",
  description: "Nexus - Andre Dal Negro",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="font-poppins">{children}</body>
      </Providers>
    </html>
  );
}
