"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrSort;
function arrSort(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}