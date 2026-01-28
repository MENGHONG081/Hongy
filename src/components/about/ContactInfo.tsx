
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactInfo = () => {
  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-blue-600" />
          <span>Get In Touch</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">knews4265@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">0964324308</span>
          </div>
          <div className="flex items-center space-x-3">
            <Linkedin className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">linkedin.com/in/yaun-menghong</span>
          </div>
          <div className="flex items-center space-x-3">
            <Github className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">github.com/yaun-menghong</span>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm" onClick={() => window.location.href = 'mailto:knews4265@gmail.com'}>
            <Mail className="h-4 w-4 mr-2" />
            Email to Me Now
          </Button>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white" size="sm" onClick={() => window.open('https://www.linkedin.com/in/yaun-menghong', '_blank')}>
            <Linkedin className="h-4 w-4 mr-2" />
            Connect Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
