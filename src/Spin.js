import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Spin({ children }) {
  const ref = useRef(null);
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return <group ref={ref}>{children}</group>;
}

export default Spin;
