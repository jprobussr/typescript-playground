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
        if (this.stored < amount) {
            return false;
        }
        this.stored -= amount;
        return true;
    }
    transferTo(newCurrency) {
        const newStored = (this.stored / conversionRates.usd) * conversionRates[newCurrency];
        this.stored = 0;
        return new Wallet(newCurrency, newStored);
    }
}
const purchaseInCurrency = (wallet, tag) => {
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
}
else {
    console.log('I did not purchase the cowboy hat at this time.');
}
const falafel = purchaseInCurrency(americanWallet.transferTo('euro'), {
    currency: 'euro',
    item: 'falafel',
    price: 10,
});
if (falafel) {
    console.log('I just purchased the falafel.');
}
else {
    console.log('I did not get the falafel at this time.');
}
;
