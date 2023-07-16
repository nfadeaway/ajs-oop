import Swordsman from '../swordsman';

test('Правильно создается объект класса Swordsman', () => {
  const swordsmanChar = new Swordsman('Персонаж');
  const correctStats = {
    name: 'Персонаж',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(swordsmanChar).toEqual(correctStats);
});
