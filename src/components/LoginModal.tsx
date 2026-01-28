
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, role: 'admin' | 'friend') => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [requestMessage, setRequestMessage] = useState('');
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo authentication
    if (email === 'admin@example.com' && password === 'admin') {
      onLogin(email, 'admin');
      toast({ title: 'Success', description: 'Logged in as admin!' });
      onClose();
    } else if (email && password) {
      onLogin(email, 'friend');
      toast({ title: 'Success', description: 'Logged in successfully!' });
      onClose();
    } else {
      toast({ title: 'Error', description: 'Please enter valid credentials' });
    }
  };

  const handleRequestAccess = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: 'Request Sent', 
      description: 'Your access request has been sent for approval.' 
    });
    onClose();
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setRequestMessage('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Access My Personal Content</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="request">Request Access</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            
            <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
              <p className="font-medium mb-1">Demo Credentials:</p>
              <p>Friend: any email/password combo</p>
            </div>
          </TabsContent>
          
          <TabsContent value="request" className="space-y-4">
            <form onSubmit={handleRequestAccess} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="requestEmail">Your Email</Label>
                <Input
                  id="requestEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Why would you like access?</Label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Tell me why you'd like to view my personal content..."
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Request
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
