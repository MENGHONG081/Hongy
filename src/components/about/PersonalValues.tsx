
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Heart, Target, Trophy } from 'lucide-react';

const PersonalValues = () => {
  const values = [
    {
      title: 'Continuous Learning',
      description: 'I believe in constantly growing and adapting to new technologies and ideas.',
      icon: <Target className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Authenticity',
      description: 'Being genuine and true to myself in all interactions and relationships.',
      icon: <Heart className="h-6 w-6 text-red-500" />
    },
    {
      title: 'Innovation',
      description: 'Finding creative solutions to problems and pushing boundaries.',
      icon: <Trophy className="h-6 w-6 text-yellow-600" />
    }
  ];

  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Heart className="h-5 w-5 text-red-500" />
          <span>My Values</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-gray-50">
              <div className="flex justify-center mb-3">
                {value.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalValues;
