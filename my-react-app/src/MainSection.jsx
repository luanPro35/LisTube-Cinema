import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

function MovieCard() {
  const meshRef = useRef();

  // Tự động quay card
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 4.5, 0.3]} />
      {/* 6 mặt box */}
      <meshStandardMaterial attach="material-0" color="#222" />
      <meshStandardMaterial attach="material-1" color="#444" />
      {/* Poster phim */}
      <meshStandardMaterial attach="material-2">
        <Html center>
          <img
            src="https://via.placeholder.com/300x450.png?text=Poster+Phim"
            alt="poster"
            className="rounded-lg shadow-lg"
          />
        </Html>
      </meshStandardMaterial>
      {/* Mặt sau giới thiệu */}
      <meshStandardMaterial attach="material-3">
        <Html center>
          <div className="p-4 text-white bg-black/70 rounded-lg">
            <h2 className="text-lg font-bold">Tên phim</h2>
            <p className="text-sm">Giới thiệu phim cực ngắn gọn và hấp dẫn.</p>
          </div>
        </Html>
      </meshStandardMaterial>
      <meshStandardMaterial attach="material-4" color="#666" />
      <meshStandardMaterial attach="material-5" color="#999" />
    </mesh>
  );
}

const MainSection = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-r from-black via-gray-900 to-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <MovieCard />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default MainSection;
