import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logs",
};

export default function LogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
