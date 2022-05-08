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
    const fs = require('fs');
    const text = 'test';
    fs.writeFileSync("target.txt", '\ufeff' + text, {encoding: 'utf8'});
    return test.query.test + "\t" +text;
  }

  @Post("/post")
  postVal(@Body() body): string {
    const fs = require('fs');
    const text = body.Value
    fs.writeFileSync("post.txt", '\ufeff' + text, {encoding: 'utf8'});
    return ;
  }
}

