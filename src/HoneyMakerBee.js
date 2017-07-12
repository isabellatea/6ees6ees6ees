class HoneyMakerBee extends Bee{
  constructor(age, job, color, food, eat, honeyPot) {
    super(Bee);
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
};
