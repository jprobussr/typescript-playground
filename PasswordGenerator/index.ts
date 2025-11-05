import { wordList } from "./words";

class PasswordGenerator {
  readonly passwordLength: number = 12;

  constructor(length: number) {
    this.passwordLength = length;
  }

  public generatePassword(): string {
    let password = '';

    for (let i = 0; i < this.passwordLength; i++) {
      password += this.generateRandomCharacter();
    }

    return password;
  }

  private generateRandomCharacter(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomCharacter = this.getRandomItem(characters);

    if (Math.random() < 0.5) {
      return randomCharacter.toUpperCase();
    }

    return randomCharacter;
  }

  protected getRandomItem(array: string[]): string {
    const randomInex = Math.floor(Math.random() * array.length);
    return array[randomInex];
  }
}

const adminPass = new PasswordGenerator(59);
console.log(adminPass.generatePassword());

class ReadablePasswordGenerator extends PasswordGenerator {
  private generateRandomWord(): string {
    return this.getRandomItem(wordList);
  }

  public generatePassword(): string {
    let password: string = '';
    const words: string[] = []

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