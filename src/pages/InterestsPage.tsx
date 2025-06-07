
import Navbar from '@/components/Navbar';
import Interests from '@/components/Interests';
import { interests } from '@/content';

interface InterestsPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const InterestsPage = ({ darkMode, toggleDarkMode }: InterestsPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <Interests interests={interests} />
      </main>
    </div>
  );
};

export default InterestsPage;
