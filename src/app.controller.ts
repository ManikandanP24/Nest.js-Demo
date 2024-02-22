import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  // @Post()
  // postHello(@Body('name') name:string,@Body('age') age:number): string {
  //   return 'I am ' + name + 'My Age is ' + age;
  // }
  
  // @Get(':id')
  // getOne(@Param('id') id:string ): string {
  //   return id;
  // }

  // @Put()
  // puttHello(): string {
  //   return " Put Statement";
  // }

 
}