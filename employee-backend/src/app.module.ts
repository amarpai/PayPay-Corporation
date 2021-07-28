import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './review/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/paypay-corporation', {
      useNewUrlParser: true,
    }),
    EmployeeModule,
  ]
})
export class AppModule {}
