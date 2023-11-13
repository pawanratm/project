import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AtmModule } from './atm/atm.module';
import { CustomerModule } from './customer/customer.module';
import { UsersModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost:27017/project'),
    ProductModule,
    AtmModule,
    CustomerModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
