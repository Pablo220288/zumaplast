"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/Data/data";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = router.pathname;

  const menuVariants = {
    open: {
      scale: 40,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    closed: {
      scale: 0,
    },
  };

  const navLinkVariants = {
    open: {
      display: "flex",
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.3,
      },
    },
    closed: {
      display: "none",
      opacity: 0,
      y: 0,
    },
  };

  const isActive = (path: string) =>
    pathname === path ? "text-Red" : "text-Black";
  const isActiveMobile = (path: string) =>
    pathname === path ? "text-Red" : "text-White";

  return (
    <header className="fixed z-50 w-full top-0 left-0">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          open ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-3xl text-Black">
            Zumaplast
          </Link>
          <div className="hidden md:flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${isActive(
                  link.path
                )} text-sm uppercase font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden items-center">
            <HiOutlineMenuAlt4
              onClick={() => setOpen(!open)}
              className="text-Black cursor-pointer w-6 h-6"
            />
          </div>
        </div>
      </nav>

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        className="bg-Blue fixed top-0 right-0 w-16 h-16 rounded-full"
      ></motion.div>

      <motion.nav
        variants={navLinkVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        className="h-screen md:hidden flex flex-col justify-center"
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${isActiveMobile(
              link.path
            )}  px-3 py-2 flex justify-center text-1xl uppercase font-medium`}
            onClick={() => setOpen(!open)}
          >
            {link.label}
          </Link>
        ))}
        <HiX
          onClick={(prev) => setOpen(!prev)}
          className="absolute text-White top-11 right-5 cursor-pointer w-6 h-6"
        />
      </motion.nav>
    </header>
  );
}
