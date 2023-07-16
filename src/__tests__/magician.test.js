import Magician from '../magician';

test('Правильно создается объект класса Magician', () => {
  const magicianChar = new Magician('Персонаж');
  const correctStats = {
    name: 'Персонаж',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(magicianChar).toEqual(correctStats);
});
