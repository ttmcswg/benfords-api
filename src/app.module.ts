import { Module } from '@nestjs/common';
import { StockController } from './stock.controller';
import { ConfigModule } from '@nestjs/config';
import { StockService } from './stock.service';
import { BenfordAnalysisService } from './benford-analysis.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [StockController],
  providers: [StockService, BenfordAnalysisService],
})
export class AppModule {}
