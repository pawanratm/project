import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { name: 'mango', id: 1, price: 50 },
    { name: 'apple', id: 2, price: 40 },
    { name: 'orange', id: 3, price: 90 },
  ];
  findAll(): ProductDTO[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  findByCondition(predicate: (product: ProductDTO) => boolean) {
    return this.products.filter((p) => predicate(p));
  }
}
