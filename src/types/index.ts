export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
  industry: string;
  skills: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'employer' | 'jobseeker';
  company?: string;
  avatar?: string;
}

export interface Resume {
  id: string;
  userId: string;
  title: string;
  uploadDate: string;
  matchScore?: number;
}