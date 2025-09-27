import React, { Suspense, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Play, ArrowLeft, ArrowRight, RotateCcw, Home, MapPin } from 'lucide-react';
import { RoomScene } from './RoomScene';
import { NavigationPanel } from './NavigationPanel';

export type RoomType = 'entrance' | 'living' | 'kitchen' | 'bathroom';
export type ViewMode = 'before' | 'after' | 'process';

interface Room {
  id: RoomType;
  name: string;
  description: string;
}

const rooms: Room[] = [
  { id: 'entrance', name: 'Прихожая', description: 'Входная зона квартиры' },
  { id: 'living', name: 'Гостиная', description: 'Основная жилая зона' },
  { id: 'kitchen', name: 'Кухня', description: 'Кухонная зона' },
  { id: 'bathroom', name: 'Ванная', description: 'Санузел' },
];

export const ApartmentTour: React.FC = () => {
  const [currentRoom, setCurrentRoom] = useState<RoomType>('entrance');
  const [viewMode, setViewMode] = useState<ViewMode>('before');
  const [isLoading, setIsLoading] = useState(true);
  const [showMinimap, setShowMinimap] = useState(false);

  const getCurrentRoomIndex = () => rooms.findIndex(room => room.id === currentRoom);
  
  const navigateToRoom = useCallback((roomId: RoomType) => {
    setIsLoading(true);
    setCurrentRoom(roomId);
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const navigatePrevious = () => {
    const currentIndex = getCurrentRoomIndex();
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : rooms.length - 1;
    navigateToRoom(rooms[prevIndex].id);
  };

  const navigateNext = () => {
    const currentIndex = getCurrentRoomIndex();
    const nextIndex = currentIndex < rooms.length - 1 ? currentIndex + 1 : 0;
    navigateToRoom(rooms[nextIndex].id);
  };

  const toggleViewMode = () => {
    const modes: ViewMode[] = ['before', 'process', 'after'];
    const currentIndex = modes.indexOf(viewMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setViewMode(modes[nextIndex]);
  };

  const currentRoomData = rooms.find(room => room.id === currentRoom)!;

  React.useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden bg-black"
      style={{ 
        touchAction: 'pan-y pinch-zoom',
        overscrollBehavior: 'contain'
      }}
    >
      {/* Loading Screen */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-variant flex items-center justify-center z-50">
          <div className="text-center text-white">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Загружаем 3D-тур</h3>
            <p className="text-white/90">Переходим в {currentRoomData.name.toLowerCase()}</p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas 
        camera={{ position: [0, 0, 0], fov: 75, near: 0.01, far: 1000 }}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: false 
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000');
        }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          <RoomScene 
            roomType={currentRoom} 
            viewMode={viewMode}
            onHotspotClick={navigateToRoom}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={0.1}
            maxDistance={2}
            rotateSpeed={0.5}
            zoomSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Top Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-40">
        <Badge className="bg-black/20 text-white border-white/20 backdrop-blur-sm">
          <Home className="w-4 h-4 mr-2" />
          {currentRoomData.name}
        </Badge>
        
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            onClick={() => setShowMinimap(!showMinimap)}
          >
            <MapPin className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Mode Toggle */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex gap-1 p-1 bg-black/20 rounded-full backdrop-blur-sm">
          {(['before', 'process', 'after'] as ViewMode[]).map((mode) => (
            <Button
              key={mode}
              size="sm"
              variant={viewMode === mode ? "secondary" : "ghost"}
              className={`px-3 py-1 text-xs ${
                viewMode === mode 
                  ? 'bg-white text-primary' 
                  : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setViewMode(mode)}
            >
              {mode === 'before' ? 'До' : mode === 'process' ? 'Процесс' : 'После'}
            </Button>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-40">
        <Button
          variant="outline"
          className="bg-black/20 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          onClick={navigatePrevious}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>

        <div className="flex gap-2">
          <Button
            className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            onClick={toggleViewMode}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Переключить вид
          </Button>
        </div>

        <Button
          variant="outline"
          className="bg-black/20 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          onClick={navigateNext}
        >
          Вперед
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Room Navigation Panel */}
      {showMinimap && (
        <NavigationPanel
          rooms={rooms}
          currentRoom={currentRoom}
          onRoomSelect={navigateToRoom}
          onClose={() => setShowMinimap(false)}
        />
      )}

      {/* Progress Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex gap-2">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`w-2 h-2 rounded-full transition-all ${
                room.id === currentRoom 
                  ? 'bg-white' 
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Room Info */}
      <div className="absolute bottom-20 right-4 z-40">
        <Card className="bg-black/20 border-white/20 backdrop-blur-sm">
          <CardContent className="p-4 text-white">
            <h4 className="font-semibold mb-1">{currentRoomData.name}</h4>
            <p className="text-sm text-white/80">{currentRoomData.description}</p>
            <Badge className="mt-2 bg-accent/20 text-accent border-accent/20">
              {viewMode === 'before' ? 'Исходное состояние' : 
               viewMode === 'process' ? 'В процессе работ' : 'Финальный результат'}
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};