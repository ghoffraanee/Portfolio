import { motion } from "framer-motion";
import { styles } from "../styles";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

// Composant pour le modèle 3D
const Computer3D = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf'); // Remplace par ton chemin
  
  useFrame((state) => {
    if (computer.scene) {
      computer.scene.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <primitive 
      object={computer.scene} 
      scale={0.75}
      position={[0, -3, -1.5]}
    />
  );
};

// Canvas pour l'ordinateur
const ComputersCanvas = () => {
  return (
    <Canvas
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="absolute inset-0 -z-10"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Computer3D />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-gradient-to-b from-gray-900 to-black`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-4xl sm:text-5xl`}>

            Salut, je suis <span className='text-[#915EFF]'>Ghofrane</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-sm sm:text-base`}>

            Étudiante en Technologies Informatiques, <br className='sm:block hidden' />
            spécialisée en développement full-stack, <br className='sm:block hidden' />
            gestion de bases de données, <br className='sm:block hidden' />
            conception multimédia <br className='sm:block hidden' /> 
            et analyse de données
          </p>
        </div>
      </div>

      {/* Canvas 3D */}
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;