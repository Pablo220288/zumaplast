import Wrapper from "@/components/Wrapper";
import { services } from "@/Data/Data";
import Head from "next/head";
import React from "react";

//Framer Motion
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

export default function Service() {
  return (
    <>
      <Head>
        <title>ZeroPlast | Servicios</title>
      </Head>
      <Wrapper className="flex felx-col mt-24 justify-center items-center">
        <div className="h-full">
          <div className="text-center my-8 md:px-8">
            <motion.div
              variants={smoothIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="text-Orange text-sm font-medium tracking-widest uppercase">
                - Nuestros Servicios
              </div>
              <div className="font-semibold text-Black text-3xl mt-4">
                La Mejores Servicios a tu disposicion
              </div>
              <p className="text-Black text-sm mt-8 leading-7 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloremque, quae. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloremque, quae.
              </p>
            </motion.div>
            <motion.div
              variants={smoothIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-Black mt-8"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="p-8 bg-White rounded-lg border-2 hover:border-red-500 text-center transition-all duration-300"
                >
                  <div className="flex justify-center text-Red text-4xl mb-4">
                    {service.icon}
                  </div>
                  <div className=" flex justify-center text-Black text-2xl font-medium mb-4">
                    {service.title}
                  </div>
                  <div className="flex justify-center text-Black text-sm">
                    {service.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
