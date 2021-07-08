// Vehicles

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

// Cars

class Cars extends Vehicle {
    constructor(needsMaintenance, tripsSinceMaintenance, vehicleMake,
        vehicleModel, vehicleYear, vehicleWeight) {
        super(needsMaintenance, tripsSinceMaintenance,
            vehicleMake, vehicleModel, vehicleWeight, vehicleYear);
        this.isDriving = null;
    }

    drive() {
        this.isDriving = true;
    }

    stop() {
        this.isDriving = false;
        this.tripsSinceMaintenance += 1;
        if (this.tripsSinceMaintenance > 100) {
            this.needsMaintenance = true;
        }
    }
}

const rangeRover = new Cars();
rangeRover.setMake('Range Rover');
rangeRover.setModel('Land Rover');
rangeRover.setYear('2020');
rangeRover.setWeight('6,920 lbs.');

const mercedesBenz = new Cars();
mercedesBenz.setMake('Mercedes-Benz');
mercedesBenz.setModel('GLE 450 4MATIC SUV');
mercedesBenz.setYear('2020');
mercedesBenz.setWeight('6,614 lbs.');

const rav4toyota = new Cars();
rav4toyota.setMake('Toyota');
rav4toyota.setModel('RAV4');
rav4toyota.setYear('2020');
rav4toyota.setWeight('4,610 lbs.');

// Drive cars

const driveCar = (carObj, numOfDrives) => {
    for (let i = 0; i < numOfDrives; i++) {
        carObj.drive();
        carObj.stop();
    }
    const carStatus = {
        carMake: carObj.vehicleMake,
        carModel: carObj.vehicleModel,
        carYear: carObj.vehicleYear,
        carWeight: carObj.vehicleWeight,
        carNeedsMaintenance: carObj.needsMaintenance,
        carTripsSinceMaintenance: carObj.tripsSinceMaintenance,
    };
    console.log(carStatus);
}

driveCar(rangeRover, 72);
driveCar(mercedesBenz, 27);
driveCar(rav4toyota, 103);
rav4toyota.repair(); // perform maintenance repairs
driveCar(rav4toyota, 58);

// Planes

class Planes extends Vehicle {
    constructor(needsMaintenance, tripsSinceMaintenance, vehicleMake,
        vehicleModel, vehicleYear, vehicleWeight) {
        super(needsMaintenance, tripsSinceMaintenance,
            vehicleMake, vehicleModel, vehicleWeight, vehicleYear);
        this.isFlying = null;
    }

    fly() {
        this.isFlying = true;
        if (this.needsMaintenance) {
            this.isFlying = false;
        }
    }

    land() {
        this.isFlying = false;
        if (this.tripsSinceMaintenance >= 100) {
            this.needsMaintenance = true;
            console.log('Plane cannot fly until repaired');
        } else {
            this.tripsSinceMaintenance += 1;
        }
    }
}

const boeing = new Planes();
boeing.setMake('Boeing');
boeing.setModel('787');
boeing.setYear('2009');
boeing.setWeight('380,000 lbs.')

// Fly planes

const flyPlane = (planeObj, numOfFlights) => {
    for (let i = 0; i < numOfFlights; i++) {
        planeObj.fly();
        planeObj.land();
    }
    const planeStatus = {
        planeMake: planeObj.vehicleMake,
        planeModel: planeObj.vehicleModel,
        planeYear: planeObj.vehicleYear,
        planeWeight: planeObj.vehicleWeight,
        planeNeedsMaintenance: planeObj.needsMaintenance,
        planeTripsSinceMaintenance: planeObj.tripsSinceMaintenance,
    };
    console.log(planeStatus);
}

flyPlane(boeing, 100);
flyPlane(boeing, 1);
flyPlane(boeing, 1);
boeing.repair(); // perform maintenance repairs
flyPlane(boeing, 40);

