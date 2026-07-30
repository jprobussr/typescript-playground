import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  isRunning?: boolean;
}

interface AutonomousCarProps {
  isRunning?: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class Car implements AutonomousCar {
  isRunning?: boolean;

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
  }
}

class SteeringControl implements Steering {
  execute(command: string): void {
    console.log(`Executing: ${command}`);
  }

  turn(direction: string): void {
    this.execute(`turn ${direction}`);
  }
}

const steering = new SteeringControl();

steering.turn('right');

const autonomousCar = new Car({
  isRunning: true,
});


