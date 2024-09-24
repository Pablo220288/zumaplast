import Image from "next/image";
import React from "react";

export default function IndexImg() {
  return (
    <div>
      <Image
        src={"/home.png"}
        alt="Descartables Varios"
        width={2548}
        height={1893}
        className="trasnslate-z-0 w-[18rem] h-full"
      />
    </div>
  );
}
