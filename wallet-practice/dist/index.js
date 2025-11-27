"use strict";
const conversionRates = {
    euro: 1.1,
    inr: 0.012,
    usd: 1,
};
class Wallet {
    constructor(currency, remaining) {
        this.currency = currency;
        this.stored = remaining;
    }
    spend(amount) {
        if (this.stored < amount)
            return false;
        this.stored -= amount;
        return true;
    }
    transferTo(newCurrency) {
        const newStored = (this.stored / conversionRates.usd) *
            conversionRates[newCurrency];
        this.stored = 0;
        return new Wallet(newCurrency, newStored);
    }
}
const purchaseInCurrency = (wallet, tag) => {
    return wallet.spend(tag.price) && tag.item;
};
const americanWallet = new Wallet('usd', 50);
const hat = purchaseInCurrency(americanWallet, {
    currency: 'usd',
    item: 'cowboy hat',
    price: 94.99,
});
if (hat) {
    console.log('I purchased a hat... yee-haw, cowboy.');
}
else {
    console.log('I couldn\'t afford that at this time.');
}
