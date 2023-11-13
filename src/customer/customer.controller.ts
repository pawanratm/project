import { Controller, Get, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDTO } from 'src/dto/atm.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomer(): CustomerDTO[] {
    return this.customerService.findAll();
  }
  @Get(':accountNumber')
  getAccountBalnce(@Param('accountNumber') accountNumber: string): number {
    return this.customerService.findCustomerBalance(accountNumber);
  }
}
