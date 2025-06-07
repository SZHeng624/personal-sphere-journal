
import Navbar from '@/components/Navbar';
import PersonalInfo from '@/components/PersonalInfo';
import blogData from '@/data/blogData.json';

interface HomeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Home = ({ darkMode, toggleDarkMode }: HomeProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <PersonalInfo data={blogData.personalInfo} />
      </main>
    </div>
  );
};

export default Home;
