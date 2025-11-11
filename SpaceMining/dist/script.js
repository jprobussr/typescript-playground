"use strict";
// Space Mining
const isItem = (diggable) => {
    return diggable != null;
};
class Mine {
    constructor() {
        this.possible = [
            { kind: 'rock' },
            { kind: 'iron', value: 10 },
            { kind: 'gold', value: 20 },
            { kind: 'platinum', value: 30 },
        ];
        this.count = Math.floor(Math.random() * 10);
    }
    dig() {
        if (this.count === 0 || Math.random() > 0.5) {
            return null;
        }
        this.count--;
        return this.possible[Math.floor(Math.random() * this.possible.length)];
    }
    isEmpty() {
        return this.count === 0;
    }
}
let mine = new Mine();
while (!mine.isEmpty()) {
    let find = mine.dig();
    if (isItem(find)) {
        console.log(find.kind);
    }
    else {
        console.log('You did not find nothing. Back to work!');
    }
}
