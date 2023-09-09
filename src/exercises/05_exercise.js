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
  // Votre code ici
}
