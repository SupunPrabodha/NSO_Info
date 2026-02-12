import type { EventDto } from '../types';

export const mockEvents: EventDto[] = [
  {
    id: '1',
    title: 'Dispatch Operations Training',
    description: 'Advanced training on real-time system dispatch and control.',
    eventDate: '2026-02-17',
    eventTime: '09:00 AM',
    location: 'NSO Training Center',
    category: 'Training'
  },
  {
    id: '2',
    title: 'Procurement Planning Workshop',
    description: 'Strategic planning for long-term electricity procurement.',
    eventDate: '2026-02-20',
    eventTime: '10:00 AM',
    location: 'Procurement Division',
    category: 'Workshop'
  },
  {
    id: '3',
    title: 'System Planning Review',
    description: 'Review of demand forecasts and system expansion plans.',
    eventDate: '2026-02-23',
    eventTime: '02:00 PM',
    location: 'NSO Headquarters',
    category: 'Meeting'
  },
  {
    id: '4',
    title: 'Emergency Operation Drill',
    description: 'Simulation of emergency system scenarios and response.',
    eventDate: '2026-02-27',
    eventTime: '08:00 AM',
    location: 'Control Center',
    category: 'Drill'
  },
  {
    id: '5',
    title: 'Stakeholder Coordination Meeting',
    description: 'Coordination with generators and transmission operators.',
    eventDate: '2026-03-03',
    eventTime: '10:30 AM',
    location: 'NSO Headquarters',
    category: 'Coordination'
  }
];
