import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import Image from "next/image";
import React from "react";

//Framer Motion
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

//CountUp
import { countUpItems } from "@/Data/Data";
import MyCountUp from "@/components/CountUp";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const imageVariants1 = {
    show: {
      opacity: 1,
      y: 180,
      x:140,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 230,
      x:140
    },
  };
  const imageVariants2 = {
    show: {
      opacity: 1,
      y: 0,
      x:160,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      x:160,
    },
  };
  const imageVariants3 = {
    show: {
      opacity: 1,
      y: 90,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 140,
    },
  };
  return (
    <>
      <Head>
        <title>ZumaPlast | Sobre Nosotros</title>
      </Head>
      <Wrapper className="pb-0 mt-20 lg:mt-0">
        <div className="flex flex-col gap-12 items-center justify-center min-h-screen lg:flex-row mb-12 lg:mb-0">
          <div className="relative w-[20rem] h-[21rem]">
            <motion.div
              variants={imageVariants1}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute w-[10rem]"
            >
              <Image
                src={"/about_1.png"}
                alt="Mujer Saludando 1"
                width={409}
                height={405}
                className="w-[10rem]"
              />
            </motion.div>
            <motion.div
              variants={imageVariants2}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute w-[10rem]"
            >
              <Image
                src={"/about_2.png"}
                alt="Hombre Saludando"
                width={470}
                height={470}
                className="w-[10rem]"
              />
            </motion.div>
            <motion.div
              variants={imageVariants3}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute w-[10rem]"
            >
              <Image
                src={"/about_3.png"}
                alt="Mujer Saludando 2"
                width={549}
                height={449}
                className="w-[10rem]"
              />
            </motion.div>
          </div>
          <motion.div
            variants={smoothIn("left", 0)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl"
          >
            <div className="text-Orange text-sm font-medium uppercase">
              - Sobre Nosotros
            </div>
            <div className="font-semibold text-Black text-3xl mt-4">
              Una empresa con compromiso con el ambiente
            </div>
            <p className="text-Black text-sm mt-8 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque, quae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque, quae.
            </p>
            <button className="flex-none bg-Red text-White px-6 py-2.5 mt-4 rounded-full text-sm font-normal hover:bg-Black transition-all duration-300">
              Saber Mas
            </button>
            <div
              ref={ref}
              className="flex justify-center mt-12 gap-12 flex-wrap"
            >
              {countUpItems.map((item) => (
                <div key={item.id} className="text-center">
                  <div className="text-Red text-3xl">
                    {inView && (
                      <MyCountUp start={0} end={item.number} duration={3} />
                    )}
                    +
                  </div>
                  <div className="text-Black mt-2 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
}
