import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Heart, Globe } from 'lucide-react';

const ProfileCard = () => {
  return (
    <Card className="mb-8 overflow-hidden shadow-xl">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src="src/assets/c4c578df-2638-4e7f-a9a9-56e8fda90341.png"
            alt="YAUN MENGHONG Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              YAUN MENGHONG
            </h2>
            
            <p className="text-lg text-blue-600 font-medium mb-4">
              Communications Professional | Assistant Manager Candidate
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">Born on December 17, 2004</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">Sangkat Obaykom, Khan Sen Sok, Phnom Penh</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">Nationality: Khmer</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Heart className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">Health: Excellent | Single</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Motivated and detail-oriented communications professional with hands-on experience 
              in customer service, event coordination, and volunteer programs. Skilled at managing 
              operations, supporting promotional campaigns, and engaging with diverse communities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Seeking an Assistant Manager position to apply leadership, organizational, and 
              problem-solving skills for continuous improvement. Fluent in Khmer (Native) and 
              English (Intermediate).
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
