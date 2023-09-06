import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsService } from './utils/utils.service';
import { ApiController } from './api/api.controller';
import { TestDto } from 'test/test.dto';

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
