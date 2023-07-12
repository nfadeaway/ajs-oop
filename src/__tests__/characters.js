import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('create char', () => {
  const heroInputData = {
    name: 'Персонаж',
    type: 'Bowman',
    attack: 10,
    defence: 10,
  };

  const result = new Character(
    heroInputData.name,
    heroInputData.type,
    heroInputData.attack,
    heroInputData.defence,
  );

  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Bowman');
  expect(result.attack).toBe(10);
  expect(result.defence).toBe(10);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

test('bad name, bad type', () => {
  expect(() => {
    const result = new Character('П', 'Bowman', 10, 10);
  }).toThrow();
  expect(() => {
    const result = new Character('Персонажжжжжжжжжжжжжжжжжж', 'Bowman', 10, 10);
  }).toThrow();
  expect(() => {
    const result = new Character('Персонаж', 'Bowman111', 10, 10);
  }).toThrow();
});

test('test levelUp with health > 0', () => {
  const result = new Character('Персонаж', 'Bowman', 10, 10);
  result.health = 50;
  result.levelUp();
  expect(result.health).toBe(100);
  expect(result.attack).toBe(12);
  expect(result.defence).toBe(12);
  expect(result.level).toBe(2);
});

test('test levelUp with health == 0', () => {
  expect(() => {
    const result = new Character('Персонаж', 'Bowman', 10, 10);
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('test damage', () => {
  let result = new Character('Персонаж', 'Bowman', 10, 10);
  result.damage(10);
  expect(result.health).toBe(91);
  result = new Character('Персонаж', 'Bowman', 10, 10);
  result.health = 10;
  result.damage(50);
  expect(result.health).toBe(0);
});

test('create Bowman', () => {
  const result = new Bowman('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Bowman');
  expect(result.attack).toBe(25);
  expect(result.defence).toBe(25);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

test('create Daemon', () => {
  const result = new Daemon('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Daemon');
  expect(result.attack).toBe(10);
  expect(result.defence).toBe(40);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

test('create Magician', () => {
  const result = new Magician('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Magician');
  expect(result.attack).toBe(10);
  expect(result.defence).toBe(40);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

test('create Swordsman', () => {
  const result = new Swordsman('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Swordsman');
  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

test('create Undead', () => {
  const result = new Undead('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Undead');
  expect(result.attack).toBe(25);
  expect(result.defence).toBe(25);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

test('create Zombie', () => {
  const result = new Zombie('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Zombie');
  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});
