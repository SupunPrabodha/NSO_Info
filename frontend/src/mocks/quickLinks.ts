import type { QuickLinkDto } from '../types';

export const mockQuickLinks: QuickLinkDto[] = [
  {
    id: '1',
    title: 'Dispatch Center',
    description: 'Real-time system dispatch dashboard',
    url: '/dispatch',
    icon: 'Zap',
    category: 'Operations'
  },
  {
    id: '2',
    title: 'Demand Forecast',
    description: 'System demand predictions',
    url: '/forecast',
    icon: 'ChartBarIcon',
    category: 'Planning'
  },
  {
    id: '3',
    title: 'Procurement Bidding',
    description: 'Power purchase management',
    url: '/procurement',
    icon: 'DocumentTextIcon',
    category: 'Procurement'
  },
  {
    id: '4',
    title: 'System Stability',
    description: 'Real-time stability monitoring',
    url: '/stability',
    icon: 'Activity',
    category: 'Monitoring'
  },
  {
    id: '5',
    title: 'Employee Portal',
    description: 'HR and personnel services',
    url: '/employee',
    icon: 'UserIcon',
    category: 'HR'
  },
  {
    id: '6',
    title: 'Training Programs',
    description: 'Operator training and certification',
    url: '/training',
    icon: 'AcademicCapIcon',
    category: 'Learning'
  },
  {
    id: '7',
    title: 'Documentation',
    description: 'Standard operating procedures',
    url: '/docs',
    icon: 'DocumentTextIcon',
    category: 'Resources'
  },
  {
    id: '8',
    title: 'Analytics',
    description: 'System performance analytics',
    url: '/analytics',
    icon: 'ChartBarIcon',
    category: 'Analytics'
  }
];
