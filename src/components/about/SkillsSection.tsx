import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Code, Users } from 'lucide-react';

const SkillsSection = () => {
  const softSkills = [
    'Leadership & Creative Thinking',
    'Time Management',
    'Problem Solving',
    'Teamwork & Flexibility',
    'Community Service',
    'Strong Work Ethic',
    'Honesty & Reliability',
  ];

  const technicalSkills = [
    { name: 'JavaScript',        percent: 92 },
    { name: 'React',             percent: 90 },
    { name: 'TypeScript',        percent: 75 },
    { name: 'Node.js',           percent: 70 },
    { name: 'Python',            percent: 68 },
    { name: 'AI & Machine Learning', percent: 45 },
    { name: 'Java',              percent: 72 },
    { name: 'C++',               percent: 65 },
    { name: 'PHP',               percent: 88 },
    { name: 'Django',            percent: 40 },
    { name: 'HTML & CSS',        percent: 95 },
    { name: 'Microsoft Office Suite', percent: 90 },
  ];

  // Optional: color intensity based on percentage
  const getLevelColor = (percent: number) => {
    if (percent >= 90) return 'bg-emerald-500 text-white';
    if (percent >= 80) return 'bg-emerald-400 text-white';
    if (percent >= 70) return 'bg-blue-500 text-white';
    if (percent >= 60) return 'bg-blue-400 text-white';
    if (percent >= 50) return 'bg-amber-500 text-white';
    return 'bg-gray-500 text-white';
  };

  return (
    <Card className="mb-8 rounded-2xl border shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 pb-4">
        <CardTitle className="flex items-center gap-2.5 text-xl font-bold text-gray-800">
          <Sparkles className="h-5 w-5 text-purple-600" />
          Skills & Competencies
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-6">
        {/* Soft Skills – no percentages, as they're harder to quantify */}
        <div className="mb-8">
          <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
            <Users className="h-5 w-5 mr-2.5 text-blue-600" />
            Soft Skills
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-3 py-1.5 text-sm font-medium bg-white/80 border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Technical Skills with Percentage */}
        <div>
          <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
            <Code className="h-5 w-5 mr-2.5 text-emerald-600" />
            Technical Skills
          </h4>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm hover:shadow-md transition-all min-w-[180px]"
              >
                <span className="text-sm font-medium text-gray-800 flex-1">
                  {skill.name}
                </span>
                <Badge
                  className={`text-xs font-bold px-2.5 py-1 min-w-[54px] text-center ${getLevelColor(skill.percent)}`}
                >
                  {skill.percent}%
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;