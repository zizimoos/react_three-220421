import { usePlane } from "@react-three/cannon";
import React from "react";

function Plane(props) {
  const [ref] = usePlane(() => ({
    mass: 0,
    ...props,
  }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshStandardMaterial attach="material" color="gray" />
    </mesh>
  );
}

export default Plane;
