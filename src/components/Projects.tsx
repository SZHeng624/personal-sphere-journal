
import { useState } from 'react';
import { ExternalLink, Calendar, Code, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectsProps {
  projects: any[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState('全部');
  
  const categories = ['全部', '课程', '校内', '实习'];
  
  const filteredProjects = projects.filter(project => 
    activeFilter === '全部' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            项目作品集
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            展示我在学习和实践过程中完成的各类项目
          </p>
        </div>

        {/* 分类过滤器 */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white dark:bg-slate-700 p-1 rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 项目卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {project.time}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* 技术栈 */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Code size={16} className="text-primary mr-2" />
                    <span className="text-sm font-medium">技术栈</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* 成果数据 */}
                <div>
                  <div className="flex items-center mb-2">
                    <Target size={16} className="text-primary mr-2" />
                    <span className="text-sm font-medium">项目成果</span>
                  </div>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
