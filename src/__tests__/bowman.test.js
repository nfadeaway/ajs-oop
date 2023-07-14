import Bowman from '../bowman';

test('create Bowman', () => {
  const result = new Bowman('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Bowman');
  expect(result.attack).toBe(25);
  expect(result.defence).toBe(25);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});
