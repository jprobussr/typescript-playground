import { wordList } from './words';

class PassWordGenerator {
  passwordLength: number = 12;

  constructor(length: number) {
    this.passwordLength = length;
  }

  generatePassword(): string {
    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      password += this.generateRandomCharacter();
    }

    return password;
  }

  generateRandomCharacter(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomCharacter = this.getRandomItem(characters);

    if (Math.random() > 0.5) {
      return randomCharacter.toUpperCase();
    }

    return randomCharacter;
  }

  getRandomItem(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}

const myPassWordGenerator = new PassWordGenerator(12);
const password = myPassWordGenerator.generatePassword();

console.log(`
Generated password:
${password}
`);
