/**
 * Tri rapide
 *
 * Cette méthode fonctionne en choisissant un 'pivot' élément du tableau et
 * en partitionnant les autres éléments en deux sous-tableaux, selon qu'ils soient
 * inférieurs ou supérieurs au pivot. Les sous-tableaux sont ensuite triés récursivement.
 *
 * Pseudo-code :
 * si indexDebut < indexFin
 *    indexPivot = partitionner(tableau, indexDebut, indexFin)
 *    triRapide(tableau, indexDebut, indexPivot - 1)
 *    triRapide(tableau, indexPivot + 1, indexFin)
 * fin si
 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */
export default function quickSort(arr) {
  // Votre code ici
}
