import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as process from 'process';

@Injectable()
export class StockService {
  async fetchHistoricalVolumes(symbol: string): Promise<number[]> {
    const options = {
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data',
      params: {
        symbol: symbol,
        region: 'US',
      },
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      },
    };

    const historicalData = await axios.request(options);
    return historicalData.data.prices
      .map((entry) => entry.volume)
      .filter(Boolean);
  }
}
