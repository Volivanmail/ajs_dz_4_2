import arrSort from '../app';

const arrHero = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortarrHero = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

describe('testing fuction arrSort', () => {
  const result = arrSort(arrHero);
  test('arrSort with toEqual', () => {
    expect(result).toEqual(sortarrHero);
  });
  test('arrSort with toBe', () => {
    expect(result).not.toBe(sortarrHero);
  });
});
