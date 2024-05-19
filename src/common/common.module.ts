import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule
  ],
  controllers: [CommonController],
  providers: [CommonService],
})
export class CommonModule {}
