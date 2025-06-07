
import Navbar from '@/components/Navbar';
import Articles from '@/components/Articles';
import blogData from '@/data/blogData.json';

interface ArticlesPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ArticlesPage = ({ darkMode, toggleDarkMode }: ArticlesPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <Articles articles={blogData.articles} />
      </main>
    </div>
  );
};

export default ArticlesPage;
