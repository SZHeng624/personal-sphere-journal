
import { useState } from 'react';
import { Mail, Github, Linkedin, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PersonalInfoProps {
  data: any;
}

const PersonalInfo = ({ data }: PersonalInfoProps) => {
  const [showAwards, setShowAwards] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <img
              src={data.avatar}
              alt="头像"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary shadow-lg animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-8">
            {data.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {/* 学历信息 */}
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">教育背景</h3>
              <div className="space-y-2">
                <p className="font-medium">{data.education.school}</p>
                <p className="text-gray-600 dark:text-gray-400">{data.education.major}</p>
              </div>
            </CardContent>
          </Card>

          {/* 技术技能 */}
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">技术技能</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.technical.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 软技能 */}
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">软技能</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.soft.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 奖项成就 */}
          <Card className="md:col-span-2 lg:col-span-2 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary flex items-center">
                  <Award className="mr-2" size={20} />
                  奖项成就
                </h3>
                <button
                  onClick={() => setShowAwards(!showAwards)}
                  className="text-primary hover:text-blue-700 transition-colors"
                >
                  {showAwards ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              {showAwards && (
                <ul className="space-y-2 animate-fade-in">
                  {data.awards.map((award: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {award}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          {/* 联系方式 */}
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">联系方式</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  邮箱
                </a>
                <a
                  href={data.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  GitHub
                </a>
                <a
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
