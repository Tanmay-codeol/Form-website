
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

export function StudentPhotos() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  
  const photoTypes = ['Left Profile', 'Front Face', 'Right Profile'];

  const handleStartCapture = () => {
    console.log('Starting photo capture...');
    // Photo capture logic would go here
  };

  const handlePrevious = () => {
    setCurrentPhoto(prev => (prev > 0 ? prev - 1 : photoTypes.length - 1));
  };

  const handleNext = () => {
    setCurrentPhoto(prev => (prev < photoTypes.length - 1 ? prev + 1 : 0));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full">
          <Camera className="h-8 w-8 text-primary" />
        </div>
        <CardTitle>Student Photos</CardTitle>
        <CardDescription>
          Capture three profile photos for student identification
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center space-x-4">
          <Button variant="ghost" size="icon" onClick={handlePrevious}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-muted rounded-lg flex items-center justify-center mb-2">
              <Camera className="h-12 w-12 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">{photoTypes[currentPhoto]}</p>
          </div>
          
          <Button variant="ghost" size="icon" onClick={handleNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center space-x-2">
          {photoTypes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentPhoto ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <div className="text-center">
          <Button onClick={handleStartCapture} className="w-full max-w-xs">
            Start Capture
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
