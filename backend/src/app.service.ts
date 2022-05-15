import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Timer } from './entity/timer';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Timer)
  private timerRepository:Repository<Timer>,){}
  async findAll() {
    return await this.timerRepository.find();
  }
  create(period:Timer):Promise<Timer>{
    return this.timerRepository.save(period);
  }
}
