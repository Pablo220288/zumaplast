import React from "react";

import { WrapperProps } from "@/Types";
import Link from "next/link";
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io";

import { motion } from "framer-motion";
import { smoothIn } from "../animate";

export default function Wrapper({ className, children }: WrapperProps) {
  const socialIconsDesktop = "text-3xl  cursor-pointer text-Black";

  return (
    <section className={className}>
      <>{children}</>
      <div className="fixed bottom-5 right-5 hidden md:flex items-center flex-col gap-2">
        <motion.div
          variants={smoothIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Link className={socialIconsDesktop} href="#" target="_blank">
            <IoLogoWhatsapp />
          </Link>
        </motion.div>
        <motion.div
          variants={smoothIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Link
            className={socialIconsDesktop}
            href="https://www.instagram.com"
            target="_blank"
          >
            <IoLogoInstagram />
          </Link>
        </motion.div>
        <motion.div
          variants={smoothIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Link
            className={socialIconsDesktop}
            href="https://www.facebook.com"
            target="_blank"
          >
            <IoLogoFacebook />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
