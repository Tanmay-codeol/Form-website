
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Camera } from 'lucide-react';

export function StudentAdmission() {
  const [formData, setFormData] = useState({
    studentId: '',
    admissionNo: '',
    schoolId: '',
    className: '',
    section: '',
    roomNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student admission submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCapturePhotos = () => {
    console.log('Capturing profile photos...');
    // Handle photo capture
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full">
          <User className="h-8 w-8 text-primary" />
        </div>
        <CardTitle>Student Admission</CardTitle>
        <CardDescription>
          Enter student details to register
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID <span className="text-muted-foreground">(optional, provisioned)</span></Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => handleInputChange('studentId', e.target.value)}
                placeholder="Enter student ID (numbers only)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="admissionNo">Admission No</Label>
                <Input
                  id="admissionNo"
                  value={formData.admissionNo}
                  onChange={(e) => handleInputChange('admissionNo', e.target.value)}
                  placeholder="Enter admission number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="schoolId">School ID</Label>
                <Input
                  id="schoolId"
                  value={formData.schoolId}
                  onChange={(e) => handleInputChange('schoolId', e.target.value)}
                  placeholder="Enter school ID"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="className">Class Name *</Label>
              <Input
                id="className"
                value={formData.className}
                onChange={(e) => handleInputChange('className', e.target.value)}
                placeholder="Enter class name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="section">Section *</Label>
              <Input
                id="section"
                value={formData.section}
                onChange={(e) => handleInputChange('section', e.target.value)}
                placeholder="Enter section"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="roomNumber">Room Number *</Label>
              <Input
                id="roomNumber"
                value={formData.roomNumber}
                onChange={(e) => handleInputChange('roomNumber', e.target.value)}
                placeholder="Enter room number"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Profile Photos</Label>
              <div className="flex items-center space-x-2 p-3 border rounded-md bg-muted/30">
                <Camera className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Please capture all three profile photos</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={handleCapturePhotos}>
              Capture Photos
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Submit Details
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
