import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

function Reveal({ children }: RevealProps) {
  return <div>{children}</div>;
}

export default Reveal;