// Space Mining

type Item = {
  kind: string;
};

type Diggable = Item | null;

const isItem = (diggable: Diggable): diggable is Item => {
  return diggable !== null;
};

class Mine {
  readonly possible = [
    { kind: 'rock' },
    { kind: 'iron', value: 40 },
    { kind: 'gold', value: 50 },
    { kind: 'platinum', value: 70 },
  ];

  count: number;

  constructor() {
    this.count = Math.floor(Math.random() * 10);
  }

  dig(): Diggable {
    if (this.count === 0 || Math.random() > 0.5) {
      return null;
    }
    this.count--;
    return this.possible[Math.floor(Math.random()) * this.possible.length];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }
}

let mine = new Mine();

while (!mine.isEmpty()) {
  let find = mine.dig();
  if (isItem(find)) {
    console.log(find.kind);
  } else {
    console.log('You did not find nothing. Back to work!');
  }
}
