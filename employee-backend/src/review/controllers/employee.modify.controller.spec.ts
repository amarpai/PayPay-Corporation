import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeModifyController } from './employee.modify.controller';

describe('EmployeeModifyController', () => {
  let controller: EmployeeModifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeModifyController],
    }).compile();

    controller = module.get<EmployeeModifyController>(EmployeeModifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});