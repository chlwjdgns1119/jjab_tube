import { ClassSerializerInterceptor, Controller, Get, Res, StreamableFile, UseInterceptors } from '@nestjs/common';
import { VideoService } from './video.service';
import { createReadStream } from 'fs'
import { readFileSync } from 'fs'
import type { Response } from 'express';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('stream')
  @UseInterceptors(ClassSerializerInterceptor)
  getVideoStream(@Res({ passthrough: true }) res: Response){

/*     const file = readFileSync('/workspaces/jjab_tube/jjab_tube/src/public/videos/de04de8a-38a8-4646-9cd0-527c40b73b19.mp4');

    res.set({
      'Content-Disposition': `inline; filename="example"`,
      'Content-Type': 'video/mp4'
    });

    return file; */

    /* const file = createReadStream('/workspaces/jjab_tube/jjab_tube/src/public/videos/de04de8a-38a8-4646-9cd0-527c40b73b19.mp4');
    res.set({
      'Content-Disposition': `inline; filename="example"`,
      'Content-Type': 'video/mp4'
    });

    return new StreamableFile(file); */

    const stream = createReadStream('/workspaces/jjab_tube/jjab_tube/src/public/videos/de04de8a-38a8-4646-9cd0-527c40b73b19.mp4');
    
    return new StreamableFile(stream, {
      disposition: `inline; filename="example"`,
      type: 'video/mp4',
    });
  }

  @Get('raw')
  @UseInterceptors(ClassSerializerInterceptor)
  getVideoRaw(@Res({ passthrough: true }) res: Response){

    const file = readFileSync('/workspaces/jjab_tube/jjab_tube/src/public/videos/de04de8a-38a8-4646-9cd0-527c40b73b19.mp4');

    res.set({
      'Content-Disposition': `inline; filename="example"`,
      'Content-Type': 'video/mp4'
    });

    res.send(file);

    /* const file = createReadStream('/workspaces/jjab_tube/jjab_tube/src/public/videos/de04de8a-38a8-4646-9cd0-527c40b73b19.mp4');
    res.set({
      'Content-Disposition': `inline; filename="example"`,
      'Content-Type': 'video/mp4'
    });

    return new StreamableFile(file); */

   /*  const stream = createReadStream('/workspaces/jjab_tube/jjab_tube/src/public/videos/de04de8a-38a8-4646-9cd0-527c40b73b19.mp4');
    
    return new StreamableFile(stream, {
      disposition: `inline; filename="example"`,
      type: 'video/mp4',
    });
  } */
  }
}
