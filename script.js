function Car(make, model) {
	this.make = make;
	this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function () {
	return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
	// Call Car constructor for inheritance
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
}

// Inheriting the Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
	return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
