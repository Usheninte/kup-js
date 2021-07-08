// Classes

class Vehicle {
    constructor(needsMaintenance = false, tripsSinceMaintenance = 0) {
        this.needsMaintenance = needsMaintenance;
        this.tripsSinceMaintenance = tripsSinceMaintenance;
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