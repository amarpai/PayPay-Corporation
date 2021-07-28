import { Module } from '@nestjs/common';
import { EmployeeService } from './services/employee.service';
import { EmployeeModifyController } from './controllers/employee.modify.controller';
import { EmployeeReadController } from './controllers/employee.read.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './schemas/employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }])],
  providers: [EmployeeService],
  controllers: [EmployeeModifyController, EmployeeReadController],
})
export class EmployeeModule {}
