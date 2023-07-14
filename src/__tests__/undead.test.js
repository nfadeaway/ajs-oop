import Undead from '../undead';

test('create Undead', () => {
  const result = new Undead('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Undead');
  expect(result.attack).toBe(25);
  expect(result.defence).toBe(25);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});
