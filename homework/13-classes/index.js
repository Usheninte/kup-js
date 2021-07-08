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
        this.isDriving = null;
        if (this.tripsSinceMaintenance > 100) {
            this.needsMaintenance = true;
        }
    }

    drive() {
        this.isDriving = true;
    }

    stop() {
        this.isDriving = false;
        this.tripsSinceMaintenance += 1;
    }
}

// Cars
const rangeRover = new Cars();
rangeRover.setMake('Range Rover');
rangeRover.setModel('Land Rover');
rangeRover.setYear('2020');
rangeRover.setWeight('6,920 lbs.');
// console.log(rangeRover);
const mercedesBenz = new Cars();
mercedesBenz.setMake('Mercedes-Benz');
mercedesBenz.setModel('GLE 450 4MATIC SUV');
mercedesBenz.setYear('2020');
mercedesBenz.setWeight('6,614 lbs.');
// console.log(mercedesBenz);
const rav4toyota = new Cars();
rav4toyota.setMake('Toyota');
rav4toyota.setModel('RAV4');
rav4toyota.setYear('2020');
rav4toyota.setWeight('4,610 lbs.');
// console.log(rav4toyota);

// drive cars

// const driveCar = (carObj, numOfDrives) => {
//     for (let i = 0; i < numOfDrives; i++) {
//         carObj.drive();
//         carObj.stop();
//     }
//     return {
//         trips: carObj.tripsSinceMaintenance,
//         needs: carObj.needsMaintenance
//     };
// }
// console.log(driveCar(rav4toyota, 105));