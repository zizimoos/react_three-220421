import React, { useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";
import { useBox } from "@react-three/cannon";

function Cube(props) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  const { scale, color } = useSpring({
    scale: active ? [1, 1, 1] : [1.5, 1.5, 1.5],
    color: hovered ? "red" : props.color,
  });

  const [Pref] = useBox(() => ({
    mass: 1,
    ...props,
  }));

  return (
    <>
      <a.mesh
        ref={(ref, Pref)}
        scale={scale}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <a.meshStandardMaterial attach="material" color={color} />
      </a.mesh>
    </>
  );
}

export default Cube;
