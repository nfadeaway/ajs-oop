import Undead from '../undead';

test('Правильно создается объект класса Undead', () => {
  const undeadChar = new Undead('Персонаж');
  const correctStats = {
    name: 'Персонаж',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(undeadChar).toEqual(correctStats);
});
