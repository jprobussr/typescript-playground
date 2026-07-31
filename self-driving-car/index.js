"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            console.log('Car is off');
        }
        Object.keys(events).forEach((eventKey) => {
            var _a, _b;
            if (!events[eventKey]) {
                return;
            }
            if (eventKey === 'ObstacleLeft') {
                (_a = this.steeringControl) === null || _a === void 0 ? void 0 : _a.turn('right');
            }
            if (eventKey === 'ObstacleRight') {
                (_b = this.steeringControl) === null || _b === void 0 ? void 0 : _b.turn('left');
            }
        });
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
//steering.turn('right');
const autonomousCar = new Car({
    isRunning: true,
    steeringControl: steering,
});
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
