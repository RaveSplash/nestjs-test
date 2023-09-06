import { IsNumber } from 'class-validator';

export class TestDto {
  @IsNumber()
  num: number;
}
