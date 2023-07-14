import Swordsman from '../swordsman';

test('create Swordsman', () => {
  const result = new Swordsman('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Swordsman');
  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});
