"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
const steering = new SteeringControl();
steering.turn('right');
const autonomousCar = new Car({
    isRunning: true,
});
