import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import React, { useRef } from "react";
import { products } from "@/Data/Data";
import Image from "next/image";

// Framer Motion
import { motion, useInView } from "framer-motion";
import { smoothIn } from "@/animate";
import { CardProductProps } from "@/Types";

function Product({ children }: CardProductProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 200px 0px" });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="bg-WhiteGray p-10"
    >
      {children}
    </div>
  );
}

export default function Products() {
  return (
    <>
      <Head>
        <title>ZeroPlast | Products</title>
      </Head>
      <Wrapper>
        <div className="flex flex-col pt-40 items-center text-center">
          <motion.div
            variants={smoothIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="text-Orange text-sm font-medium tracking-widest uppercase">
              - Nuestros Productos
            </div>
            <div className="font-semibold text-Black text-3xl mt-4">
              La Mejor Variedad de Productos para tu Negocio
            </div>
            <p className="text-Black text-sm mt-8 leading-7 max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              molestias pariatur fuga? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque, quae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque, quae.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 px-4 md:px-8">
            {products.map((product) => (
              <Product key={product.id}>
                <div className="w-full relative group flex justify-center">
                  <Image
                    className="w-[10rem]"
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="text-Black font-medium text-start mt-4">
                  {product.name}
                </div>
                <div className="text-Black text-start mt-4">
                  {product.description}
                </div>
                <div className="flex mt-5 gap-2">
                  {product.detail.map((item, index) => (
                    <span
                      key={index}
                      className="border-[#bfa37c] border w-full py-4 px-8 text-center text-Black tracking-widest text-sm cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Product>
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
}
