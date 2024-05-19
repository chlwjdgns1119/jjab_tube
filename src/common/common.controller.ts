import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CommonService } from './common.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Video_MulterOptions } from './Multer-Options/common.multer-options';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', Video_MulterOptions))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
