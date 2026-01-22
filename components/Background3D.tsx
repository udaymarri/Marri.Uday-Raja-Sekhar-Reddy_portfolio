
import * as React from 'react';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  return (
    <div className="canvas-container opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <React.Suspense fallback={null}>
          <Stars 
            radius={100} 
            depth={50} 
            count={7000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;
