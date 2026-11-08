import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, RoundedBox, Sparkles } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type Pointer = { x: number; y: number }

function lookAtPointer(
  obj: THREE.Object3D,
  pointer: Pointer,
  strength = 0.35,
) {
  const targetX = pointer.x * strength
  const targetY = pointer.y * strength
  obj.rotation.y = THREE.MathUtils.lerp(obj.rotation.y, targetX, 0.12)
  obj.rotation.x = THREE.MathUtils.lerp(obj.rotation.x, -targetY * 0.55, 0.12)
}

function Eye({
  position,
  pointer,
  emissive = '#22d3ee',
  glow = false,
}: {
  position: [number, number, number]
  pointer: Pointer
  emissive?: string
  glow?: boolean
}) {
  const pupil = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (!pupil.current) return
    pupil.current.position.x = THREE.MathUtils.lerp(
      pupil.current.position.x,
      pointer.x * 0.08,
      0.2,
    )
    pupil.current.position.y = THREE.MathUtils.lerp(
      pupil.current.position.y,
      pointer.y * 0.06,
      0.2,
    )
  })
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
      <mesh ref={pupil} position={[0, 0, 0.08]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive={glow ? emissive : '#000000'}
          emissiveIntensity={glow ? 1.4 : 0}
        />
      </mesh>
    </group>
  )
}

function CuteCat({ pointer }: { pointer: Pointer }) {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    lookAtPointer(group.current, pointer, 0.4)
    group.current.position.y = Math.sin(state.clock.elapsedTime * 2.1) * 0.05
  })
  return (
    <Float speed={2.2} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={group} position={[-0.85, -0.55, 0]} scale={1.05}>
        {/* ears */}
        <mesh position={[-0.28, 0.55, 0]} rotation={[0, 0, 0.35]}>
          <coneGeometry args={[0.16, 0.32, 4]} />
          <meshStandardMaterial color="#fb923c" />
        </mesh>
        <mesh position={[0.28, 0.55, 0]} rotation={[0, 0, -0.35]}>
          <coneGeometry args={[0.16, 0.32, 4]} />
          <meshStandardMaterial color="#fb923c" />
        </mesh>
        {/* head */}
        <mesh>
          <sphereGeometry args={[0.42, 24, 24]} />
          <meshStandardMaterial color="#fdba74" roughness={0.45} />
        </mesh>
        {/* cheeks */}
        <mesh position={[-0.28, -0.05, 0.28]}>
          <sphereGeometry args={[0.1, 12, 12]} />
          <meshStandardMaterial color="#fda4af" />
        </mesh>
        <mesh position={[0.28, -0.05, 0.28]}>
          <sphereGeometry args={[0.1, 12, 12]} />
          <meshStandardMaterial color="#fda4af" />
        </mesh>
        <Eye position={[-0.15, 0.08, 0.36]} pointer={pointer} />
        <Eye position={[0.15, 0.08, 0.36]} pointer={pointer} />
        {/* nose */}
        <mesh position={[0, -0.05, 0.4]}>
          <sphereGeometry args={[0.05, 10, 10]} />
          <meshStandardMaterial color="#fb7185" />
        </mesh>
        {/* body */}
        <mesh position={[0, -0.55, 0]}>
          <sphereGeometry args={[0.38, 20, 20]} />
          <meshStandardMaterial color="#fb923c" />
        </mesh>
        {/* tail */}
        <mesh position={[0.42, -0.55, -0.15]} rotation={[0.2, 0, -0.8]}>
          <capsuleGeometry args={[0.06, 0.45, 4, 8]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
      </group>
    </Float>
  )
}

function FocusRobot({ pointer }: { pointer: Pointer }) {
  const group = useRef<THREE.Group>(null)
  const ring = useRef<THREE.Mesh>(null)
  const mouth = useRef<THREE.Mesh>(null)
  const ringMat = useRef<THREE.MeshStandardMaterial>(null)
  const focused = Math.hypot(pointer.x, pointer.y) < 0.55

  useFrame((state) => {
    if (!group.current) return
    lookAtPointer(group.current, pointer, 0.55)
    if (ring.current) {
      ring.current.rotation.z = state.clock.elapsedTime * 1.2
      const s = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.04
      ring.current.scale.setScalar(s)
    }
    if (ringMat.current) {
      ringMat.current.emissiveIntensity = focused ? 1.8 : 0.7
    }
    if (mouth.current) {
      mouth.current.scale.x = focused ? 1.2 : 1
      mouth.current.scale.y = focused ? 1.8 : 1
    }
  })

  return (
    <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.45}>
      <group ref={group} position={[0.9, -0.35, 0]} scale={1.05}>
        <mesh ref={ring} position={[0, 0.1, -0.15]}>
          <torusGeometry args={[0.62, 0.035, 12, 48]} />
          <meshStandardMaterial
            ref={ringMat}
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.7}
            transparent
            opacity={0.85}
          />
        </mesh>
        <Sparkles count={18} scale={1.4} size={2.5} speed={0.4} color="#67e8f9" />
        <mesh position={[0, 0.72, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.22, 8]} />
          <meshStandardMaterial color="#0284c7" metalness={0.4} />
        </mesh>
        <mesh position={[0, 0.86, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#f43f5e" emissive="#fb7185" emissiveIntensity={1.5} />
        </mesh>
        <RoundedBox args={[0.7, 0.55, 0.45]} radius={0.12} position={[0, 0.28, 0]}>
          <meshStandardMaterial color="#e0f2fe" metalness={0.25} roughness={0.35} />
        </RoundedBox>
        <Eye position={[-0.16, 0.32, 0.24]} pointer={pointer} glow emissive="#22d3ee" />
        <Eye position={[0.16, 0.32, 0.24]} pointer={pointer} glow emissive="#22d3ee" />
        <mesh ref={mouth} position={[0, 0.12, 0.24]}>
          <boxGeometry args={[0.18, 0.04, 0.04]} />
          <meshStandardMaterial color="#0369a1" emissive="#0ea5e9" emissiveIntensity={0.5} />
        </mesh>
        <RoundedBox args={[0.55, 0.5, 0.4]} radius={0.1} position={[0, -0.28, 0]}>
          <meshStandardMaterial color="#bae6fd" metalness={0.3} roughness={0.4} />
        </RoundedBox>
        <mesh position={[0, -0.2, 0.22]}>
          <circleGeometry args={[0.1, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={1.2} />
        </mesh>
      </group>
    </Float>
  )
}

function PointerLights({ pointer }: { pointer: Pointer }) {
  const light = useRef<THREE.PointLight>(null)
  useFrame(() => {
    if (!light.current) return
    light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, pointer.x * 2.2, 0.15)
    light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, pointer.y * 1.4 + 0.4, 0.15)
  })
  return <pointLight ref={light} intensity={1.4} distance={6} color="#7dd3fc" />
}

function Scene({ pointer }: { pointer: Pointer }) {
  const { gl } = useThree()
  useEffect(() => {
    gl.setClearColor(0x000000, 0)
  }, [gl])
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} color="#fff7ed" />
      <PointerLights pointer={pointer} />
      <CuteCat pointer={pointer} />
      <FocusRobot pointer={pointer} />
    </>
  )
}

export function BuddyScene({
  pointer,
  visible,
}: {
  pointer: Pointer
  visible: boolean
}) {
  if (!visible) return null
  return (
    <div className="buddy-canvas-wrap" aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.15, 3.2], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <Scene pointer={pointer} />
      </Canvas>
    </div>
  )
}
