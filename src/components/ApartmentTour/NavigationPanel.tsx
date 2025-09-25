import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import type { RoomType } from './ApartmentTour';

interface Room {
  id: RoomType;
  name: string;
  description: string;
}

interface NavigationPanelProps {
  rooms: Room[];
  currentRoom: RoomType;
  onRoomSelect: (roomId: RoomType) => void;
  onClose: () => void;
}

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
  rooms,
  currentRoom,
  onRoomSelect,
  onClose,
}) => {
  return (
    <div className="absolute top-16 right-4 z-50 animate-fade-in">
      <Card className="w-64 bg-black/20 border-white/20 backdrop-blur-md">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Навигация по квартире</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 w-8 h-8 p-0"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {rooms.map((room) => (
              <Button
                key={room.id}
                variant={currentRoom === room.id ? "secondary" : "ghost"}
                className={`w-full justify-start text-left ${
                  currentRoom === room.id 
                    ? 'bg-white text-primary' 
                    : 'text-white hover:bg-white/20'
                }`}
                onClick={() => {
                  onRoomSelect(room.id);
                  onClose();
                }}
              >
                <div>
                  <div className="font-medium">{room.name}</div>
                  <div className="text-xs opacity-80">{room.description}</div>
                </div>
              </Button>
            ))}
          </div>
          
          {/* Mini apartment layout */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="text-xs text-white/80 mb-2">План квартиры</div>
            <div className="relative w-full h-32 bg-white/10 rounded-lg p-2">
              {/* Simplified apartment layout */}
              <div className="grid grid-cols-3 grid-rows-2 h-full gap-1">
                <div 
                  className={`rounded border-2 ${
                    currentRoom === 'entrance' ? 'border-white bg-white/20' : 'border-white/40'
                  } flex items-center justify-center`}
                >
                  <span className="text-xs text-white">П</span>
                </div>
                <div 
                  className={`rounded border-2 ${
                    currentRoom === 'kitchen' ? 'border-white bg-white/20' : 'border-white/40'
                  } flex items-center justify-center`}
                >
                  <span className="text-xs text-white">К</span>
                </div>
                <div 
                  className={`rounded border-2 ${
                    currentRoom === 'bathroom' ? 'border-white bg-white/20' : 'border-white/40'
                  } flex items-center justify-center`}
                >
                  <span className="text-xs text-white">В</span>
                </div>
                <div className="col-span-3 rounded border-2 border-white/40 flex items-center justify-center">
                  <div 
                    className={`rounded border-2 w-full h-full ${
                      currentRoom === 'living' ? 'border-white bg-white/20' : 'border-white/40'
                    } flex items-center justify-center`}
                  >
                    <span className="text-xs text-white">Гостиная</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};