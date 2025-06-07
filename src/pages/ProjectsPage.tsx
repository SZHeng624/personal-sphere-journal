
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import { projects } from '@/content';

interface ProjectsPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ProjectsPage = ({ darkMode, toggleDarkMode }: ProjectsPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <Projects projects={projects} />
      </main>
    </div>
  );
};

export default ProjectsPage;
