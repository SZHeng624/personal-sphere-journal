
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
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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

      {/* 返回顶部按钮 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
