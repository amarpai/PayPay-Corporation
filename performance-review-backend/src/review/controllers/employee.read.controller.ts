/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('api/v1/performance/review')
export class EmployeeReadController {
  constructor(private employeeService: EmployeeService) {}

  /**
   * Description: GET method to fetch all performance review from DB
   * Input: NA
   * Output: Array of objects<Review>
   */
  @Get('/')
  async getEmployees(@Res() res) {
    const employees = await this.employeeService.getEmployees();
    return res.status(HttpStatus.OK).json(employees);
  }

  /**
   * Description: GET method to fetch single review object based on ID
   * Input: ReviewId
   * Output: single objects<Review>
   */
  @Get('/:employeeID')
  async getEmployee(@Res() res, @Param('employeeID', new ValidateObjectId()) employeeID) {
    const employee = await this.employeeService.getEmployee(employeeID);
    if (!employee) {
      throw new NotFoundException('Review File does not exist!');
    }
    return res.status(HttpStatus.OK).json(employee);
  }
}
