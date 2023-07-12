import Character from './character';

export default class Daemon extends Character {
  constructor(name, health, level, attack, defence, type = 'Daemon') {
    super(name, type, health, level, attack, defence);
    this.attack = 10;
    this.defence = 40;
  }
}
