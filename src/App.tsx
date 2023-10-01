import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <color attach="background" args={["black"]} />
      </Canvas>
    </div>
  );
}

export default App;
