import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PersonalInfo from '@/components/PersonalInfo';
import Projects from '@/components/Projects';
import LearningLog from '@/components/LearningLog';
import Interests from '@/components/Interests';
import Resources from '@/components/Resources';
import Articles from '@/components/Articles';
import blogData from '@/data/blogData.json';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <PersonalInfo data={blogData.personalInfo} />
        <Projects projects={blogData.projects} />
        <LearningLog logs={blogData.learningLogs} />
        <Interests interests={blogData.interests} />
        <Resources resources={blogData.resources} />
        <Articles articles={blogData.articles} />
      </main>

      {/* Enhanced Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="no-print fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl hover:shadow-primary/25 hover:scale-110 transition-all duration-300 z-40 group glow-effect"
        aria-label="返回顶部"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:-translate-y-1 transition-transform duration-300"
        >
          <path 
            d="M7 14L12 9L17 14" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Floating Action Menu */}
      <div className="no-print fixed bottom-8 left-8 flex flex-col gap-3 z-40">
        <button
          onClick={() => window.print()}
          className="p-3 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          aria-label="打印页面"
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-110 transition-transform duration-300"
          >
            <path 
              d="M6 9V2H18V9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M6 18H4C3.44772 18 3 17.5523 3 17V11C3 10.4477 3.44772 10 4 10H20C20.5523 10 21 10.4477 21 11V17C21 17.5523 20.5523 18 20 18H18" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M18 14H6V22H18V14Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Index;