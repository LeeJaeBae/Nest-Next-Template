import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentDto } from './student.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Render('Home')
  @Get()
  getHome() {
    return this.appService.getAllStudent();
  }

  @Post()
  createOne(@Body() data: StudentDto) {
    return this.appService.createStudent(data);
  }
}
