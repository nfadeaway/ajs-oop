import Daemon from '../daemon';

test('Правильно создается объект класса Daemon', () => {
  const daemonChar = new Daemon('Персонаж');
  const correctStats = {
    name: 'Персонаж',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(daemonChar).toEqual(correctStats);
});
