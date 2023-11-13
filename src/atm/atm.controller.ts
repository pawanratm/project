import { Controller, Get, Param, Query, Post, Patch } from '@nestjs/common';
import { AtmService } from './atm.service';
import { AtmDTO } from 'src/dto/atm.dto';

@Controller('atm')
export class AtmController {
  constructor(private atmService: AtmService) {}
  @Get()
  getAllCash(): AtmDTO[] {
    return this.atmService.findAll();
  }
  @Get('total')
  getAtmBalance(): number {
    return this.atmService.calAtmBalance();
  }

  @Get(':id')
  getCashById(@Param('id') id: string) {
    return this.atmService.findById(Number(id));
  }

  @Patch(':amount')
  withdraw(@Param('amount') amount: string) {
    const accountNum = '123456';
    return this.atmService.withdrawAmount(Number(amount), accountNum);
  }
}
