import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { SearchRequest } from './dto/search-request.dto';
import { SearchACK } from './dto/search-ack.dto';

@Controller('search')
export class SearchController {
  @Post()
  @HttpCode(200)
  async searchRequest(@Body() searchRequest: SearchRequest): Promise<SearchACK> {}
}
