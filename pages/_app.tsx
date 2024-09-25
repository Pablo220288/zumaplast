import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

//Framer Motion
import { motion, AnimatePresence } from "framer-motion";

//Fonts
import { Outfit } from "next/font/google";

//Router
import { useRouter } from "next/router";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <main className={outfit.className}>
      <NavBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.3 }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
