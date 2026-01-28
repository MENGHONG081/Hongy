
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FileText, Download, Eye, Shield, Calendar, FileImage, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Document {
  id: number;
  name: string;
  type: 'pdf' | 'image' | 'text';
  category: 'identity' | 'professional' | 'certificate' | 'personal';
  description: string;
  uploadDate: string;
  size: string;
  confidential: boolean;
  previewUrl?: string;
}

interface DocumentsProps {
  userRole: 'admin' | 'friend' | 'public';
}

const Documents = ({ userRole }: DocumentsProps) => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();

  const documents: Document[] = [
    {
      id: 1,
      name: 'Professional Cover Letter',
      type: 'pdf',
      category: 'professional',
      description: 'My standard cover letter for job applications and professional opportunities.',
      uploadDate: '2024-01-15',
      size: '245 KB',
      confidential: false,
      previewUrl: '/documents/cover-letter.pdf'
    },
    {
      id: 2,
      name: 'National ID Card',
      type: 'image',
      category: 'identity',
      description: 'Government issued identification document.',
      uploadDate: '2024-01-10',
      size: '1.2 MB',
      confidential: true,
      previewUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250'
    },
    {
      id: 3,
      name: 'Passport',
      type: 'image',
      category: 'identity',
      description: 'International travel document and identification.',
      uploadDate: '2024-01-08',
      size: '2.1 MB',
      confidential: true,
      previewUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=250'
    },
    {
      id: 4,
      name: 'University Degree Certificate',
      type: 'pdf',
      category: 'certificate',
      description: 'Bachelor of Science in Computer Science degree certificate.',
      uploadDate: '2024-01-05',
      size: '876 KB',
      confidential: false,
      previewUrl: '/documents/degree.pdf'
    },
    {
      id: 5,
      name: 'Professional Certification',
      type: 'pdf',
      category: 'certificate',
      description: 'AWS Certified Solutions Architect certification.',
      uploadDate: '2024-01-03',
      size: '512 KB',
      confidential: false,
      previewUrl: '/documents/aws-cert.pdf'
    },
    {
      id: 6,
      name: 'Birth Certificate',
      type: 'image',
      category: 'personal',
      description: 'Official birth certificate document.',
      uploadDate: '2024-01-01',
      size: '1.8 MB',
      confidential: true,
      previewUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=250'
    }
  ];

  const categories = ['All', 'Professional', 'Identity', 'Certificate', 'Personal'];

  const canViewDocument = (doc: Document) => {
    if (!doc.confidential) return true;
    return userRole === 'admin';
  };

  const filteredDocuments = documents.filter(doc => {
    const categoryMatch = selectedCategory === 'All' || 
      doc.category.toLowerCase() === selectedCategory.toLowerCase();
    const accessMatch = canViewDocument(doc);
    return categoryMatch && accessMatch;
  });

  const handleViewDocument = (doc: Document) => {
    if (!canViewDocument(doc)) {
      toast({ 
        title: 'Access Denied', 
        description: 'You need admin privileges to view this document.',
        variant: 'destructive'
      });
      return;
    }
    setSelectedDocument(doc);
  };

  const handleDownload = (doc: Document) => {
    if (!canViewDocument(doc)) {
      toast({ 
        title: 'Access Denied', 
        description: 'You need admin privileges to download this document.',
        variant: 'destructive'
      });
      return;
    }
    toast({ 
      title: 'Download Started', 
      description: `Downloading ${doc.name}...` 
    });
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-6 w-6 text-red-500" />;
      case 'image':
        return <FileImage className="h-6 w-6 text-blue-500" />;
      default:
        return <FileText className="h-6 w-6 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'identity':
        return 'bg-red-100 text-red-800';
      case 'professional':
        return 'bg-blue-100 text-blue-800';
      case 'certificate':
        return 'bg-green-100 text-green-800';
      case 'personal':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Secure Documents</h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Personal and professional document management
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              Your Access Level: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
            </Badge>
            {userRole !== 'admin' && (
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                <Lock className="h-3 w-3 mr-1" />
                Some documents restricted
              </Badge>
            )}
          </div>
        </div>

        {/* Access Notice */}
        {userRole !== 'admin' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-yellow-600" />
              <p className="text-yellow-800">
                <strong>Notice:</strong> Some confidential documents require admin access to view or download.
              </p>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <Card 
              key={doc.id} 
              className={`shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                !canViewDocument(doc) ? 'opacity-75' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {getDocumentIcon(doc.type)}
                    <div>
                      <CardTitle className="text-lg text-gray-900 line-clamp-1">
                        {doc.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getCategoryColor(doc.category)}>
                          {doc.category}
                        </Badge>
                        {doc.confidential && (
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            <Lock className="h-3 w-3 mr-1" />
                            Confidential
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {doc.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(doc.uploadDate)}</span>
                  </div>
                  <span>{doc.size}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleViewDocument(doc)}
                    disabled={!canViewDocument(doc)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDownload(doc)}
                    disabled={!canViewDocument(doc)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Documents Available</h3>
            <p className="text-gray-500">
              {userRole !== 'admin' 
                ? 'You may not have access to documents in this category.'
                : 'No documents found in this category.'
              }
            </p>
          </div>
        )}

        {/* Document Preview Modal */}
        <Dialog open={!!selectedDocument} onOpenChange={() => setSelectedDocument(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedDocument && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-2">
                    {getDocumentIcon(selectedDocument.type)}
                    <span>{selectedDocument.name}</span>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {selectedDocument.type === 'image' && selectedDocument.previewUrl && (
                    <div className="text-center">
                      <img
                        src={selectedDocument.previewUrl}
                        alt={selectedDocument.name}
                        className="max-w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                  
                  {selectedDocument.type === 'pdf' && (
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">PDF Preview not available</p>
                      <p className="text-sm text-gray-500 mt-2">Click download to view the full document</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Document Details</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-500">Category:</span>
                          <Badge className={`ml-2 ${getCategoryColor(selectedDocument.category)}`}>
                            {selectedDocument.category}
                          </Badge>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Upload Date:</span>
                          <span className="ml-2 text-gray-700">{formatDate(selectedDocument.uploadDate)}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">File Size:</span>
                          <span className="ml-2 text-gray-700">{selectedDocument.size}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Type:</span>
                          <span className="ml-2 text-gray-700">{selectedDocument.type.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedDocument.description}
                      </p>
                      
                      <div className="mt-6">
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => handleDownload(selectedDocument)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Document
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

export default Documents;
