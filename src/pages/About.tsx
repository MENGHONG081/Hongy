import React from 'react';
import ProfileCard from '@/components/about/ProfileCard';
import ContactInfo from '@/components/about/ContactInfo';
import PersonalValues from '@/components/about/PersonalValues';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import HobbiesSection from '@/components/about/HobbiesSection';
import SkillsSection from '@/components/about/SkillsSection';
import AchievementsSection from '@/components/about/AchievementsSection';
import EducationSection from '@/components/about/EducationSection';
import CurrentGoals from '@/components/about/CurrentGoals';

const About = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Main Container */}
      <div className="w-full px-6 sm:px-10 lg:px-20 py-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting to know the person behind the stories
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          <ProfileCard />
          <ContactInfo />
          <PersonalValues />
          <JourneyTimeline />
          <HobbiesSection />
          <SkillsSection />
          <AchievementsSection />
          <EducationSection />
          <CurrentGoals />
        </div>

        {/* Personal Quote */}
        <div className="mt-20 flex justify-center">
          <blockquote className="max-w-4xl text-2xl font-light text-gray-700 italic border-l-4 border-blue-400 pl-6 bg-white p-10 rounded-2xl shadow-md">
            “Life is not about finding yourself, it's about creating yourself through
            the experiences you choose and the stories you tell — and finding joy in the journey.”
          </blockquote>
        </div>

      </div>
    </div>
  );
};

export default About;
