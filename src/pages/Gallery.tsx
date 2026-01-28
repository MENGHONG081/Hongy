
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, MapPin, Camera, Heart, Download } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
  camera?: string;
  likes: number;
}

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const photos: Photo[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=600',
      title: 'Sunset at the Lake',
      description: 'A peaceful evening by the lake, watching the sun set behind the mountains. This moment reminded me of the importance of taking time to appreciate nature\'s beauty.',
      location: 'Lake Tahoe, California',
      date: '2024-01-15',
      category: 'Nature',
      camera: 'Canon EOS R5',
      likes: 42
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600',
      title: 'Working from Home',
      description: 'My daily workspace setup. This corner of my home has become my creative sanctuary where ideas come to life.',
      location: 'Home Office',
      date: '2024-01-12',
      category: 'Lifestyle',
      camera: 'iPhone 14 Pro',
      likes: 28
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=600',
      title: 'Coffee Shop Moments',
      description: 'Finding inspiration in the local coffee shop. Sometimes the best ideas come when you\'re surrounded by the gentle buzz of conversation.',
      location: 'Downtown Café',
      date: '2024-01-10',
      category: 'Lifestyle',
      camera: 'Sony A7 III',
      likes: 35
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&h=600',
      title: 'My Furry Friend',
      description: 'Meet Charlie, my constant companion during work-from-home days. This little guy always knows how to make me smile.',
      location: 'Home',
      date: '2024-01-08',
      category: 'Personal',
      camera: 'Canon EOS R6',
      likes: 56
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=600',
      title: 'Code in the Matrix',
      description: 'Late night coding session working on a challenging project. The Matrix-style visualization always keeps me motivated.',
      location: 'Home Office',
      date: '2024-01-05',
      category: 'Tech',
      camera: 'MacBook Pro Screenshot',
      likes: 23
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=600',
      title: 'Morning Hike',
      description: 'Starting the day with a refreshing hike. There\'s nothing quite like the morning air and the promise of a new day.',
      location: 'Rocky Mountain Trail',
      date: '2024-01-03',
      category: 'Adventure',
      camera: 'GoPro Hero 11',
      likes: 47
    }
  ];

  const categories = ['All', 'Nature', 'Lifestyle', 'Personal', 'Tech', 'Adventure'];

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600 mb-8">
            Moments captured through my lens - stories told through images
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                  : ''
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <Card 
              key={photo.id} 
              className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
                    {photo.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center space-x-2 bg-black bg-opacity-50 rounded-full px-3 py-1">
                    <Heart className="h-4 w-4 text-white" />
                    <span className="text-white text-sm">{photo.likes}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {photo.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{photo.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(photo.date)}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-2">
                  {photo.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Detail Modal */}
        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedPhoto && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedPhoto.title}</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src={selectedPhoto.src}
                      alt={selectedPhoto.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-700">{selectedPhoto.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-700">{formatDate(selectedPhoto.date)}</span>
                        </div>
                        {selectedPhoto.camera && (
                          <div className="flex items-center space-x-3">
                            <Camera className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-700">{selectedPhoto.camera}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-3">
                          <Heart className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-700">{selectedPhoto.likes} likes</span>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
                          {selectedPhoto.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Story</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedPhoto.description}
                      </p>
                      
                      <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Download className="mr-2 h-4 w-4" />
                          Download Photo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Gallery;
