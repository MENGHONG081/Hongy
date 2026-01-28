
import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navigation from './components/Navigation';
import LoginModal from './components/LoginModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Documents from './pages/Documents';
import Admin from './pages/Admin';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'friend' | 'public'>('public');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = (email: string, role: 'admin' | 'friend') => {
    setIsAuthenticated(true);
    setUserRole(role);
    console.log(`User logged in: ${email} with role: ${role}`);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('public');
    console.log('User logged out');
  };

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-white">
            <Navigation
              isAuthenticated={isAuthenticated}
              userRole={userRole}
              onLogin={handleOpenLogin}
              onLogout={handleLogout}
            />
            
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    isAuthenticated={isAuthenticated} 
                    onLogin={handleOpenLogin} 
                  />
                } 
              />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route 
                path="/blog" 
                element={
                  isAuthenticated ? <Blog /> : <Home isAuthenticated={isAuthenticated} onLogin={handleOpenLogin} />
                } 
              />
              <Route 
                path="/gallery" 
                element={
                  isAuthenticated ? <Gallery /> : <Home isAuthenticated={isAuthenticated} onLogin={handleOpenLogin} />
                } 
              />
              <Route 
                path="/documents" 
                element={
                  isAuthenticated ? <Documents userRole={userRole} /> : <Home isAuthenticated={isAuthenticated} onLogin={handleOpenLogin} />
                } 
              />
              <Route 
                path="/admin" 
                element={<Admin userRole={userRole} />} 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <LoginModal
              isOpen={isLoginModalOpen}
              onClose={handleCloseLogin}
              onLogin={handleLogin}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
