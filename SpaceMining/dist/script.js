"use strict";
const isItem = (diggable) => {
    return diggable != null;
};
class Mine {
    constructor() {
        this.possible = [
            { kind: 'rock' },
            { kind: 'iron', value: 40 },
            { kind: 'gold', value: 60 },
            { kind: 'platinum', value: 90 },
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
        console.log('Nothing');
    }
}
