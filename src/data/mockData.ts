import { Job, User } from '../types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'We are seeking an experienced Frontend Developer to join our team...',
    requirements: [
      '5+ years of React experience',
      'Strong TypeScript skills',
      'Experience with modern CSS frameworks',
    ],
    posted: '2024-03-15',
    industry: 'Technology',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'Design Innovations',
    location: 'Remote',
    type: 'Remote',
    salary: '$90,000 - $130,000',
    description: 'Join our creative team as a Product Designer...',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma',
      'Experience with design systems',
    ],
    posted: '2024-03-14',
    industry: 'Design',
    skills: ['UI/UX', 'Figma', 'Design Systems', 'User Research'],
  },
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'jobseeker',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
};