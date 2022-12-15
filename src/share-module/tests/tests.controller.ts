import { Controller, Get, Param, Query } from '@nestjs/common';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private testsService: TestsService) {}

  @Get()
  getFotosTruora(@Param() Param, @Query() Query): void {
    return this.testsService.getFotos(Param, Query);
  }
}
