import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
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

  @Get('/love')
  @Render('Love')
  getLove(@Query() query: any) {
    return { name: query.name };
  }

  @Post('/love')
  postLove(@Body() data: StudentDto) {
    this.appService.insertLoveStudents(data);
  }
  @Get('/hate')
  @Render('Hate')
  getHate(@Query() query: any) {
    return { name: query.name };
  }

  @Post('/hate')
  postHate(@Body() data: StudentDto) {
    this.appService.insertHateStudents(data);
  }

  @Get('/group')
  @Render('Group')
  getGroup() {
    return this.appService.getAllStudent();
  }
}
