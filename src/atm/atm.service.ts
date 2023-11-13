import { Injectable } from '@nestjs/common';
import { CustomerService } from 'src/customer/customer.service';
import { AtmDTO } from 'src/dto/atm.dto';
@Injectable()
export class AtmService {
  private atmData: AtmDTO[] = [
    { id: 1, name: '1000', value: 1000, amount: 10 },
    { id: 2, name: '500', value: 500, amount: 10 },
    { id: 3, name: '100', value: 100, amount: 10 },
  ];

  constructor(private customerService: CustomerService) {}

  findAll(): AtmDTO[] {
    return this.atmData;
  }

  findById(id: number) {
    return this.atmData.find((note) => note.id === id);
  }

  calAtmBalance(): number {
    let total = this.atmData.reduce(
      (acc, note) => acc + note.value * note.amount,
      0,
    );
    return total;
  }

  withdrawAmount(amount: number, accountNum: string): object {
    const totalBalance = this.calAtmBalance();
    const getAccountBalnce =
      this.customerService.findCustomerBalance(accountNum);
    if (amount > totalBalance) {
      return { status: false, message: 'Not enough money', atm: this.atmData };
    }

    let result = [];
    this.atmData.map((note, index) => {
      if (amount >= 0) {
        const amountNote = Math.min(
          Math.floor(amount / note.value),
          note.amount,
        );
        amount -= amountNote * note.value;
        this.atmData[index].amount -= amountNote;
        result[index] = {
          name: note.name,
          amount: amountNote,
        };
      }
    });
    return {
      status: true,
      message: 'Withdraw Success',
      result: result,
      atm: this.atmData,
    };
  }
}
