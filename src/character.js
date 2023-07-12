export default class Character {
  constructor(name, type, attack, defence) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть не менее 2 и не более 10 символов');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неверный класс');
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
    } else {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
  }

  damage(points) {
    if ((this.health - (points * (1 - this.defence / 100))) > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      this.health = 0;
    }
  }
}
