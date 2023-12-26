import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product.module';
import { ServerGateway } from './utils/event.gateway';
import { CategoryModule } from './modules/category.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/training_nestjs_dev'),
    ProductModule,
    CategoryModule,
    AuthModule,
  ],
  providers: [ServerGateway],
})
export class AppModule {}
