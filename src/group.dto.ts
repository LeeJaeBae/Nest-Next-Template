import { Student } from './student';

export type GroupDto = {
  id: number;
  student: Student[];
  point: number;
};
