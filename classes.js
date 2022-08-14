class Auto{
    constructor(carBrand, model, carYear, vinCode){
        this.carBrand = carBrand;
        this.model = model;
        this.carYear = +carYear;
        this.vinCode = vinCode;
    }
    log(){return `${this.carBrand} ${this.model} ${this.carYear}`;}
    checkVin(){return this.vinCode.length === 16 ? true : false;}
}

class Auto_Fuel extends Auto{
    constructor(carBrand, model, carYear, vinCode, engineVol, fuelCons){
        super(carBrand, model, carYear, vinCode);
        this.engineVol = engineVol;
        this.fuelCons = +fuelCons;
    }
    showFuelConsumption(){return `Engine Volume: ${this.engineVol} Fuel Consumption: ${this.fuelCons}L/100km`;}
}

class Auto_Electric extends Auto{
    constructor(carBrand, model, carYear, vinCode, batCapacity){
        super(carBrand, model, carYear, vinCode);
        this.batCapacity = batCapacity;
    }
    showBatteryConfig(){return `Battery Capacity: ${this.batCapacity}`;}
}

let bmw = new Auto('BMW', 'X3', 2008, 'qwwerffgge256842');
let citroen = new Auto_Fuel('Citroen', 'C4', 2020, 'qwwerffgge', '1.5L', 6);
let tesla = new Auto_Electric('Tesla', 'Modes X', 2022, '0123456789abcdef', '125kw/h')

console.log(bmw.log());
console.log(bmw.checkVin());

console.log(citroen.log());
console.log(citroen.checkVin());
console.log(citroen.showFuelConsumption());

console.log(tesla.log());
console.log(tesla.checkVin());
console.log(tesla.showBatteryConfig());