/**
 * Tri à bulles
 *
 * Dans cet exercice, vous devez implémenter l'algorithme de tri à bulles.
 * Il fonctionne en répétant le balayage du tableau à trier, en comparant chaque paire d'éléments adjacents et en les inversant si nécessaire.
 *
 * Pseudo-code :
 * tri_à_bulles(Tableau T)
 *    pour i allant de (taille de T)-1 à 1
 *        pour j allant de 0 à i-1
 *            si T[j+1] < T[j]
 *                (T[j+1], T[j]) ← (T[j], T[j+1])
 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */

export default function bubbleSort(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  let n = arr.length;
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
