import Character from './character';

export default class Bowman extends Character {
  constructor(name, health, level, attack, defence, type = 'Bowman') {
    super(name, type, health, level, attack, defence);
    this.attack = 25;
    this.defence = 25;
  }
}
