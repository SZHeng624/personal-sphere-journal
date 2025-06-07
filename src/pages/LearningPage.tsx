
import Navbar from '@/components/Navbar';
import LearningLog from '@/components/LearningLog';
import blogData from '@/data/blogData.json';

interface LearningPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const LearningPage = ({ darkMode, toggleDarkMode }: LearningPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <LearningLog logs={blogData.learningLogs} />
      </main>
    </div>
  );
};

export default LearningPage;
