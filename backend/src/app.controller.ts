import { Body, Controller, HttpStatus, InternalServerErrorException, Post, Res } from '@nestjs/common';
import express, {Request, Response} from 'express';
import { AppService } from './app.service';
import { Timer } from './entity/timer';

@Controller('timer')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('userAnswer')
  async create(@Res() res: Response,@Body() period:Timer ) {
    try{
      const userAnswer=await this.appService.create(period)
      return res.status(HttpStatus.OK).send({
        statusCode: HttpStatus.CREATED,
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
}
