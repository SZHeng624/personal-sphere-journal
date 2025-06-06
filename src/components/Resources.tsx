
import { Tool, Globe, BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ResourcesProps {
  resources: any;
}

const Resources = ({ resources }: ResourcesProps) => {
  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            资源工具箱
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            分享实用工具、网站资源和推荐书籍
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 工具 */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tool className="mr-2 text-primary" size={24} />
                实用工具
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resources.tools.map((tool: any, index: number) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {tool.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {tool.description}
                      </p>
                    </div>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-700 transition-colors ml-2"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 网站 */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 text-primary" size={24} />
                推荐网站
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resources.websites.map((website: any, index: number) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {website.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {website.description}
                      </p>
                    </div>
                    <a
                      href={website.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-700 transition-colors ml-2"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 书籍 */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 text-primary" size={24} />
                推荐书单
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resources.books.map((book: any, index: number) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {book.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                    作者：{book.author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {book.recommendation}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;
