import Magician from '../magician';

test('create Magician', () => {
  const result = new Magician('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Magician');
  expect(result.attack).toBe(10);
  expect(result.defence).toBe(40);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});
