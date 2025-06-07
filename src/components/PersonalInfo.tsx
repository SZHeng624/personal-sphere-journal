import { useState } from 'react';
import { Mail, Github, Linkedin, Award, ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PersonalInfoProps {
  data: any;
}

const PersonalInfo = ({ data }: PersonalInfoProps) => {
  const [showAwards, setShowAwards] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse"></div>
            <img
              src={data.avatar}
              alt="头像"
              className="relative w-40 h-40 rounded-full mx-auto border-4 border-primary/20 shadow-2xl animate-float glow-effect"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-shadow">
            <span className="gradient-text">{data.name}</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8 animate-slide-up">
            {data.title}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <MapPin size={16} />
              <span className="text-sm font-medium">武汉大学</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Calendar size={16} />
              <span className="text-sm font-medium">2024届毕业生</span>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {/* Education Card */}
          <Card className="hover-lift interactive-card border-gradient glow-effect">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">教育背景</h3>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-lg">{data.education.school}</p>
                <p className="text-muted-foreground">{data.education.major}</p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    本科学位
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills Card */}
          <Card className="hover-lift interactive-card border-gradient glow-effect">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">技术技能</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.skills.technical.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills Card */}
          <Card className="hover-lift interactive-card border-gradient glow-effect">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">软技能</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.skills.soft.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Awards Card */}
          <Card className="md:col-span-2 lg:col-span-2 hover-lift interactive-card border-gradient glow-effect">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">奖项成就</h3>
                </div>
                <button
                  onClick={() => setShowAwards(!showAwards)}
                  className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  {showAwards ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              {showAwards && (
                <ul className="space-y-4 animate-fade-in">
                  {data.awards.map((award: string, index: number) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                      <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                        {award}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="hover-lift interactive-card border-gradient glow-effect">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">📧</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">联系方式</h3>
              </div>
              <div className="space-y-4">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="flex items-center text-foreground/80 hover:text-primary transition-all duration-200 group p-3 rounded-lg hover:bg-primary/5"
                >
                  <Mail size={18} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">邮箱</span>
                </a>
                <a
                  href={data.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground/80 hover:text-primary transition-all duration-200 group p-3 rounded-lg hover:bg-primary/5"
                >
                  <Github size={18} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground/80 hover:text-primary transition-all duration-200 group p-3 rounded-lg hover:bg-primary/5"
                >
                  <Linkedin size={18} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-bounce-in">
          <a
            href="#projects"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            探索我的作品
            <span className="animate-bounce">👇</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;