import { Test, TestingModule } from '@nestjs/testing';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { BenfordAnalysisService } from './benford-analysis.service';

describe('StockController', () => {
  let stockController: StockController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StockController],
      providers: [StockService, BenfordAnalysisService],
    }).compile();

    stockController = app.get<StockController>(StockController);
  });

  describe('root', () => {
    it('should return trading volume analysis', () => {
      const mockSymbols: string[] = ['AAPL', 'GOOGL'];
      mockSymbols.forEach((mockSymbol) => {
        stockController.tradingVolumeAnalysis(mockSymbol).then((result) => {
          expect(result).toHaveProperty('symbol', mockSymbol);
          expect(result).toHaveProperty('data');
          expect(Array.isArray(result.data)).toBe(true);
          expect(result.data.every((value) => typeof value === 'number')).toBe(
            true,
          );

          expect(result).toHaveProperty('analysis');
          expect(result.analysis).toHaveProperty('firstDigitProbabilities');
          expect(result.analysis).toHaveProperty('firstDigitCounts');
          expect(result.analysis).toHaveProperty('firstDigitAccuracies');

          expect(result.analysis.firstDigitProbabilities).not.toBeNaN();
          expect(result.analysis.firstDigitCounts).not.toBeNaN();
          expect(result.analysis.firstDigitAccuracies).not.toBeNaN();
        });
      });
    });

    it('should throw an error', () => {
      stockController
        .tradingVolumeAnalysis('error')
        .then((res) => expect(res).toHaveProperty('error'));
    });
  });
});
