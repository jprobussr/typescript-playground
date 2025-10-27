"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PassWordGenerator {
    constructor(length) {
        this.passwordLength = 12;
        this.passwordLength = length;
    }
    generatePassword() {
        let password = '';
        for (let i = 0; i < this.passwordLength; i++) {
            password += this.generateRandomCharacter();
        }
        return password;
    }
    generateRandomCharacter() {
        const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const randomCharacter = this.getRandomItem(characters);
        if (Math.random() > 0.5) {
            return randomCharacter.toUpperCase();
        }
        return randomCharacter;
    }
    getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
}
const myPassWordGenerator = new PassWordGenerator(20);
const password = myPassWordGenerator.generatePassword();
console.log(`
Generated password:
${password}
`);
