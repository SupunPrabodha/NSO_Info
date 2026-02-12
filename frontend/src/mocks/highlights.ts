import type { HighlightDto } from '../types';

export const mockHighlights: HighlightDto[] = [
  {
    id: '1',
    title: 'Today Peak Demand',
    description: 'Current system demand',
    value: '2,845 MW',
    icon: 'Zap',
    trend: 'up',
    trendValue: '+145 MW'
  },
  {
    id: '2',
    title: 'System Frequency',
    description: 'Real-time frequency',
    value: '50.02 Hz',
    icon: 'Activity',
    trend: 'up',
    trendValue: '+0.05 Hz'
  },
  {
    id: '3',
    title: 'Procurement Success Rate',
    description: 'Competitive bids won',
    value: '94.5%',
    icon: 'ChartBarIcon',
    trend: 'up',
    trendValue: '+2.1%'
  },
  {
    id: '4',
    title: 'System Reliability',
    description: 'Monthly uptime',
    value: '99.95%',
    icon: 'ShieldCheckIcon',
    trend: 'up',
    trendValue: '+0.3%'
  }
];
