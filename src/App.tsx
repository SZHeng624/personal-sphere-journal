
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import LearningPage from "./pages/LearningPage";
import InterestsPage from "./pages/InterestsPage";
import ResourcesPage from "./pages/ResourcesPage";
import ArticlesPage from "./pages/ArticlesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/projects" element={<ProjectsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/learning" element={<LearningPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/interests" element={<InterestsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/resources" element={<ResourcesPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/articles" element={<ArticlesPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
