import { Canvas } from "@react-three/fiber";
import { MeshPhysicalMaterial } from "three";

export function Mesh() {
    return (
        <div className="h-screen">
            <Canvas
                shadows
                camera={{
                    position: [-6, 7, 7],
                }}
            />
            <mesh recieveShadow>
                <boxBufferGeometry args={[20, 1, 10]} />
                <MeshPhysicalMaterial color="white" />
            </mesh>
        </div>
    );
}