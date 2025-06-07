
import Navbar from '@/components/Navbar';
import Resources from '@/components/Resources';
import blogData from '@/data/blogData.json';

interface ResourcesPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ResourcesPage = ({ darkMode, toggleDarkMode }: ResourcesPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <Resources resources={blogData.resources} />
      </main>
    </div>
  );
};

export default ResourcesPage;
