import { getObstacleEvents } from './computer-vision';

interface Events {
  ObstacleLeft: boolean;
  ObstacleRight: boolean;
}

interface AutonomousCar {
  isRunning?: boolean;
  respond(events: Events): void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class Car implements AutonomousCar {
  isRunning?: boolean;
  steeringControl: Steering | undefined;

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond(events: Events): void {
    if (!this.isRunning) {
      console.log('Car is off');
    }

    Object.keys(events).forEach((eventKey) => {
      if (!events[eventKey as keyof Events]) {
        return;
      }

      if (eventKey === 'ObstacleLeft') {
        this.steeringControl?.turn('right');
      }

      if (eventKey === 'ObstacleRight') {
        this.steeringControl?.turn('left');
      }
    });
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

//steering.turn('right');

const autonomousCar = new Car({
  isRunning: true,
  steeringControl: steering,
});

autonomousCar.respond(getObstacleEvents());


