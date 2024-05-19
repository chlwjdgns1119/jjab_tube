import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [VideoModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
