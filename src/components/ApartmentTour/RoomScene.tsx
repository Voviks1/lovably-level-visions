import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Sphere, Text } from '@react-three/drei';
import { Mesh, TextureLoader, SphereGeometry, MeshBasicMaterial, BackSide } from 'three';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info } from 'lucide-react';
import type { RoomType, ViewMode } from './ApartmentTour';

interface Hotspot {
  position: [number, number, number];
  targetRoom: RoomType;
  label: string;
}

interface InfoPoint {
  position: [number, number, number];
  title: string;
  description: string;
}

interface RoomSceneProps {
  roomType: RoomType;
  viewMode: ViewMode;
  onHotspotClick: (roomId: RoomType) => void;
}

// Mock room configurations
const roomConfigs = {
  entrance: {
    before: '#8B7355', // Brown/beige for unfinished
    process: '#A68B5B',
    after: '#F5F5DC', // Cream/beige finished
    hotspots: [
      { position: [0, 0, -0.8], targetRoom: 'living' as RoomType, label: 'В гостиную' },
    ] as Hotspot[],
    infoPoints: [
      { position: [-0.6, 0.3, 0.5], title: 'Входная дверь', description: 'Замена на металлическую с утеплением' },
      { position: [0.7, -0.2, 0.3], title: 'Напольное покрытие', description: 'Укладка ламината премиум класса' },
    ] as InfoPoint[],
  },
  living: {
    before: '#8B7355',
    process: '#A68B5B', 
    after: '#E6E6FA', // Light lavender
    hotspots: [
      { position: [0.8, 0, 0.2], targetRoom: 'kitchen' as RoomType, label: 'В кухню' },
      { position: [-0.8, 0, -0.2], targetRoom: 'entrance' as RoomType, label: 'В прихожую' },
      { position: [0, 0, 0.9], targetRoom: 'bedroom' as RoomType, label: 'В спальню' },
    ] as Hotspot[],
    infoPoints: [
      { position: [0, 0.4, -0.7], title: 'Потолок', description: 'Многоуровневый натяжной потолок с LED подсветкой' },
      { position: [-0.5, -0.3, 0.6], title: 'Стеновые панели', description: 'Декоративные панели из натурального дерева' },
    ] as InfoPoint[],
  },
  kitchen: {
    before: '#8B7355',
    process: '#A68B5B',
    after: '#F0F8FF', // Alice blue
    hotspots: [
      { position: [-0.8, 0, -0.2], targetRoom: 'living' as RoomType, label: 'В гостиную' },
      { position: [0, 0, 0.9], targetRoom: 'bathroom' as RoomType, label: 'В ванную' },
    ] as Hotspot[],
    infoPoints: [
      { position: [0.6, 0, -0.5], title: 'Кухонный гарнитур', description: 'Изготовление по индивидуальному проекту' },
      { position: [-0.4, 0.3, 0.4], title: 'Фартук', description: 'Керамогранит с имитацией мрамора' },
    ] as InfoPoint[],
  },
  bedroom: {
    before: '#8B7355',
    process: '#A68B5B',
    after: '#FFF8DC', // Cornsilk
    hotspots: [
      { position: [0, 0, -0.9], targetRoom: 'living' as RoomType, label: 'В гостиную' },
    ] as Hotspot[],
    infoPoints: [
      { position: [0, 0.4, 0.6], title: 'Изголовье кровати', description: 'Мягкая панель с каретной стяжкой' },
      { position: [0.7, -0.2, -0.3], title: 'Шкаф-купе', description: 'Встроенный шкаф до потолка' },
    ] as InfoPoint[],
  },
  bathroom: {
    before: '#8B7355',
    process: '#A68B5B',
    after: '#F5FFFA', // Mint cream
    hotspots: [
      { position: [0, 0, -0.9], targetRoom: 'kitchen' as RoomType, label: 'В кухню' },
    ] as Hotspot[],
    infoPoints: [
      { position: [-0.5, 0, 0.5], title: 'Душевая кабина', description: 'Стеклянная кабина с тропическим душем' },
      { position: [0.6, -0.3, -0.2], title: 'Плитка', description: 'Керамогранит под натуральный камень' },
    ] as InfoPoint[],
  },
};

export const RoomScene: React.FC<RoomSceneProps> = ({ roomType, viewMode, onHotspotClick }) => {
  const sphereRef = useRef<Mesh>(null);
  const { camera } = useThree();
  
  const config = roomConfigs[roomType];
  const currentColor = config[viewMode];

  // Create sphere geometry and material
  const geometry = useMemo(() => new SphereGeometry(1, 32, 32), []);
  const material = useMemo(() => new MeshBasicMaterial({ 
    color: currentColor,
    side: BackSide,
    transparent: true,
    opacity: 0.9
  }), [currentColor]);

  // Animate color transitions
  useFrame((state) => {
    if (sphereRef.current) {
      const time = state.clock.elapsedTime;
      material.opacity = 0.8 + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <>
      {/* Room Sphere */}
      <mesh ref={sphereRef} geometry={geometry} material={material} />

      {/* Ambient lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[1, 1, 1]} intensity={0.4} />

      {/* Navigation Hotspots */}
      {config.hotspots.map((hotspot, index) => (
        <Html
          key={index}
          position={hotspot.position}
          center
          distanceFactor={1.2}
        >
          <Button
            className="bg-primary/80 hover:bg-primary text-white backdrop-blur-sm border-white/20 animate-pulse"
            size="sm"
            onClick={() => onHotspotClick(hotspot.targetRoom)}
          >
            <ArrowRight className="w-4 h-4 mr-1" />
            {hotspot.label}
          </Button>
        </Html>
      ))}

      {/* Information Points */}
      {config.infoPoints.map((point, index) => (
        <Html
          key={index}
          position={point.position}
          center
          distanceFactor={1.5}
        >
          <div className="group relative">
            <Button
              variant="outline"
              size="sm" 
              className="bg-accent/80 border-white/20 text-white hover:bg-accent backdrop-blur-sm rounded-full w-8 h-8 p-0"
            >
              <Info className="w-4 h-4" />
            </Button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white p-2 rounded-lg text-xs whitespace-nowrap z-10 backdrop-blur-sm">
              <div className="font-semibold">{point.title}</div>
              <div className="text-white/80">{point.description}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
            </div>
          </div>
        </Html>
      ))}

      {/* Room Title */}
      <Text
        position={[0, 0.8, -0.9]}
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        {roomType.charAt(0).toUpperCase() + roomType.slice(1)}
      </Text>

      {/* Mode indicator */}
      <Text
        position={[0, -0.8, -0.9]}
        fontSize={0.06}
        color="rgba(255,255,255,0.8)"
        anchorX="center"
        anchorY="middle"
      >
        {viewMode === 'before' ? 'До ремонта' : 
         viewMode === 'process' ? 'В процессе' : 'После ремонта'}
      </Text>
    </>
  );
};