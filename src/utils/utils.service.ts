import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  double(num: number): number {
    return num * 2;
  }
}
