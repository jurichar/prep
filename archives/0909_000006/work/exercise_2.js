/**
 * Tri par sélection
 *
 * Dans cet exercice, vous devez implémenter l'algorithme de tri par sélection.
 * Il fonctionne en répétitivement sélectionnant le minimum d'une partie du tableau et en le plaçant au bon endroit.
 *
 * Pseudo-code :
  
  procédure tri_selection(tableau t)
      n ← longueur(t) 
      pour i de 0 à n - 2
          min ← i       
          pour j de i + 1 à n - 1
              si t[j] < t[min], alors min ← j
          fin pour
          si min ≠ i, alors échanger t[i] et t[min]
      fin pour
  fin procédure

 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */

export default function selectSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  console.log(arr);
  return arr;
}
