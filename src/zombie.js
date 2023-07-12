import Character from './character';

export default class Zombie extends Character {
  constructor(name, health, level, attack, defence, type = 'Zombie') {
    super(name, type, health, level, attack, defence);
    this.attack = 40;
    this.defence = 10;
  }
}
