import Character from './character';

export default class Undead extends Character {
  constructor(name, health, level, attack, defence, type = 'Undead') {
    super(name, type, health, level, attack, defence);
    this.attack = 25;
    this.defence = 25;
  }
}
