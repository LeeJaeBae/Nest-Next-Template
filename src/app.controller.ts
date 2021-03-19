import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Render('Home')
  @Get()
  getHome() {
    return this.appService.getHome('test');
  }
}
