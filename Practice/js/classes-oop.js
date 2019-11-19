class Charmander {
  constructor(data) {
    this.type = 'Fire';
    this.specie = 'Lizard Pokémon';
    this.height = data.height;
    this.weight = data.weight;
    this.hasWings = false;
  }

  getType() {
    return this.type;
  }

  getSpecie() {
    return this.specie;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  canWalk() {
    return true;
  }

  canFly() {
    return this.hasWings;
  }
}

class Charmeleon extends Charmander {
  constructor(data) {
    super(data);
    this.specie = 'Flame Pokémon';
  }
}

class Charizard extends Charmeleon {
  constructor(data) {
    super(data);
    this.hasWings = true;
  }
}

const embury = new Charmander({ height: 1, weight: 15 });
const mercury = new Charmeleon({ height: 2, weight: 45 });
const morderbrand = new Charizard({ height: 10, weight: 200 });

console.log('----------Second task-----------');

console.log(embury.getType()); // -> “Fire”
console.log(embury.getType() === mercury.getType()); // -> true
console.log(mercury.getType() === morderbrand.getType()); // -> true

console.log(embury.getSpecie()); // -> “Lizard Pokémon”
console.log(mercury.getSpecie()); // -> “Flame Pokémon”
console.log(morderbrand.getSpecie() === mercury.getSpecie()); // -> true

console.log(embury.getHeight()); // -> 1
console.log(morderbrand.canWalk()); // -> true

console.log(embury.canFly()); // -> false
console.log(embury.canFly() === mercury.canFly()); // -> true
console.log(morderbrand.canFly()); // -> true
