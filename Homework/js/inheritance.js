class Creature {
  constructor(creature) {
    this.name = creature.name;
    this.attack = creature.attack;
    this.currentHitpoints = creature.hitpoints;
    this.totalHitpoints = creature.hitpoints;
  }

  getHitpoints() {
    return this.currentHitpoints;
  }

  setHitpoints(hitpointsToSet) {
    this.currentHitpoints = hitpointsToSet;
  }

  getTotalHitpoints() {
    return this.totalHitpoints;
  }

  setTotalHitpoints(totalHitpointsToSet) {
    this.totalHitpoints = totalHitpointsToSet;
  }

  getAttack() {
    return this.attack;
  }

  setAttack(attackToSet) {
    this.attack = attackToSet;
  }

  basicFight(target) {
    // checks if target is alive and attack
    if (target.isAlive()) {
      target.currentHitpoints -= this.attack;
      console.log(
        `${this.name} attaks ${target.name} ┌(°ʖ͡°)=o()xxxx[{:::::::::> (⊙＿⊙')`
      );
    } else {
      console.log(`${target.name} is already dead`);
    }
  }

  isAlive() {
    return !this.currentHitpoints <= 0;
  }
}

class Champion extends Creature {
  constructor(champion) {
    super(champion);
    this.shieldUp = false;
    this.attackPlus = 1;
    this.alreadyEaten = false;
  }

  rest() {
    if (this.currentHitpoints < this.totalHitpoints) {
      this.currentHitpoints += 5;
      if (this.currentHitpoints > this.totalHitpoints) {
        this.currentHitpoints = this.getTotalHitpoints;
      }
    } else {
      console.log('You have full HP!');
    }
  }

  fight(target) {
    this.basicFight(target);
    // if target is dead -> power up attack
    if (!target.isAlive()) {
      console.log(
        "Congratulations Champion you've killed him and become stronger!!!"
      );
      this.setAttack(this.getAttack() + this.attackPlus);
    }
  }

  defence() {
    if (!this.shieldUp) {
      this.shieldUp = true;
      console.log('RAISE SHIELD!!!');
    } else {
      console.log('Shield is already up');
    }
  }

  removeDefence() {
    this.shieldUp = false;
  }
}

class Monster extends Creature {
  constructor(monster) {
    super(monster);
    this.normalAttack = this.attack;
    this.doubleDamageDuration = 0;
    this.restorePercentage = 25;
    this.percentageOfMaxHP = 10;
  }

  enrage() {
    if (this.doubleDamageDuration === 0) {
      this.setAttack(this.getAttack() * 2);
      this.doubleDamageDuration = 2;
      console.log(`${this.name} is full of rage!`);
    } else {
      console.log(`${this.name} is already enraged!`);
    }
  }

  fight(target) {
    if (target.shieldUp) {
      console.log('BLOCKED!');
      target.removeDefence();
    } else {
      if (this.doubleDamageDuration > 0) {
        this.doubleDamageDuration -= 1;
      } else {
        this.setAttack(this.normalAttack);
      }
      this.basicFight(target);
      if (!target.isAlive()) {
        this.feast(target.getTotalHitpoints(), target.alreadyEaten);
        target.alreadyEaten = true;
      }
    }
  }

  feast(targetsTotalHP, targetAlreadyEaten) {
    if (!targetAlreadyEaten) {
      const restoreHP = Math.floor(
        (targetsTotalHP / 100) * this.restorePercentage
      );
      const updatedMaxHP = Math.floor(
        (targetsTotalHP / 100) * this.percentageOfMaxHP
      );
      this.setHitpoints(this.getHitpoints() + restoreHP);
      this.setTotalHitpoints(this.getTotalHitpoints() + updatedMaxHP);
      console.log(
        `${this.name} got +${restoreHP} to his health and +${updatedMaxHP} to his max health`
      );
    } else {
      console.log('This body is already eaten!');
    }
  }
}

// Create characters

const heracles = new Champion({
  name: 'Heracles',
  attack: 10,
  hitpoints: 50
});

const boar = new Monster({
  name: 'Erymanthian Boar',
  attack: 5,
  hitpoints: 100
});

console.log('----------Third task-----------');

boar.fight(heracles);
console.log(heracles.getHitpoints());
heracles.fight(boar);
console.log(boar.getHitpoints());
boar.enrage();
heracles.fight(boar);
console.log(boar.getHitpoints());
boar.fight(heracles);
console.log(heracles.getHitpoints());
heracles.fight(boar);
console.log(boar.isAlive());
console.log(boar.getHitpoints());
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
console.log(heracles.isAlive());
console.log(boar.getTotalHitpoints());
console.log(boar.getHitpoints());
