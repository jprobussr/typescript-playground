"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = require("./words");
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
        const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const randomCharacter = this.getRandomItem(characters);
        if (Math.random() < 0.5) {
            return randomCharacter.toUpperCase();
        }
        return randomCharacter;
    }
    getRandomItem(array) {
        const randomInex = Math.floor(Math.random() * array.length);
        return array[randomInex];
    }
}
const adminPass = new PasswordGenerator(59);
console.log(adminPass.generatePassword());
class ReadablePasswordGenerator extends PasswordGenerator {
    generateRandomWord() {
        return this.getRandomItem(words_1.wordList);
    }
    generatePassword() {
        let password = '';
        const words = [];
        while (password.length < this.passwordLength) {
            const word = this.generateRandomWord();
            words.push(word);
            password = words.join('-');
        }
        return password;
    }
}
const pass3 = new ReadablePasswordGenerator(55);
console.log(pass3.generatePassword());
