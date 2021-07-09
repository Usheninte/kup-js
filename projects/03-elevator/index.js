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

    ride(carriageName, current, destination, emergency) {
        if (destination > this.highestFloor) {
            console.log('Elevator can not go that high');
        } else if (current < this.lowestFloor) {
            console.log('Elevator can not move from this location');
        } else {
            let transitFloor = current;
            if (current < destination) {
                Elevator.move(carriageName, transitFloor, destination);
            } else {
                Elevator.move(carriageName, transitFloor, destination);
            }
        }
    }

    static emergencyButton(carriage, lastFloor, final) {
        while (lastFloor < final) {
            lastFloor++;
            return `${carriage}: Open doors`;
        }

        while (lastFloor > final) {
            lastFloor--;
            return `${carriage}: Open doors`;
        }
    }

    static move(carriage, transit, final) {
        Elevator.doors(carriage);

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

            Elevator.doors(carriage);
        }
    }

    static doors(elevatorCar) {
        console.log(`${elevatorCar}: Open doors`);
        console.log(`${elevatorCar}: Close doors`);
    }
}

const elevatorA = new Elevator('Elevator A', -1, 9);
const elevatorB = new Elevator('Elevator B', 0, 10);

elevatorA.setCurrentFloor(2);
elevatorA.setDestinationFloor(7);
// elevatorA.ride(elevatorA.name, elevatorA.currentFloor, elevatorA.destinationFloor);
elevatorA.ride(elevatorA.name, elevatorA.currentFloor, elevatorA.destinationFloor, true);

// elevatorB.setCurrentFloor(2);
// elevatorB.setDestinationFloor(7);
// elevatorB.ride(elevatorB.name, elevatorB.currentFloor, elevatorB.destinationFloor);

// console.log(elevatorA);
// console.log(elevatorB);