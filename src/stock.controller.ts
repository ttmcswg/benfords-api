import { Controller, Get, Query } from '@nestjs/common';
import { BenfordAnalysisService } from './benford-analysis.service';
import { StockService } from './stock.service';

@Controller('stocks')
export class StockController {
  constructor(
    private readonly stockService: StockService,
    private readonly benfordAnalysisService: BenfordAnalysisService,
  ) {}
  @Get('trading-volume-analysis')
  async tradingVolumeAnalysis(@Query('symbol') symbol: string): Promise<any> {
    try {
      const data = await this.stockService.fetchHistoricalVolumes(symbol);
      const analysis = this.benfordAnalysisService.analyze(data);
      const averageComparisonToBL =
        this.benfordAnalysisService.calculateAverageComparisonToBL(analysis);

      return {
        symbol,
        data,
        analysis,
        averageComparisonToBL,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  }
}
