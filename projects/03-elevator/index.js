class Elevator {
    constructor(name, lowestFloor, highestFloor) {
        this.name = name;
        this.currentFloor = null;
        this.destinationFloor = null;
        this.lowestFloor = lowestFloor;
        this.highestFloor = highestFloor;
    }

    setCurrentFloor(current) {
        this.currentFloor = current;
    }

    setDestinationFloor(destination) {
        this.destinationFloor = destination;
    }

    ride(current, destination) {
        let transitFloor = current;
        if (current < destination) {
            while (transitFloor < destination) {
                console.log(`Elevator now at ${transitFloor}`);
                transitFloor++;
            }
            if (transitFloor === destination) {
                console.log(`Destination reached: ${transitFloor}`);
            }
        } else {
            while (transitFloor > destination) {
                console.log(`Elevator now at ${transitFloor}`);
                transitFloor--;
            }
            if (transitFloor === destination) {
                console.log(`Destination reached: ${transitFloor}`);
            }
        }
    }
}

const elevatorA = new Elevator('Elevator A', -1, 9);
const elevatorB = new Elevator('Elevator B', 0, 10);

elevatorA.setCurrentFloor(2);
elevatorA.setDestinationFloor(6);
elevatorA.ride(elevatorA.currentFloor, elevatorA.destinationFloor);

// console.log(elevatorA);
// console.log(elevatorB);