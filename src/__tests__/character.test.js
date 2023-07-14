import Character from '../character';
import Bowman from '../bowman';

test('create char', () => {
  const heroInputData = {
    name: 'Персонаж',
    type: 'Bowman',
  };

  const result = new Character(
    heroInputData.name,
    heroInputData.type,
  );

  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Bowman');
  expect(result.attack).toBe(undefined);
  expect(result.defence).toBe(undefined);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

test('bad name, bad type', () => {
  expect(() => {
    const result = new Character('П', 'Bowman');
  }).toThrow();
  expect(() => {
    const result = new Character('Персонажжжжжжжжжжжжжжжжжж', 'Bowman');
  }).toThrow();
  expect(() => {
    const result = new Character('Персонаж', 'Bowman111');
  }).toThrow();
});

test('test levelUp with health > 0', () => {
  const result = new Bowman('Персонаж');
  result.health = 50;
  result.levelUp();
  expect(result.health).toBe(100);
  expect(result.attack).toBe(30);
  expect(result.defence).toBe(30);
  expect(result.level).toBe(2);
});

test('test levelUp with health == 0', () => {
  expect(() => {
    const result = new Bowman('Персонаж');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('test damage', () => {
  let result = new Bowman('Персонаж');
  result.damage(10);
  expect(result.health).toBe(92.5);
  result = new Bowman('Персонаж');
  result.health = 10;
  result.damage(50);
  expect(result.health).toBe(0);
});
