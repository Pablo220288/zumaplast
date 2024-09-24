import React from "react";

import { WrapperProps } from "@/Types";

export default function Wrapper({ className, children }: WrapperProps) {
  return (
    <section className={className}>
      <>{children}</>
    </section>
  );
}
