/**
 * Tri par tas
 *
 * Le principe est de transformer le tableau en tas (structure arborescente),
 * puis d'extraire le plus grand élément du tas, de réorganiser le tas et
 * de répéter le processus jusqu'à ce qu'il soit vide.
 *
 * Pseudo-code :
 * Construire un tas à partir du tableau
 * Pour i de la fin du tableau jusqu'à 1
 *    échanger tableau[1] avec tableau[i]
 *    réduire la taille du tas de 1
 *    appliquer récursivement la procédure de tas sur le sous-tableau réduit
 * Fin Pour
 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */

export default function heapSort(arr) {
  buildMaxHeap(arr);

  let heapSize = arr.length;

  for (let i = arr.length - 1; i >= 1; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapSize--;
    maxHeapify(arr, 0, heapSize);
  }

  return arr;
}

function buildMaxHeap(arr) {
  let heapSize = arr.length;

  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, heapSize);
  }
}

function maxHeapify(arr, i, heapSize) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, largest, heapSize);
  }
}
