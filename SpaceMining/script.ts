// Space Mining

// Define the basic shape
type Item = {
  kind: string;
};

//Define what digging can return
type Diggable = Item | null;

// Create type guard to tell us if we really found an item.
const isItem = (diggable: Diggable): diggable is Item => {
  return diggable !== null;
}

// Build Mine Class
class Mine {
  readonly possible = [
    { kind: 'rock' },
    { kind: 'iron', value: 40 },
    { kind: 'silver', value: 50 },
    { kind: 'platinum', value: 60 },
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
