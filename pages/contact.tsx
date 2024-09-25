import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/Data";
import Head from "next/head";
import React from "react";

//Framer Motion
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

export default function Contact() {
  return (
    <>
      <Head>
        <title>ZeroPlast | Contacto</title>
      </Head>
      <Wrapper className="flex flex-col justify-center items-center mt-20 lg:pb-0 lg:mt-0 gap-12 lg:flex-row lg:pt-0 ">
        <motion.div
          variants={smoothIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="md:px-6 py-6 text-center lg:text-left lg:w-1/2"
        >
          <div className="text-Orange text-sm font-medium uppercase">
            - Contactanos
          </div>
          <div className="font-semibold text-Black text-3xl mt-4 tracking-wide md:tracking-widest">
            Conoce nuestras Sucursales
          </div>
          <p className="text-Black text-sm mt-6 leading-6 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            molestias pariatur fuga?.
          </p>
          <div>
            {contacts.map((item) => (
              <div
                key={item.id}
                className="mt-6 flex items-center gap-3 justify-center"
              >
                <div className="flex flex-col items-center">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="flex justify-center text-Red text-2xl">
                      {item.icon}
                    </div>
                    <p className="text-Black font-semibold">{item.title}</p>
                  </div>
                  <p className="text-Black text-sm">{item.description}</p>
                </div>
              </div>
            ))}
            <button className="border-[#bfa37c] border w-full py-4 px-8 text-center text-Black tracking-widest text-sm cursor-pointer mt-8">
              Saber Mas
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={smoothIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="py-6 px-6 w-full md:w-2/3 lg:w-1/2"
        >
          <div className="text-Orange text-sm font-medium uppercase">
            - Dejanos tu comentario
          </div>
          <form className="mt-4">
            <div className="flex items-center border-b border-Black py-2 mb-6">
              <input
                type="text"
                placeholder="Nombre"
                className="appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-Black py-2 mb-6">
              <input
                type="text"
                placeholder="Telefono"
                className="appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-Black py-2 mb-6">
              <input
                type="email"
                placeholder="Email"
                className="appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-Black py-2 mb-6">
              <input
                type="text"
                placeholder="Mensaje"
                className="appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex-none bg-Red text-White px-6 py-2.5 mt-4 rounded-full text-sm font-normal hover:bg-Black transition-all duration-300"
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </Wrapper>
    </>
  );
}
