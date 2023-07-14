import Zombie from '../zombie';

test('create Zombie', () => {
  const result = new Zombie('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Zombie');
  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});
