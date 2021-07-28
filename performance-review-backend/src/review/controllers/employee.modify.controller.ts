import { Controller, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { CreateEmployeeDTO } from '../dto/create-employee.dto';

@Controller('api/v1/performance/review')
export class EmployeeModifyController {
  constructor(private employeeService: EmployeeService) {}

  /**
   * Description: POST method to create Performance Review entity.
   * Input: CreateReviewDTO
   * Output: {message: "success/Error", "review": {object<Review>}}
   */
  @Post('/create')
  async addReview(@Res() res, @Body() createEmployeeDTO: CreateEmployeeDTO) {
    const newEmployee = await this.employeeService.addEmployee(createEmployeeDTO);
    if (newEmployee) {
      return res.status(HttpStatus.OK).json({
        message: 'Employee created successfully!',
        review: newEmployee,
      });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error with create API! Please try again..',
        review: createEmployeeDTO,
      });
    }
  }
}
