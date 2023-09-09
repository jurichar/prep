/**
 * Tri fusion
 *
 * Dans cet exercice, vous devez implémenter l'algorithme de tri fusion.
 * C'est un algorithme de tri par comparaison basé sur le principe diviser pour régner.
 *
 * Pseudo-code :

fonction tri_fusion(tableau T)
   si taille de T ≤ 1
       retourner T
   fin si

   * Trouver le milieu du tableau
   milieu = taille de T / 2 

   * Diviser le tableau en deux moitiés
   gauche = T[0, 1, ..., milieu-1]
   droite = T[milieu, ..., taille de T-1]

   * Trier récursivement les deux moitiés
   gauche = tri_fusion(gauche)
   droite = tri_fusion(droite)

   * Fusionner les deux moitiés triées
   retourner fusionner(gauche, droite)
fin fonction

fonction fusionner(tableau gauche, tableau droite)
   tableau résultat = []
   
   tant que gauche et droite ne sont pas vides
       si premier élément de gauche ≤ premier élément de droite
           ajouter premier élément de gauche à résultat
           retirer premier élément de gauche
       sinon
           ajouter premier élément de droite à résultat
           retirer premier élément de droite
       fin si
   fin tant que
   
  * Si un des tableaux n'est pas vide, ajouter le reste au résultat
   ajouter le reste de gauche et droite à résultat

   retourner résultat
fin fonction

 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */

export default function fusionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);

  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  left = fusionSort(left);
  right = fusionSort(right);

  return fusion(left, right);
}

function fusion(left, right) {
  let res = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left[0]);
      left.shift();
    } else {
      res.push(right[0]);
      right.shift();
    }
  }

  if (left.length) {
    res = res.concat(left);
  }

  if (right.length) {
    res = res.concat(right);
  }

  console.log(res);
  return res;
}
