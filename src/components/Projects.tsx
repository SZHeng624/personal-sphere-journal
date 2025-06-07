import { useState } from 'react';
import { ExternalLink, Calendar, Code, Target, Star, Users, TrendingUp } from 'lucide-react';
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '课程': return '📚';
      case '校内': return '🏫';
      case '实习': return '💼';
      default: return '🚀';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '课程': return 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case '校内': return 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
      case '实习': return 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default: return 'bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 rounded-lg bg-primary/10 text-primary mb-4">
            <Code size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-shadow">
            项目作品集
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            展示我在学习和实践过程中完成的各类项目，涵盖产品设计、数据分析和技术开发
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 glass-effect p-2 rounded-xl border border-border/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
                }`}
              >
                <span className="mr-2">{getCategoryIcon(category)}</span>
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="hover-lift interactive-card border-gradient glow-effect group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(project.category)}`}>
                    <span className="mr-1">{getCategoryIcon(project.category)}</span>
                    {project.category}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 group-hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar size={14} className="mr-2" />
                  {project.time}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div>
                  <div className="flex items-center mb-3">
                    <Code size={16} className="text-primary mr-2" />
                    <span className="text-sm font-semibold text-foreground">技术栈</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <div className="flex items-center mb-3">
                    <Target size={16} className="text-primary mr-2" />
                    <span className="text-sm font-semibold text-foreground">项目成果</span>
                  </div>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="text-sm text-foreground/80 flex items-start group/item">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="group-hover/item:text-foreground transition-colors duration-200">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Stats */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Star size={12} className="mr-1" />
                      <span>优秀项目</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp size={12} className="mr-1" />
                      <span>高影响力</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <p className="text-xl text-muted-foreground">
              暂无{activeFilter}类项目
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;