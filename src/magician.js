import Character from './character';

export default class Magician extends Character {
  constructor(name, health, level, attack, defence, type = 'Magician') {
    super(name, type, health, level, attack, defence);
    this.attack = 10;
    this.defence = 40;
  }
}
