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

  transferTo<NewCurrency extends CurrencyCode>(newCurrency: NewCurrency) {
    const newStored =
      (this.stored / conversionRates.usd) * conversionRates[newCurrency];

    this.stored = 0;

    return new Wallet(newCurrency, newStored);
  }
}

interface PriceTag<Currency extends CurrencyCode> {
  currency: Currency;
  item: string;
  price: number;
}

const purchaseInCurrency = <Currency extends CurrencyCode>(
  wallet: Wallet<Currency>,
  tag: PriceTag<Currency>
) => {
  return wallet.spend(tag.price) && tag.item;
};

const americanWallet = new Wallet('usd', 500);

const hat = purchaseInCurrency(americanWallet, {
  currency: 'usd',
  item: 'cowboy hat',
  price: 34.99,
});

const falafel = purchaseInCurrency<'euro'>(
  americanWallet.transferTo('euro'),
 {
  currency: 'euro',
  item: 'falafel',
  price: 10,
 }
)

if (hat) {
  console.log('I just purchased a cowboy hat in Texas.');
} else {
  console.log('I did not purchase the hat in Texax.');
}
