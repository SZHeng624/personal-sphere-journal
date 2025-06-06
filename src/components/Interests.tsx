
import { Film, Zap, Music, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InterestsProps {
  interests: any;
}

const Interests = ({ interests }: InterestsProps) => {
  return (
    <section id="interests" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            兴趣爱好
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            生活不只有工作，还有诗和远方
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 电影 */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Film className="mr-2 text-primary" size={24} />
                电影评论
              </CardTitle>
            </CardHeader>
            <CardContent>
              {interests.movies.map((movie: any, index: number) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {movie.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {movie.review}
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < movie.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 运动 */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 text-primary" size={24} />
                运动健身
              </CardTitle>
            </CardHeader>
            <CardContent>
              {interests.sports.map((sport: any, index: number) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {sport.type}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    水平：{sport.level}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    成就：{sport.achievement}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 音乐 */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="mr-2 text-primary" size={24} />
                音乐分享
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                分享我的音乐品味和喜爱的歌单
              </p>
              <a
                href={interests.music.spotifyPlaylist}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                <Music size={16} className="mr-2" />
                Spotify 歌单
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Interests;
