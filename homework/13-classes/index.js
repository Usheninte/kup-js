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
}