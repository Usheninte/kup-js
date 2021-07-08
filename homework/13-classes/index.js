// Classes

class Vehicle {
    constructor(needsMaintenance = false, tripsSinceMaintenance = 0) {
        this.needsMaintenance = needsMaintenance;
        this.tripsSinceMaintenance = tripsSinceMaintenance;
        this.vehicleMake = '';
        this.vehicleModel = '';
        this.vehicleYear = '';
        this.vehicleWeight = '';
    }

    setMake(vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    setModel(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    setYear(vehicleYear) {
        this.vehicleYear = vehicleYear;
    }

    setWeight(vehicleWeight) {
        this.vehicleWeight = vehicleWeight;
    }

    repair() {
        this.tripsSinceMaintenance = 0;
        this.needsMaintenance = false;
    }
}

class Cars extends Vehicle {
    constructor(needsMaintenance, tripsSinceMaintenance) {
        super(needsMaintenance, tripsSinceMaintenance);
        if (!this.isDriving) {
            this.tripsSinceMaintenance += 1;
        }

        if (this.tripsSinceMaintenance > 100) {
            this.needsMaintenance = true;
        }
    }

    drive() {
        this.isDriving = true;
    }

    stop() {
        this.isDriving = false;
    }
}

// Cars
const rangeRover = new Cars();
rangeRover.setMake('Range Rover');
rangeRover.setModel('Land Rover');
rangeRover.setYear('2020');
rangeRover.setWeight('6920 lbs.');
console.log(rangeRover);
// const mercedesBenz = new Cars();
// mercedesBenz.setMake();
// mercedesBenz.setModel();
// mercedesBenz.setYear();
// mercedesBenz.setWeight();
// console.log(mercedesBenz);
// const rav4toyota = new Cars();
// rav4toyota.setMake();
// rav4toyota.setModel();
// rav4toyota.setYear();
// rav4toyota.setWeight();
// console.log(rav4toyota);