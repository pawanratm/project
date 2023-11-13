import { Injectable } from '@nestjs/common';
import { CustomerDTO } from 'src/dto/atm.dto';

@Injectable()
export class CustomerService {
  private customerData: CustomerDTO[] = [
    { id: 1, name: 'Billy', balance: 20000, accountNumber: '123456' },
    { id: 2, name: 'John', balance: 109, accountNumber: '234555' },
  ];

  findAll(): CustomerDTO[] {
    return this.customerData;
  }

  findCustomerBalance(accountNumber: string): number {
    const found = this.customerData.find(
      (cus) => cus.accountNumber === accountNumber,
    );
    if (!found) console.log('error');
    return this.customerData.find((cus) => cus.accountNumber === accountNumber)
      .balance;
  }
}
