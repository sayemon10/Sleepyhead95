import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Janka's Portfolio",
  description: "Frontend developer, graphic designer, and artist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
