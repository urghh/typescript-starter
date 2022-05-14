import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getI() {
    return "asd"
  }

  @Get("/comments")
  getHello(@Req() test: Request): string {
    return "test" + test.query.val;
  }

  @Post("/post")
  postVal(@Body() body): string {
    const fs = require('fs');
    const text = body.Value
    fs.writeFileSync("post.txt", '\ufeff' + text, {encoding: 'utf8'});
    return ;
  }
}

