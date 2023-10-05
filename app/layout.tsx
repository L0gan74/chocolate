import Layout from "./components/layout/layout";
import "./styles/index.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <Layout>{children}</Layout>
  
      </body>
    </html>
  );
}