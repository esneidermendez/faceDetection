import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import XLSX from 'xlsx';
import { Readable } from 'stream';
import readline from 'readline';
import { diskStorage } from 'multer';

import fs from 'fs';
import path from 'path';
import url from 'url';
import { parse } from 'csv-parse';
import csv from 'csv-parser';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id/validations/:video')
  getHello(@Param() params: string, @Query() query: string): void {
    console.log('llego al controller');
    return this.appService.getFotos(params, query);
  }

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './archivos',
        filename: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  @Post('file')
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      msg: ' Archivo cargado correctamente' + file,
    };
  }
  @Get('inicio')
  getInicio(): Promise<any> {
    console.log('llego al controller Inicio');
    return this.appService.getFotosTruora();
  }
}
