import { Injectable } from '@nestjs/common';

@Injectable()
export class PiService {
  private lastUpdatedAt: Date = new Date();
  private currentPi = 0;
  private terms = 0;

  constructor() {
    setInterval(() => this.calculateNextTerm(), 1000);
  }

  private calculateNextTerm() {
    this.terms++;
    this.currentPi = this.calculatePi(this.terms);
    this.lastUpdatedAt = new Date();
    console.log(`Iteration: ${this.terms} → π ≈ ${this.currentPi}`);
  }

  private arctan(x: number, terms: number): number {
    let sum = 0;
    for (let i = 0; i < terms; i++) {
      const sign = i % 2 === 0 ? 1 : -1;
      let numerator = x;
      for (let j = 1; j < 2 * i + 1; j++) {
        numerator *= x;
      }
      const denominator = 2 * i + 1;
      sum += sign * (numerator / denominator);
    }
    return sum;
  }

  private calculatePi(terms: number): number {
    const atan1_5 = this.arctan(1 / 5, terms);
    const atan1_239 = this.arctan(1 / 239, terms);
    return 16 * atan1_5 - 4 * atan1_239;
  }

  getPi() {
    return {
      pi: this.currentPi,
      terms: this.terms,
      updatedAt: this.lastUpdatedAt.toISOString(),
    };
  }
}
