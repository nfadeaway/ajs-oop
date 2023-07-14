import Daemon from '../daemon';

test('create Daemon', () => {
  const result = new Daemon('Персонаж');
  expect(result.name).toBe('Персонаж');
  expect(result.type).toBe('Daemon');
  expect(result.attack).toBe(10);
  expect(result.defence).toBe(40);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});
