import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const HobbiesSection = () => {
  const hobbies = [
    {
      name: 'Photography & Design',
      image: 'https://images.pexels.com/photos/19080509/pexels-photo-19080509/free-photo-of-father-son-photography-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Capturing moments, editing visuals, and designing with passion.',
    },
    {
      name: 'Travel & Adventure',
      image: 'https://images.pexels.com/photos/29018847/pexels-photo-29018847/free-photo-of-scenic-mountain-trail-in-lush-evergreen-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Exploring new places, cultures, and breathtaking landscapes.',
    },
    {
      name: 'Cooking & Food Creation',
      image: 'https://images.pexels.com/photos/12673597/pexels-photo-12673597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Experimenting with flavors and turning ingredients into art.',
    },
    {
      name: 'Creative Brainstorming',
      image: 'https://p2.piqsels.com/preview/2/523/771/mindmap-brainstorm-idea-innovation.jpg',
      description: 'Generating ideas, sketching concepts, and thinking outside the box.',
    },
    {
      name: 'Nature Exploration',
      image: 'https://hatchetresort.com/wp-content/uploads/2021/10/1.jpg',
      description: 'Hiking trails, discovering forests, and connecting with the outdoors.',
    },
    {
      name: 'Music Listening',
      image: 'https://images.pexels.com/photos/11626771/pexels-photo-11626771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Diving into playlists, vinyl records, and discovering new sounds.',
    },
  ];

  return (
    <Card className="mb-8 overflow-hidden rounded-2xl border-none shadow-xl bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 pb-6 pt-6">
        <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-800">
          <span className="text-3xl">✨</span> Hobbies & Interests
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image container with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={hobby.image}
                  alt={hobby.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                  {hobby.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HobbiesSection;