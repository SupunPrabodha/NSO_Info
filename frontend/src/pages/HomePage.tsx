import { useState } from 'react';
import { mockNews } from '../mocks/news';
import { mockQuickLinks } from '../mocks/quickLinks';
import { mockEvents } from '../mocks/events';
import { mockHighlights } from '../mocks/highlights';
import { mockHeroImages } from '../mocks/heroImages';
import Card from '../components/Card';
import { Calendar, FileText, Zap, ArrowRight, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DocumentTextIcon,
  UserIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const iconMap: Record<string, any> = {
  Zap,
  DocumentTextIcon,
  UserIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockHeroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockHeroImages.length) % mockHeroImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div className="relative h-[400px] bg-gradient-to-r from-primary via-accent to-primary overflow-hidden">
        {mockHeroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-primary/70 to-accent/70 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{image.title}</h1>
                  <p className="text-xl text-gray-100">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {mockHeroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockHighlights.map((highlight) => {
            const Icon = iconMap[highlight.icon] || Zap;
            return (
              <Card key={highlight.id} hover>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-1">{highlight.value}</h3>
                    <p className="text-sm font-medium text-gray-700">{highlight.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{highlight.description}</p>
                  </div>
                  {highlight.trend && (
                    <div className={`flex items-center text-sm ${highlight.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {highlight.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="ml-1">{highlight.trendValue}</span>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-secondary flex items-center">
                <FileText className="h-6 w-6 text-primary mr-2" />
                Latest Updates
              </h2>
              <Link to="/news" className="text-primary hover:text-accent flex items-center text-sm font-medium">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {mockNews.slice(0, 3).map((news) => (
                <Card key={news.id} hover>
                  <div className="flex gap-4">
                    {news.imageUrl && (
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded mb-2">
                        {news.category}
                      </span>
                      <h3 className="font-semibold text-secondary mb-2">{news.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{news.excerpt}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-secondary flex items-center mb-6">
              <Calendar className="h-6 w-6 text-primary mr-2" />
              Events
            </h2>
            <Card>
              <div className="space-y-4">
                {mockEvents.slice(0, 4).map((event) => (
                  <div key={event.id} className="border-l-4 border-primary pl-3">
                    <h4 className="font-semibold text-sm text-secondary">{event.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{event.location}</p>
                    <p className="text-xs text-primary font-medium mt-1">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
            <Zap className="h-6 w-6 text-primary mr-2" />
            Quick Access
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockQuickLinks.slice(0, 8).map((link) => {
              const Icon = iconMap[link.icon] || Zap;
              return (
                <Card key={link.id} hover>
                  <Link to={link.url} className="block text-center">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm text-secondary mb-1">{link.title}</h3>
                    <p className="text-xs text-gray-500">{link.description}</p>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
