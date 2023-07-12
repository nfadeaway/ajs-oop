import Character from './character';

export default class Swordsman extends Character {
  constructor(name, health, level, attack, defence, type = 'Swordsman') {
    super(name, type, health, level, attack, defence);
    this.attack = 40;
    this.defence = 10;
  }
}
