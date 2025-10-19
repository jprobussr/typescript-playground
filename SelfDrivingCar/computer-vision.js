"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObstacleEvents = getObstacleEvents;
function getObstacleEvents() {
    const coinFlip = Boolean(Math.random() > 0.5);
    console.log(coinFlip);
    return {
        ObstacleLeft: coinFlip,
        ObstacleRight: !coinFlip,
    };
}
console.log(getObstacleEvents());
