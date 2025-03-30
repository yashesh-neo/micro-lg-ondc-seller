import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './catalog/catalog.module';
import { OrderModule } from './order/order.module';
import { SearchModule } from './search/search.module';
import { TrackModule } from './track/track.module';
import { SupportModule } from './support/support.module';
import { OndcContextModule } from './ondc-context/ondc-context.module';

@Module({
  imports: [CatalogModule, OrderModule, SearchModule, TrackModule, SupportModule, OndcContextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
