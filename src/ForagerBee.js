class ForagerBee extends HoneyMakerBee{
  
  constructor() {
  	super();
  	this.age = 10;
  	this.job = 'find pollen';
  	// this.color = 'yellow' is inhereted from bee 
  	//this.food is inhereted
  	//this.eat is inhereted
  	this.canFly = true;
  	this.treasureChest = [];
  }

  forage(treasurePiece) {
  	this.treasureChest.push(treasurePiece)
  }

};
