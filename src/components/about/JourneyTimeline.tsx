import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Globe, Code } from 'lucide-react';

const JourneyTimeline = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Started Personal Website',
      description: 'Launched my personal website to share my journey, projects, and connect with the community.',
      type: 'personal',
      icon: <Globe className="h-6 w-6 text-white" />,
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // modern coding/website vibe
    },
    {
      year: '2023',
      title: 'Promoted to Senior Developer',
      description: 'Promoted to Senior Developer — leading features, mentoring juniors, and shipping impactful products.',
      type: 'professional',
      icon: <Briefcase className="h-6 w-6 text-white" />,
      image: 'https://images.pexels.com/photos/19805876/pexels-photo-19805876/free-photo-of-man-working-on-computer-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // professional dev at work
    },
    {
      year: '2022',
      title: 'University Graduation',
      description: 'Graduated with honors in Computer Science — ready to turn theory into real-world code.',
      type: 'education',
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      image: 'https://images.pexels.com/photos/7713319/pexels-photo-7713319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // proud graduate moment
    },
    {
      year: '2020',
      title: 'First Internship',
      description: 'Kicked off my dev career with my first internship — learning, coding, and growing every day.',
      type: 'professional',
      icon: <Code className="h-6 w-6 text-white" />,
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // early career / internship vibe (fallback)
    },
  ];

  const typeColors = {
    professional: 'bg-blue-600',
    education: 'bg-emerald-600',
    personal: 'bg-purple-600',
  };

  return (
    <Card className="mb-10 overflow-hidden rounded-2xl border-none shadow-2xl bg-gradient-to-b from-white to-gray-50/50">
      <CardHeader className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 pb-8 pt-8">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-gray-800">
          <span className="text-4xl">🛤️</span> My Journey
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-10 pb-12 relative px-4 md:px-8">
        {/* Vertical timeline line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 rounded-full transform -translate-x-1/2" />

        <div className="space-y-12 md:space-y-20 relative">
          {timeline.map((event, index) => {
            const isEven = index % 2 === 0;
            const color = typeColors[event.type];

            return (
              <div
                key={event.year}
                className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 group ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Milestone dot + year */}
                <div className="z-10 flex flex-col items-center min-w-[80px]">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${color} flex items-center justify-center shadow-xl ring-8 ring-white group-hover:ring-offset-4 group-hover:ring-offset-white group-hover:ring-purple-300/60 transition-all duration-300`}
                  >
                    {event.icon}
                  </div>
                  <div className="mt-3 px-4 py-1.5 bg-white rounded-full shadow border border-gray-200">
                    <span className="text-base font-bold text-gray-800">{event.year}</span>
                  </div>
                </div>

                {/* Main content: image + text aside */}
                <div className="w-full md:w-10/12">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group-hover:shadow-2xl group-hover:border-2 group-hover:border-purple-200/60 transition-all duration-300 hover:-translate-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      {/* Image side */}
                      <div className="md:col-span-2 h-48 md:h-64 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Text aside */}
                      <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge
                            className={`${color} text-white px-4 py-1.5 text-sm font-medium uppercase tracking-wider`}
                          >
                            {event.type}
                          </Badge>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                            {event.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneyTimeline;