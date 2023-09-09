/**
 * Tri par tas
 *
 * Le principe est de transformer le tableau en tas (structure arborescente),
 * puis d'extraire le plus grand élément du tas, de réorganiser le tas et
 * de répéter le processus jusqu'à ce qu'il soit vide.
 *
 * Pseudo-code :

fonction tri_par_tas(tableau)
    construire_tas_max(tableau)
    taille_du_tas = longueur du tableau

    pour i de taille_du_tas jusqu'à 2
        échanger tableau[1] avec tableau[i]
        taille_du_tas = taille_du_tas - 1
        max_heapify(tableau, 1, taille_du_tas)
    fin pour
fin fonction

fonction construire_tas_max(tableau)
    pour i de (longueur du tableau / 2) jusqu'à 1
        max_heapify(tableau, i, longueur du tableau)
    fin pour
fin fonction

fonction max_heapify(tableau, i, taille_du_tas)
    racine = i
    gauche = 2*i
    droite = 2*i + 1

    if gauche ≤ taille_du_tas et tableau[gauche] > tableau[racine]
        racine = gauche
    fin if

    if droite ≤ taille_du_tas et tableau[droite] > tableau[racine]
        racine = droite
    fin if

    if racine ≠ i
        échanger tableau[i] avec tableau[racine]
        max_heapify(tableau, racine, taille_du_tas)
    fin if
fin fonction

 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */

export default function heapSort(arr) {
  // Votre code ici
}
