
import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ArticlesProps {
  articles: any[];
}

const Articles = ({ articles }: ArticlesProps) => {
  const [activeCategory, setActiveCategory] = useState('全部');
  
  const categories = ['全部', '热点评论', '人生思考', '技术分享'];
  
  const filteredArticles = articles.filter(article => 
    activeCategory === '全部' || article.category === activeCategory
  );

  return (
    <section id="articles" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            深度杂记
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            记录思考，分享见解，探索世界的多元视角
          </p>
        </div>

        {/* 分类过滤器 */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-white dark:bg-slate-700 p-1 rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 文章列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article, index) => (
            <Card key={article.id} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(article.date).toLocaleDateString('zh-CN')}
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <User size={14} className="mr-1" />
                    张三
                  </div>
                  
                  <button className="flex items-center text-primary hover:text-blue-700 transition-colors text-sm font-medium">
                    阅读全文
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              暂无{activeCategory}类文章
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
