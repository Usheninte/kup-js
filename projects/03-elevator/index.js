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
        if (destination > this.highestFloor) {
            console.log('Elevator can not go that high');
        } else if (current < this.lowestFloor) {
            console.log('Elevator can not move from this location');
        } else {
            let transitFloor = current;
            if (current < destination) {
                Elevator.move(transitFloor, destination);
            } else {
                Elevator.move(transitFloor, destination);
            }
        }
    }

    static move(transit, final) {
        while (transit < final) {
            console.log(`Elevator now at ${transit}`);
            transit++;
        }
        while (transit > final) {
            console.log(`Elevator now at ${transit}`);
            transit--;
        }
        if (transit === final) {
            console.log(`Destination reached: ${transit}`);
        }
    }
}

const elevatorA = new Elevator('Elevator A', -1, 9);
const elevatorB = new Elevator('Elevator B', 0, 10);

elevatorB.setCurrentFloor(0);
elevatorB.setDestinationFloor(13);
elevatorB.ride(elevatorB.currentFloor, elevatorB.destinationFloor);

// console.log(elevatorA);
// console.log(elevatorB);