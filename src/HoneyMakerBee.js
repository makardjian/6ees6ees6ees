class HoneyMakerBee extends Bee {
  constructor() {
  	super();
  	this.age = 10;
  	this.job = 'make honey';
  	// this.color = 'yellow' is inhereted from Bee
  	this.honeyPot = 0;
  }

 //food method is inhereted
 //eath method is inhereted

 makeHoney() {
 	this.honeyPot++
 }

 giveHoney() {
 	this.honeyPot--
 }

};
