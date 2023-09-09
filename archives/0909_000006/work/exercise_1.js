/**
 * Tri par insertion
 *
 * Dans cet exercice, vous devez implémenter l'algorithme de tri par insertion.
 * Il construit le tableau final un élément à la fois, en prenant un élément et en l'insérant à la bonne place dans la partie déjà triée du tableau.
 *
 * Pseudo-code :
 * Pour chaque index du tableau
 *   Tant que index > 0 et que l'élément à index est moins que l'élément à index - 1
 *     Échanger les deux éléments
 *     Diminuer l'index
 *   Fin Tant que
 * Fin Pour
 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */

export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
}
