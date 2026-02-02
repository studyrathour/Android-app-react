export interface Student {
  id: string;
  name: string;
  email: string;
  class: string;
  rollNumber: string;
  avatar: string;
  attendance: number;
  cgpa: number;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  role: 'admin';
  avatar: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'info' | 'alert' | 'success';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export interface Fee {
  id: string;
  title: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'due' | 'overdue';
}

export interface Result {
  id: string;
  subject: string;
  marks: number;
  total: number;
  grade: string;
  semester: string;
}

export interface IDCard {
  studentId: string;
  validUntil: string;
  bloodGroup: string;
  emergencyContact: string;
}
