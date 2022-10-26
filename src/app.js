export default function arrSort(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}
