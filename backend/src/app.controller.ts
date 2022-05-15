import { Body, Controller, Get, HttpStatus, InternalServerErrorException, Post, Res } from '@nestjs/common';
import express, {Request, Response} from 'express';
import { AppService } from './app.service';
import { Timer } from './entity/timer';

@Controller('timer')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('createTimer')
  async create(@Res() res: Response,@Body() period:Timer ) {
    try{
      const userAnswer=await this.appService.create(period)
      return res.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        userAnswer: userAnswer
      });
    }
    catch(err){
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        errors: err,
        message: 'something went wrong',
      });
    }
  }
  @Get('allTimers')
  async findAll(@Res() res: Response) {
    try{
      const timer=await this.appService.findAll(); 
      return res.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
       timer : timer,
      }); }

    catch(err){
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        errors: err,
        message: 'something went wrong',
      });
    }
  }
}
