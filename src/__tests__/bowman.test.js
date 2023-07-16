import Bowman from '../bowman';

test('Правильно создается объект класса Bowman', () => {
  const bowmanChar = new Bowman('Персонаж');
  const correctStats = {
    name: 'Персонаж',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(bowmanChar).toEqual(correctStats);
});
