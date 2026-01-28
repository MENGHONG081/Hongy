
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Heart, MessageCircle, Share } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  likes: number;
  comments: number;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'My Journey into Software Development',
      excerpt: 'How I discovered my passion for coding and the challenges I faced along the way...',
      content: 'Full blog post content would go here...',
      author: 'Yaun Menghong',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=400',
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      title: 'Traveling Solo: Lessons from Europe',
      excerpt: 'My first solo trip across Europe taught me more about myself than I ever expected...',
      content: 'Full blog post content would go here...',
      author: 'Yaun Menghong',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=400',
      likes: 42,
      comments: 15
    },
    {
      id: 3,
      title: 'The Art of Work-Life Balance',
      excerpt: 'Finding harmony between career ambitions and personal well-being in the modern world...',
      content: 'Full blog post content would go here...',
      author: 'Yaun Menghong',
      date: '2025-01-05',
      readTime: '4 min read',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=400',
      likes: 31,
      comments: 12
    },
    {
      id: 4,
      title: 'Learning Photography: A New Perspective',
      excerpt: 'How picking up a camera changed the way I see the world around me...',
      content: 'Full blog post content would go here...',
      author: 'Yaun Menghong',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Hobbies',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&h=400',
      likes: 18,
      comments: 6
    }
  ];

  const categories = ['All', 'Career', 'Travel', 'Lifestyle', 'Hobbies'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Blog</h1>
          <p className="text-xl text-gray-600 mb-8">
            Stories, experiences, and thoughts from my journey
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Story</h2>
            
            <Card className="shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
                    {filteredPosts[0].category}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(filteredPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Heart className="h-5 w-5" />
                        <span>{filteredPosts[0].likes}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <MessageCircle className="h-5 w-5" />
                        <span>{filteredPosts[0].comments}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
};

export default Blog;
