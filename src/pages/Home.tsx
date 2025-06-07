
import Navbar from '@/components/Navbar';
import PersonalInfo from '@/components/PersonalInfo';
import { personalInfo } from '@/content';

interface HomeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Home = ({ darkMode, toggleDarkMode }: HomeProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <PersonalInfo data={personalInfo} />
      </main>
    </div>
  );
};

export default Home;
