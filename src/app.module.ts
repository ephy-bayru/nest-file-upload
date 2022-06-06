import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FilesController } from './files/files.controller';
import { AppService } from './app.service';
import { FilesService } from './files/files.service';

@Module({
  imports: [],
  controllers: [AppController, FilesController],
  providers: [AppService, FilesService],
})
export class AppModule {}
