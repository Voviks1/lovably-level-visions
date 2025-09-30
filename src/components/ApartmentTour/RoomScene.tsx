import React, { Suspense } from 'react';
import { Html, Text, useTexture } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info, Loader2 } from 'lucide-react';
import * as THREE from 'three';
import type { RoomType, ViewMode } from './ApartmentTour';

// Import room images
import entranceBefore from '@/assets/apartment-tour/entrance/before.jpg';
import entranceProcess from '@/assets/apartment-tour/entrance/process.jpg';
import entranceAfter from '@/assets/apartment-tour/entrance/after.jpg';
import kitchenBefore from '@/assets/apartment-tour/kitchen/before.jpg';
import kitchenProcess from '@/assets/apartment-tour/kitchen/process.jpg';
import kitchenAfter from '@/assets/apartment-tour/kitchen/after.jpg';
import bathroomBefore from '@/assets/apartment-tour/bathroom/before.jpg';
import bathroomProcess from '@/assets/apartment-tour/bathroom/process.jpg';
import bathroomAfter from '@/assets/apartment-tour/bathroom/after.jpg';
import livingBefore from '@/assets/apartment-tour/living/before.jpg';
import livingProcess from '@/assets/apartment-tour/living/process.jpg';
import livingAfter from '@/assets/apartment-tour/living/after.jpg';

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

// Room image configurations
const roomImageConfigs = {
  entrance: {
    before: entranceBefore,
    process: entranceProcess,
    after: entranceAfter,
    hotspots: [
      { position: [4, 1, 2], targetRoom: 'living' as RoomType, label: 'В гостиную' },
    ] as Hotspot[],
    infoPoints: [
      { position: [-4, 2, 1], title: 'Входная дверь', description: 'Замена на металлическую с утеплением' },
      { position: [3, -1, 2], title: 'Напольное покрытие', description: 'Укладка ламината премиум класса' },
    ] as InfoPoint[],
  },
  living: {
    before: livingBefore,
    process: livingProcess,
    after: livingAfter,
    hotspots: [
      { position: [5, 0, 1], targetRoom: 'kitchen' as RoomType, label: 'В кухню' },
      { position: [-5, 0, 1], targetRoom: 'entrance' as RoomType, label: 'В прихожую' },
      { position: [0, 3, 3], targetRoom: 'bathroom' as RoomType, label: 'В ванную' },
    ] as Hotspot[],
    infoPoints: [
      { position: [0, 4, 2], title: 'Потолок', description: 'Многоуровневый натяжной потолок с LED подсветкой' },
      { position: [-4, -1, 2], title: 'Стеновые панели', description: 'Декоративные панели из натурального дерева' },
    ] as InfoPoint[],
  },
  kitchen: {
    before: kitchenBefore,
    process: kitchenProcess,
    after: kitchenAfter,
    hotspots: [
      { position: [-5, 0, 1], targetRoom: 'living' as RoomType, label: 'В гостиную' },
      { position: [0, 3, 3], targetRoom: 'bathroom' as RoomType, label: 'В ванную' },
    ] as Hotspot[],
    infoPoints: [
      { position: [4, 0, 2], title: 'Кухонный гарнитур', description: 'Изготовление по индивидуальному проекту' },
      { position: [-2, 3, 1], title: 'Фартук', description: 'Керамогранит с имитацией мрамора' },
    ] as InfoPoint[],
  },
  bathroom: {
    before: bathroomBefore,
    process: bathroomProcess,
    after: bathroomAfter,
    hotspots: [
      { position: [0, -3, 3], targetRoom: 'kitchen' as RoomType, label: 'В кухню' },
      { position: [5, 0, 1], targetRoom: 'living' as RoomType, label: 'В гостиную' },
    ] as Hotspot[],
    infoPoints: [
      { position: [-4, 0, 2], title: 'Душевая кабина', description: 'Стеклянная кабина с тропическим душем' },
      { position: [4, -1, 2], title: 'Плитка', description: 'Керамогранит под натуральный камень' },
    ] as InfoPoint[],
  },
};

// Room Scene Component with 180-degree high-quality photo display
const RoomSceneComponent: React.FC<RoomSceneProps> = ({ roomType, viewMode, onHotspotClick }) => {
  const config = roomImageConfigs[roomType];
  const currentImageUrl = config[viewMode];

  // Load texture with high quality settings
  const texture = useTexture(currentImageUrl);
  
  // Configure texture for better quality
  if (texture) {
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;
  }

  return (
    <>
      {/* 180-degree curved photo display for immersive experience */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[8, 8, 6, 32, 1, true, 0, Math.PI]} />
        <meshBasicMaterial 
          map={texture} 
          side={THREE.DoubleSide}
          transparent={false}
        />
      </mesh>

      {/* Optimal lighting setup */}
      <ambientLight intensity={1.0} color="#ffffff" />
      <hemisphereLight args={["#ffffff", "#f8fafc", 0.6]} />

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
        position={[0, 8, -8]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {roomType.charAt(0).toUpperCase() + roomType.slice(1)}
      </Text>

      {/* Mode indicator */}
      <Text
        position={[0, -8, -8]}
        fontSize={0.5}
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

export const RoomScene: React.FC<RoomSceneProps> = (props) => {
  return (
    <Suspense fallback={
      <Html center>
        <div className="flex items-center space-x-2 text-white">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Загрузка фотографий...</span>
        </div>
      </Html>
    }>
      <RoomSceneComponent {...props} />
    </Suspense>
  );
};