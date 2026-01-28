import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, School } from 'lucide-react';

const EducationSection = () => {
  const mainEducation = {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of Cambodia',
    year: '2013 – 2027 (expected)',
    description:
      'Specialized in Web & Mobile App Development, UX/UI Design, Project Management, and Software Engineering. Graduated with honors. Focused on building practical skills through projects, internships, and real-world application development.',
    highlights: [
      'Web & Mobile Development',
      'UX/UI Design Principles',
      'Project Management Fundamentals',
      'Software Engineering Practices',
    ],
    image: 'https://static.studyusa.com/school/OK002-8-ipad.jpg?format=webp', // University campus vibe
  };

  const otherEducation = [
    {
      degree: 'High School Diploma',
      school: 'Srey Santhor High School',
      year: '2020 – 2023',
      description: 'Valedictorian. Served as President of the Computer Club – organized coding workshops and tech events.',
      image: 'https://c1.wallpaperflare.com/preview/15/1/215/graduation-graduation-day-college-graduation-college.jpg',
    },
    {
      degree: 'Secondary School Diploma',
      school: 'Pramyam Secondary School',
      year: '2017 – 2019',
      description: 'Valedictorian. Led the Computer Club, introduced peers to basic programming and digital skills.',
      image: 'https://images.pexels.com/photos/8499501/pexels-photo-8499501.jpeg',
    },
    {
      degree: 'Primary School Certificate',
      school: 'Pramyam Primary School',
      year: '2010 – 2016',
      description: 'Valedictorian. Active in early computer club activities and school tech initiatives.',
      image: 'https://p0.piqsels.com/preview/184/67/607/boy-child-childhood-classroom.jpg',
    },
  ];

  return (
    <Card className="mb-10 overflow-hidden rounded-2xl border-none shadow-2xl bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="bg-gradient-to-r from-blue-600/5 to-indigo-600/5 pb-8 pt-10">
        <CardTitle className="flex items-center justify-center gap-3 text-3xl font-bold text-gray-900">
          <GraduationCap className="h-9 w-9 text-blue-600" />
          Education Background
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-10 pb-12 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Education Card – takes more space */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src={mainEducation.image}
                  alt="University of Cambodia campus"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 text-blue-700 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {mainEducation.degree}
                    </h2>
                    <p className="text-blue-600 font-medium text-lg mt-1">{mainEducation.school}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{mainEducation.year}</span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  {mainEducation.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {mainEducation.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Aside / Previous Education */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <School className="h-6 w-6 text-indigo-600" />
              Earlier Education
            </h3>

            {otherEducation.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={edu.image}
                      alt={edu.school}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-indigo-600 font-medium text-sm mb-1.5">{edu.school}</p>
                    <p className="text-gray-600 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationSection;