import { Injectable } from '@nestjs/common';
import { generateBenfordLawNumbers, processBenfordLaw } from 'benford-law';

@Injectable()
export class BenfordAnalysisService {
  analyze(data: number[]): any {
    return processBenfordLaw(data);
  }
  calculateAverageComparisonToBL(analysis): number {
    const comparisons = Object.values(analysis.firstDigitAccuracies);
    const sum: any = comparisons.reduce(
      (total: number, comparison: number) => total + comparison,
      0,
    );

    return sum / comparisons.length;
  }
}
