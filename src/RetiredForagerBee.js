class RetiredForagerBee extends ForagerBee {
  constructor() {
  	super();
  	this.age = 40;
  	this.job = 'gamble';
  	this.canFly = false;
  	this.color = 'grey';
  	//food is inhereted from Grub
  	this.treasureChest = [];

  }

  forage() {
  	return 'I am too old, let me play cards instead';
  }

  //eat method inherted from Grub

  gamble(treasurePiece) {
  	this.treasureChest.push(treasurePiece);

  }



};
