import Character from '../character';
import Bowman from '../bowman';

test('Правильно создается объект класса Character', () => {
  const char = new Character('Персонаж', 'Bowman');

  const correctStats = {
    name: 'Персонаж',
    type: 'Bowman',
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(correctStats);
});

test('Неверное значение поля name, неверное значение поля type при создании объекта класса Character', () => {
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

test('Правильно меняются значения полей health, attack, deffence, level для объектов со значением health > 0 при выполнении levelUp', () => {
  const result = new Bowman('Персонаж');
  result.health = 50;
  result.levelUp();
  expect(result.health).toBe(100);
  expect(result.attack).toBe(30);
  expect(result.defence).toBe(30);
  expect(result.level).toBe(2);
});

test('Правильно меняются значения полей health, attack, deffence, level для объектов со значением health === 0 при применении levelUp', () => {
  expect(() => {
    const result = new Bowman('Персонаж');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('Правильно меняется значение поля health при применении damage', () => {
  let result = new Bowman('Персонаж');
  result.damage(10);
  expect(result.health).toBe(92.5);
  result = new Bowman('Персонаж');
  result.health = 10;
  result.damage(50);
  expect(result.health).toBe(0);
});
