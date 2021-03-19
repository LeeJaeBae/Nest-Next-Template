import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(@Param('title') title?: string) {
    return { title };
  }
}
