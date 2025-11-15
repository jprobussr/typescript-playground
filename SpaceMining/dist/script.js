"use strict";
const isItem = (diggable) => {
    return diggable != null;
};
class Mine {
    constructor() {
        this.possible = [
            { kind: 'rock' },
            { kind: 'iron', value: 40 },
            { kind: 'gold', value: 50 },
            { kind: 'platinum', value: 60 },
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
    isMineEmpty() {
        return this.count === 0;
    }
}
let mine = new Mine();
while (!mine.isMineEmpty()) {
    let find = mine.dig();
    if (isItem(find)) {
        console.log(find.kind);
    }
    else {
        console.log('You did not find nothing!');
    }
}
