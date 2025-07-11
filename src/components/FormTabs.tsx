
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StudentPhotos } from './StudentPhotos';
import { StudentAdmission } from './StudentAdmission';

export function FormTabs() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          EDPI Innovate - Enroll
        </h1>
        <p className="text-muted-foreground">
          Complete your student enrollment process
        </p>
      </div>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="photos">Student Photos</TabsTrigger>
          <TabsTrigger value="admission">Student Admission</TabsTrigger>
        </TabsList>
        
        <TabsContent value="photos" className="mt-0">
          <StudentPhotos />
        </TabsContent>
        
        <TabsContent value="admission" className="mt-0">
          <StudentAdmission />
        </TabsContent>
      </Tabs>
    </div>
  );
}
