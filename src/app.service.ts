import { Injectable } from '@nestjs/common';
import { Group } from './group';
import { Student } from './student';

import { StudentDto } from './student.dto';

@Injectable()
export class AppService {
  data: Student[] = [];
  groupCount = 0;
  groups: Group[] = [];
  history: any[] = [];

  getAllStudent() {
    return { data: this.data };
  }

  createStudent(data: StudentDto) {
    if (this.findOne(data)) {
      return this.getAllStudent();
    }
    this.data.push(new Student(data.name));
    return this.getAllStudent();
  }

  findOne(data: StudentDto) {
    const one = this.data.find((v) => v.name === data.name);
    if (one) {
      return one;
    } else {
      return null;
    }
  }

  insertLoveStudents(data: StudentDto) {
    const one = this.findOne(data);
    one?.setLoveStudent({ ...data });
  }

  insertHateStudents(data: StudentDto) {
    const one = this.findOne(data);
    one?.setHateStudent({ ...data });
  }
}
