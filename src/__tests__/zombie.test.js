import Zombie from '../zombie';

test('Правильно создается объект класса Zombie', () => {
  const zombieChar = new Zombie('Персонаж');
  const correctStats = {
    name: 'Персонаж',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(zombieChar).toEqual(correctStats);
});
