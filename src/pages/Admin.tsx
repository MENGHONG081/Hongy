
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Settings, 
  FileText, 
  Image, 
  Upload, 
  Save, 
  Trash2, 
  Users, 
  Shield,
  Plus,
  Edit3
} from 'lucide-react';

interface AdminProps {
  userRole: 'admin' | 'friend' | 'public';
}

const Admin = ({ userRole }: AdminProps) => {
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'Lifestyle' });
  const [newDocument, setNewDocument] = useState({ name: '', category: 'professional', description: '' });
  const { toast } = useToast();

  if (userRole !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
            <p className="text-gray-600">You need admin privileges to access this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Success', description: 'Blog post created successfully!' });
    setNewPost({ title: '', content: '', category: 'Lifestyle' });
  };

  const handleUploadDocument = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Success', description: 'Document uploaded successfully!' });
    setNewDocument({ name: '', category: 'professional', description: '' });
  };

  const recentActivities = [
    { action: 'New blog post created', time: '2 hours ago', type: 'blog' },
    { action: 'Document uploaded', time: '1 day ago', type: 'document' },
    { action: 'Gallery photo added', time: '3 days ago', type: 'gallery' },
    { action: 'User access granted', time: '1 week ago', type: 'user' }
  ];

  const stats = [
    { label: 'Total Blog Posts', value: '24', icon: FileText, color: 'text-blue-600' },
    { label: 'Gallery Photos', value: '156', icon: Image, color: 'text-green-600' },
    { label: 'Documents', value: '12', icon: Shield, color: 'text-purple-600' },
    { label: 'Registered Users', value: '8', icon: Users, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Settings className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <p className="text-xl text-gray-600">
            Manage your website content and settings
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="blog" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="blog">Blog Management</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              {/* Blog Management */}
              <TabsContent value="blog">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plus className="h-5 w-5" />
                      <span>Create New Blog Post</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCreatePost} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Post Title</Label>
                        <Input
                          id="title"
                          value={newPost.title}
                          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                          placeholder="Enter post title..."
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <select
                          id="category"
                          value={newPost.category}
                          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Lifestyle">Lifestyle</option>
                          <option value="Career">Career</option>
                          <option value="Travel">Travel</option>
                          <option value="Tech">Tech</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="content">Post Content</Label>
                        <Textarea
                          id="content"
                          value={newPost.content}
                          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                          placeholder="Write your blog post content..."
                          rows={6}
                          required
                        />
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button type="submit" className="flex-1">
                          <Save className="mr-2 h-4 w-4" />
                          Publish Post
                        </Button>
                        <Button type="button" variant="outline">
                          <Edit3 className="mr-2 h-4 w-4" />
                          Save Draft
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Document Management */}
              <TabsContent value="documents">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Upload className="h-5 w-5" />
                      <span>Upload New Document</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUploadDocument} className="space-y-4">
                      <div>
                        <Label htmlFor="docName">Document Name</Label>
                        <Input
                          id="docName"
                          value={newDocument.name}
                          onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
                          placeholder="Enter document name..."
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="docCategory">Category</Label>
                        <select
                          id="docCategory"
                          value={newDocument.category}
                          onChange={(e) => setNewDocument({ ...newDocument, category: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="professional">Professional</option>
                          <option value="identity">Identity</option>
                          <option value="certificate">Certificate</option>
                          <option value="personal">Personal</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="docDescription">Description</Label>
                        <Textarea
                          id="docDescription"
                          value={newDocument.description}
                          onChange={(e) => setNewDocument({ ...newDocument, description: e.target.value })}
                          placeholder="Describe this document..."
                          rows={3}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="file">Choose File</Label>
                        <Input
                          id="file"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          className="cursor-pointer"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Document
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Gallery Management */}
              <TabsContent value="gallery">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Image className="h-5 w-5" />
                      <span>Add Gallery Photo</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="photoTitle">Photo Title</Label>
                        <Input
                          id="photoTitle"
                          placeholder="Enter photo title..."
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="photoDescription">Description</Label>
                        <Textarea
                          id="photoDescription"
                          placeholder="Describe this photo..."
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="photoFile">Choose Photo</Label>
                        <Input
                          id="photoFile"
                          type="file"
                          accept=".jpg,.jpeg,.png,.gif"
                          className="cursor-pointer"
                        />
                      </div>
                      
                      <Button className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Photo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 pb-3 border-b border-gray-100 last:border-b-0">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Manage Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Site Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Security Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Cache
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
