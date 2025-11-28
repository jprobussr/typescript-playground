const conversionRates = {
  euro: 1.1,
  inr: 0.012,
  usd: 1,
};

type CurrencyCode = keyof typeof conversionRates;

class Wallet<Currency extends CurrencyCode> {
  readonly currency: Currency;
  private stored: number;

  constructor(currency: Currency, remaining: number) {
    this.currency = currency;
    this.stored = remaining;
  }

  spend(amount: number) {
    if (this.stored < amount) {
      return false;
    }
    this.stored -= amount;
    return true;
  }
}
