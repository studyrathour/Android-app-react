import { Student, Admin, Notification, Event, Fee, Result } from '../models';

export const MOCK_STUDENT: Student = {
  id: 'S001',
  name: 'Alex Johnson',
  email: 'alex@myschool.com',
  class: 'Grade 12 - A',
  rollNumber: '1205',
  avatar: 'https://i.pravatar.cc/300?img=11',
  attendance: 85,
  cgpa: 3.8,
};

export const MOCK_ADMIN: Admin = {
  id: 'A001',
  name: 'Principal Skinner',
  email: 'admin@myschool.com',
  role: 'admin',
  avatar: 'https://i.pravatar.cc/300?img=33',
};

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: '1', title: 'Exam Schedule Released', message: 'Final exams start on Dec 15th.', date: '2h ago', read: false, type: 'alert' },
  { id: '2', title: 'Fee Reminder', message: 'Tuition fee for Q4 is due.', date: '1d ago', read: false, type: 'info' },
  { id: '3', title: 'Sports Day Winner', message: 'Congratulations on winning the relay!', date: '2d ago', read: true, type: 'success' },
];

export const MOCK_EVENTS: Event[] = [
  { id: '1', title: 'Science Fair', date: '2023-11-20', description: 'Annual Science Exhibition', location: 'Main Hall' },
  { id: '2', title: 'Parent Meeting', date: '2023-11-25', description: 'Quarterly review', location: 'Room 101' },
  { id: '3', title: 'Winter Break', date: '2023-12-20', description: 'School closed', location: '-' },
];

export const MOCK_FEES: Fee[] = [
  { id: '1', title: 'Tuition Fee - Q3', amount: 1500, dueDate: '2023-09-30', status: 'paid' },
  { id: '2', title: 'Lab Fee', amount: 200, dueDate: '2023-10-15', status: 'paid' },
  { id: '3', title: 'Tuition Fee - Q4', amount: 1500, dueDate: '2023-12-31', status: 'due' },
];

export const MOCK_RESULTS: Result[] = [
  { id: '1', subject: 'Mathematics', marks: 95, total: 100, grade: 'A+', semester: 'Sem 1' },
  { id: '2', subject: 'Physics', marks: 88, total: 100, grade: 'A', semester: 'Sem 1' },
  { id: '3', subject: 'Chemistry', marks: 76, total: 100, grade: 'B+', semester: 'Sem 1' },
  { id: '4', subject: 'English', marks: 92, total: 100, grade: 'A', semester: 'Sem 1' },
];
