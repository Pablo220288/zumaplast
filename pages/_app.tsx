import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={outfit.className}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
