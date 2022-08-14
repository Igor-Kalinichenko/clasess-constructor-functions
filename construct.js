function Auto(carBrand, model, carYear, vinCode){
    this.carBrand = carBrand;
    this.model = model;
    this.carYear = +carYear;
    this.vinCode = vinCode;
}
Auto.prototype.log = function(){
    return `${this.carBrand} ${this.model} ${this.carYear}`;
}
Auto.prototype.checkVin = function(){
    return this.vinCode.length === 16 ? true : false;
}

function Auto_Fuel(carBrand, model, carYear, vinCode, engineVol, fuelCons){
    this.carBrand = carBrand;
    this.model = model;
    this.carYear = +carYear;
    this.vinCode = vinCode;
    this.engineVol = engineVol;
    this.fuelCons = +fuelCons;
}
Auto_Fuel.prototype = Object.create(Auto.prototype);
Auto_Fuel.prototype.showFuelConsumption = function() {
    return `Engine Volume: ${this.engineVol} Fuel Consumption: ${this.fuelCons}L/100km`;
}

function Auto_Electric(carBrand, model, carYear, vinCode, batCapacity){
    this.carBrand = carBrand;
    this.model = model;
    this.carYear = +carYear;
    this.vinCode = vinCode;
    this.batCapacity = batCapacity;
}
Auto_Electric.prototype = Object.create(Auto.prototype);
Auto_Electric.prototype.showBatteryConfig = function(){
    return `Battery Capacity: ${this.batCapacity}`;
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