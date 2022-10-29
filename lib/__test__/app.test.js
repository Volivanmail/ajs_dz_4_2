"use strict";

var _app = _interopRequireDefault(require("../app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const arrHero = [{
  name: 'мечник',
  health: 10
}, {
  name: 'маг',
  health: 100
}, {
  name: 'лучник',
  health: 80
}];
const sortarrHero = [{
  name: 'маг',
  health: 100
}, {
  name: 'лучник',
  health: 80
}, {
  name: 'мечник',
  health: 10
}];
describe('testing fuction arrSort', () => {
  const result = (0, _app.default)(arrHero);
  test('arrSort with toEqual', () => {
    expect(result).toEqual(sortarrHero);
  });
  test('arrSort with toBe', () => {
    expect(result).not.toBe(sortarrHero);
  });
});