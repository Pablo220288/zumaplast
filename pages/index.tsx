import IndexImg from "@/components/IndexImg";
import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import React from "react";

import { motion } from "framer-motion";
import { smoothIn } from "../animate";

function Home() {
  return (
    <>
      <Head>
        <title>ZumaPlast</title>
      </Head>
      <Wrapper className="text-center flex flex-col justify-center pb-0">
        <div className="bg-[#fbe2e3] absolute top-[6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-33rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div className="h-full">
          <div>
            <h1>Zumaplast</h1>
            <p className="text-Black mx-auto max-w-xl flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. autem
              nemo molestias pariatur fuga?
            </p>
            <div className="mt-8 flex gap-x-4 justify-center z-10">
              <button className="bg-Red text-White px-6 py-2 rounded-full text-sm font-normal hover:bg-Black transition-all duration-300">
                Productos
              </button>
              <button className="bg-Red text-White px-6 py-2 rounded-full text-sm font-normal hover:bg-Black transition-all duration-300">
                Contacto
              </button>
            </div>
          </div>
          <div className="mt-5">
            <div className="w-full h-full flex justify-center">
              <IndexImg />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
