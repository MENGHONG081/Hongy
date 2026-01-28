import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, Calendar, Heart, Users, Mail, Phone, MapPin, Award, Coffee, Camera, BarChart } from 'lucide-react';

const Works = () => {
  const experiences = [
    {
      title: 'Customer Service — Cashier & Barista',
      company: 'Various Establishments',
      period: '2022 – Present',
      location: 'Phnom Penh, Cambodia',
      description: 'Delivering excellent customer service and operating point-of-sale systems in fast-paced environments.',
      responsibilities: [
        'Delivered excellent customer service and operated POS systems',
        'Managed stock inventory and supported promotional campaigns',
        'Maintained high standards of cleanliness and organization'
      ]
    },
    {
      title: 'Internship — OP Department',
      company: 'University of Cambodia',
      period: '6 months',
      location: 'Phnom Penh, Cambodia',
      description: 'Supported the Operations Department with various multimedia and social media tasks.',
      responsibilities: [
        'Assisted with photography and event documentation',
        'Created designs for university materials',
        'Managed and controlled social media presence'
      ]
    },
    {
      title: 'Internship — Sales & Marketing',
      company: 'Spring Education Center',
      period: '3 months',
      location: 'Phnom Penh, Cambodia',
      description: 'Gained hands-on experience in marketing and promotional activities.',
      responsibilities: [
        'Prepared detailed market analysis reports',
        'Supported promotional campaigns and outreach',
        'Assisted with student recruitment activities'
      ]
    }
  ];

  const volunteerWork = [
    {
      title: '32nd Southeast Asian Games & 12th ASEAN Para Games',
      year: '2023',
      description: 'Assisted in international sporting event logistics and coordination',
      icon: '🏅'
    },
    {
      title: 'HE Hun Many Volunteer Doctor Program',
      year: '2022',
      description: 'Supported medical team logistics and assisted doctors in community outreach',
      icon: '🏥'
    },
    {
      title: 'National Youth Volunteer Camp — Kampong Cham',
      year: '2022',
      description: 'Contributed to youth leadership and community engagement initiatives',
      icon: '⛺'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar / Aside */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Profile Card */}
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-xl">
                      <img 
                        src="Gemini_Generated_Image_s5xxo9s5xxo9s5xx.png"
                        alt="YAUN MENGHONG"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-20 text-center">
                  <h2 className="text-2xl font-bold mb-1">Yaun Menghong</h2>
                  <p className="text-indigo-200 mb-4">Communications Professional</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>knews4265@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>0964 324 308</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Phnom Penh, Cambodia</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="mt-6 w-full bg-white text-indigo-700 hover:bg-indigo-100"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Skills */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Key Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Customer Service</Badge>
                  <Badge variant="secondary">Event Coordination</Badge>
                  <Badge variant="secondary">Social Media Management</Badge>
                  <Badge variant="secondary">Photography</Badge>
                  <Badge variant="secondary">Marketing</Badge>
                  <Badge variant="secondary">Team Leadership</Badge>
                  <Badge variant="secondary">POS Systems</Badge>
                </CardContent>
              </Card>

              {/* Icons for flair */}
              <div className="grid grid-cols-3 gap-4 text-center text-gray-600">
                <div>
                  <Coffee className="mx-auto h-6 w-6 mb-1 text-amber-600" />
                  <p className="text-xs">Barista</p>
                </div>
                <div>
                  <Camera className="mx-auto h-6 w-6 mb-1 text-purple-600" />
                  <p className="text-xs">Photography</p>
                </div>
                <div>
                  <BarChart className="mx-auto h-6 w-6 mb-1 text-blue-600" />
                  <p className="text-xs">Analysis</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-12">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                Professional Journey
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Customer service expert • Communications enthusiast • Community volunteer
              </p>
            </div>

            {/* Professional Experience */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-blue-600" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card 
                    key={index} 
                    className="border-l-4 border-blue-500 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center justify-end gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <p>{exp.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 italic">{exp.description}</p>
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Volunteer Experience */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Heart className="h-8 w-8 text-red-500" />
                Volunteer Experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {volunteerWork.map((vol, index) => (
                  <Card 
                    key={index} 
                    className="text-center hover:scale-105 transition-transform duration-300 shadow-md"
                  >
                    <CardHeader>
                      <div className="text-5xl mb-3">{vol.icon}</div>
                      <CardTitle className="text-lg">{vol.title}</CardTitle>
                      <Badge variant="outline" className="mt-2">{vol.year}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{vol.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Career Objective */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 pb-6">
                  <CardTitle className="text-2xl md:text-3xl text-center flex items-center justify-center gap-3">
                    <Users className="h-8 w-8 text-blue-600" />
                    Career Objective
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Aside - Left side on desktop */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src="https://c0.wallpaperflare.com/preview/506/555/733/career-leadership-success-businessman.jpg"
                        alt="Professional career growth and leadership"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {/* Optional subtle overlay for better text contrast if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent" />
                    </div>

                    {/* Text Content - Right side on desktop */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl">
                        Motivated communications professional seeking an{" "}
                        <strong className="text-blue-700 font-semibold">Assistant Manager</strong> role to leverage 
                        leadership, exceptional customer service, event coordination, and community engagement skills 
                        toward organizational excellence and continuous growth.
                      </p>

                      {/* Optional extra flair */}
                      <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-green-600">●</span> Growth-oriented
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="text-green-600">●</span> Team-focused
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="text-green-600">●</span> Impact-driven
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Cover Letter */}
            <section>
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <CardTitle className="text-2xl text-center">Professional Cover Letter</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 prose max-w-none">
                  <div className="bg-white p-8 md:p-10 rounded-xl shadow-inner">
                    <div className="text-right mb-10 text-gray-600 text-sm">
                      <p className="font-bold">YAUN MENGHONG</p>
                      <p>Sangkat Obaykom, Khan Sen Sok</p>
                      <p>Phnom Penh, Cambodia</p>
                      <p>knews4265@gmail.com | 0964 324 308</p>
                      <p>{new Date().toLocaleDateString()}</p>
                    </div>

                    <p className="font-medium mb-6">Dear Hiring Manager,</p>

                    <div className="space-y-5 text-gray-700 leading-relaxed">
                      <p>
                    I am writing to express my strong interest in the Assistant Manager position at your organization. 
                    As a motivated communications professional with hands-on experience in customer service, event 
                    coordination, and volunteer programs, I am excited about the opportunity to contribute to your team.
                  </p>
                  
                  <p>
                    Throughout my career, I have demonstrated expertise in managing operations, supporting promotional 
                    campaigns, and engaging with diverse communities. My experience as a Cashier & Barista has honed my 
                    customer service skills, while my internships at the University of Cambodia and Spring Education Center 
                    have provided me with valuable insights into operations management and marketing.
                  </p>
                  
                  <p>
                    I am particularly proud of my volunteer work with the 32nd Southeast Asian Games and 12th ASEAN Para Games, 
                    where I assisted in international sporting event logistics. Additionally, my recognition as a National 
                    Outstanding Student in Khmer Literature demonstrates my commitment to excellence and continuous learning.
                  </p>
                  
                  <p>
                    I am currently pursuing a Bachelor of Information Technology at the University of Cambodia, which 
                    complements my practical experience with technical knowledge. I am confident that my combination of 
                    leadership skills, community engagement experience, and technical abilities would make me a valuable 
                    addition to your team.
                  </p>
                  
                  <p>
                    I would welcome the opportunity to discuss how my skills and experience can contribute to your 
                    organization's success. Thank you for considering my application.
                  </p>
                      <p className="mt-6">
                        <strong>Sincerely,</strong><br />
                        <span className="font-bold">YAUN MENGHONG</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Works;