import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Target, Briefcase, User, Code, Shield, Rocket, Heart, Globe, Camera, Brain, Palette } from 'lucide-react';

const CurrentGoals = () => {
  const professionalGoals = [
    { icon: Brain, text: "Master advanced AI/ML techniques and contribute to meaningful open-source projects" },
    { icon: Palette, text: "Level up advanced UX/UI design skills and create intuitive, beautiful interfaces" },
    { icon: Code, text: "Deepen modern web development expertise — build & maintain Modern_Web open-source to boost skills and support community/country development" },
    { icon: Shield, text: "Advance in cybersecurity — protect personal digital assets and contribute to national digital safety" },
    { icon: Rocket, text: "Launch and grow a successful business venture" },
    { icon: Heart, text: "Prioritize health, fitness, and building sustainable good habits" },
    { icon: User, text: "Transform into the best version of myself through discipline and continuous self-improvement" },
  ];

  const personalGoals = [
    { icon: Globe, text: "Visit 5 new countries" },
    { icon: Camera, text: "Significantly improve photography skills while traveling" },
  ];

  return (
    <Card className="mb-8 shadow-2xl border-0 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <CardTitle className="flex items-center justify-center space-x-3 text-2xl">
          <Target className="h-7 w-7" />
          <span>Current Goals 2026</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Goals */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">Professional Ambitions</h3>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://p0.piqsels.com/preview/313/769/293/career-leadership-success-businessman.jpg"
                alt="Professional career path and achievement"
                className="w-full h-48 object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium opacity-90">Building the future, one skill at a time</p>
              </div>
            </div>

            <ul className="space-y-4">
              {professionalGoals.map((goal, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-green-50/60 rounded-lg hover:bg-green-50 transition-colors border border-green-100"
                >
                  <goal.icon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-sm leading-relaxed">{goal.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Goals */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">Personal Growth</h3>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1107491/pexels-photo-1107491.jpeg"
                alt="Personal journey silhouette at sunset"
                className="w-full h-48 object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium opacity-90">Chasing horizons and new perspectives</p>
              </div>
            </div>

            <ul className="space-y-4">
              {personalGoals.map((goal, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-blue-50/60 rounded-lg hover:bg-blue-50 transition-colors border border-blue-100"
                >
                  <goal.icon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-sm leading-relaxed">{goal.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optional motivational footer */}
        <div className="mt-10 text-center text-sm text-gray-500 italic">
          "The only limit to our realization of tomorrow will be our doubts of today." – Franklin D. Roosevelt
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentGoals;