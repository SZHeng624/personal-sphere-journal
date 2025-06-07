
import { useState } from 'react';
import { Calendar, Tag, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LearningLogProps {
  logs: any[];
}

const LearningLog = ({ logs }: LearningLogProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  
  // 生成日历视图数据
  const generateCalendarData = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    const calendarDays = [];
    
    // 添加空白天数
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(null);
    }
    
    // 添加月份天数
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasLog = logs.some(log => log.date === dateStr);
      calendarDays.push({ day, hasLog, date: dateStr });
    }
    
    return calendarDays;
  };

  const calendarData = generateCalendarData();
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <section id="learning" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            学习记录
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            记录每日学习足迹，追踪成长轨迹
          </p>
        </div>

        {/* 视图切换 */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-card border border-border p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center ${
                viewMode === 'list'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <BookOpen size={16} className="mr-2" />
              列表视图
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center ${
                viewMode === 'calendar'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Calendar size={16} className="mr-2" />
              日历视图
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          /* 列表视图 */
          <div className="space-y-4">
            {logs.map((log, index) => (
              <Card key={index} className="hover-lift animate-fade-in bg-card border-border" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Calendar size={16} className="text-primary mr-2" />
                        <span className="text-sm text-muted-foreground">
                          {new Date(log.date).toLocaleDateString('zh-CN')}
                        </span>
                      </div>
                      <p className="text-card-foreground mb-3">
                        {log.content}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {log.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* 日历视图 */
          <Card className="max-w-md mx-auto bg-card border-border">
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                {new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendarData.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square flex items-center justify-center text-sm rounded ${
                      day ? (
                        day.hasLog
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'text-card-foreground hover:bg-muted'
                      ) : ''
                    }`}
                  >
                    {day?.day}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <span className="inline-block w-3 h-3 bg-primary rounded mr-2"></span>
                有学习记录的日期
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default LearningLog;
