import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CoreOutput } from 'src/common/dto/core.dto';
import { Video } from '../entities/videos.entity';

export class VideoInput {
  @ApiProperty({ type: Number })
  @IsNumber()
  videoId: number;
}

export class VideoOutput extends CoreOutput {
  @ApiProperty({ type: Video })
  video?: Video;
}
