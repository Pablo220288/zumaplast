import Image from "next/image";
import React from "react";

export default function IndexImg() {
  return (
    <div>
      <Image
        src={"/home.png"}
        alt="Descartables Varios"
        width={1364}
        height={910}
        className="trasnslate-z-0 w-[26rem] h-full"
      />
    </div>
  );
}
