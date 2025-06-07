
import Navbar from '@/components/Navbar';
import Resources from '@/components/Resources';
import { resources } from '@/content';

interface ResourcesPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ResourcesPage = ({ darkMode, toggleDarkMode }: ResourcesPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <Resources resources={resources} />
      </main>
    </div>
  );
};

export default ResourcesPage;
