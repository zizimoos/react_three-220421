import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import styled from "styled-components";
import Cube from "./Cube";
import PhysicCube from "./PhysicCube";
import Spin from "./Spin";
import Plane from "./Plane";

const Container = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 15]} />
        <Spin>
          <Cube position={[0, 0, 0]} color="hotpink"></Cube>
        </Spin>
        <Cube position={[2, 1, 0]} color="dodgerblue"></Cube>
        <Cube position={[-2, 1, 0]} color="teal"></Cube>
        <Physics>
          <PhysicCube
            position={[0, 5, 0]}
            rotation={[0, 3, 3]}
            color="#dec8ab"
          ></PhysicCube>
          <PhysicCube
            position={[-1, 3, 0]}
            rotation={[10, -3, -3]}
            color="#ad7100"
          ></PhysicCube>
          <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}></Plane>
        </Physics>
        <OrbitControls />
      </Canvas>
    </Container>
  );
}

export default App;
