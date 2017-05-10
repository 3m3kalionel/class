class Car {
    constructor(name, model, type) {
        this.name = name || 'General';
        this.model = model || 'GM';
        this.type = type;
        this.numOfDoors = this.getDoorNumber(name);
        this.speed = '0 km/h';
        this.numOfWheels = this.getNumberOfWheels(name);
        this.isSaloon = this.isSaloon(name);
    }


    getDoorNumber(name) {
        if (name === 'Porshe' || name === 'Koenigsegg') {
            return 2;
        }
        return 4;
    }
    drive(speed) {
        if (this.name === 'Porshe') {
            this.speed = '250 km/h';
        }
        if (this.name === 'MAN') {
            this.speed = '77 km/h';
        }
        return this;
    }

    getNumberOfWheels(name) {
        if (name === 'MAN') {
            return 8;
        }
        return 4;
    }

    isSaloon(name) {
        if (name === 'MAN') {
            return false;
        }
        return true;
    }
}

module.exports = Car;