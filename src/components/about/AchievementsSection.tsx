import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy, Award } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'National Outstanding Student Competition',
      description: 'Khmer Literature (2019 & 2022)',
      icon: '🏆'
    },
    {
      title: 'Certificate in Sales and Marketing',
      description: '2023',
      icon: '📜'
    },
    {
      title: 'Certificate in Operations Internship',
      description: '2025',
      icon: '📋'
    },
    {
      title: 'Certificate of Participation',
      description: 'Asian Games Support Team (2024)',
      icon: '🎖️'
    }
  ];

  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-600" />
          <span>Key Achievements & Certifications</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
              <span className="text-2xl">{achievement.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsSection;
