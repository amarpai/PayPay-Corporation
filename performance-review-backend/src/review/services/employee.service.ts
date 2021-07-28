/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from '../interfaces/employee.interface';
import { CreateEmployeeDTO } from '../dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel('Employee') private readonly employeeModel: Model<Employee>) {}

  async addEmployee(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
    const newEmployee = await this.employeeModel.create(createEmployeeDTO);
    return newEmployee.save();
  }

  async getEmployee(reviewID: any): Promise<Employee> {
    const employee = await this.employeeModel.findById(reviewID).exec();
    return employee;
  }

  async getEmployees(): Promise<Employee[]> {
    const employees = await this.employeeModel.find().exec();
    return employees;
  }
}
