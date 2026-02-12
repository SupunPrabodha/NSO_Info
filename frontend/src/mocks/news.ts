import type { NewsDto } from '../types';

export const mockNews: NewsDto[] = [
  {
    id: '1',
    title: 'System Dispatch Operations Optimized',
    excerpt: 'NSO implements advanced AI-driven dispatch management for maximum grid efficiency.',
    content: 'Full article content here...',
    category: 'Operations',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800',
    publishedAt: '2026-02-05',
    author: 'Operations Division'
  },
  {
    id: '2',
    title: 'Power Procurement Framework Updated',
    excerpt: 'New competitive bidding procedures approved to enhance electricity procurement efficiency.',
    content: 'Full article content here...',
    category: 'Procurement',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    publishedAt: '2026-02-04',
    author: 'Procurement Team'
  },
  {
    id: '3',
    title: 'Demand Forecasting Accuracy Reaches 98%',
    excerpt: 'Advanced forecasting models ensure optimal planning and system stability.',
    content: 'Full article content here...',
    category: 'Planning',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    publishedAt: '2026-02-03',
    author: 'Planning Division'
  },
  {
    id: '4',
    title: 'System Stability Report - January 2026',
    excerpt: 'Power system maintained excellent stability throughout the month.',
    content: 'Full article content here...',
    category: 'Reports',
    imageUrl: 'https://images.unsplash.com/photo-1642536473529-a6a37e69d1ff?w=800',
    publishedAt: '2026-02-02',
    author: 'System Planning'
  }
];
