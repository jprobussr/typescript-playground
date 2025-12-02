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

  transferTo<NewCurrency extends CurrencyCode>(
    newCurrency: NewCurrency
  ): Wallet<NewCurrency> {
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

const americanWallet = new Wallet('usd', 150);

const hat = purchaseInCurrency(americanWallet, {
  currency: 'usd',
  item: 'Cowboy Hat',
  price: 50,
});

if (hat) {
  console.log('I purchased the cowboy hat!');
} else {
  console.log('I did not purchase the cowboy hat at this time.');
}

const falafel = purchaseInCurrency<'euro'>(americanWallet.transferTo('euro'), {
  currency: 'euro',
  item: 'falafel',
  price: 10,
});

if (falafel) {
  console.log('I just purchased the falafel.');
} else {
  console.log('I did not get the falafel at this time.');
};


