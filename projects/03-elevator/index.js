class Elevator {
    constructor(name, lowestFloor, highestFloor) {
        this.name = name;
        this.lowestFloor = lowestFloor;
        this.highestFloor = highestFloor;
    }
}

const elevatorA = new Elevator('Elevator A', -1, 9);
const elevatorB = new Elevator('Elevator B', 0, 10);

console.log(elevatorA);
console.log(elevatorB);