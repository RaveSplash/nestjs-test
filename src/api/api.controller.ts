import {
  Controller,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UtilsService } from 'src/utils/utils.service';
import { TestDto } from 'test/test.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post('test/:num')
  @UsePipes(new ValidationPipe()) // Use ValidationPipe for parameter validation
  double(@Param('num') num: number): { result: number } {
    const result = this.utilsService.double(num);
    return { result };
  }
}
