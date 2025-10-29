"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PasswordGenerator {
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
        const characters = 'ghost'.split('');
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
const myPasswordGenerator = new PasswordGenerator(30);
const password = myPasswordGenerator.generatePassword();
console.log(`Generated Password: ${password}`);
