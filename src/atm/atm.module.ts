import { Module } from '@nestjs/common';
import { AtmController } from './atm.controller';
import { AtmService } from './atm.service';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  controllers: [AtmController],
  providers: [AtmService],
  imports: [CustomerModule],
})
export class AtmModule {}
