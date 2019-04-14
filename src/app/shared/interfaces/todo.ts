import { Category } from './category';

export enum Status {
  DONE = 'done',
  STARTED = 'started',
  TODO = 'todo'
}

export interface Todo {
  task: string;
  status: Status;
  doneOn: Date | null;
  createdAt: Date | null;
  category: Category | null;
  dueDateTime: Date;
  id: string;
}
