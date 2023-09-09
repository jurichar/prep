/**
 * Tri rapide
 *
 * Cette méthode fonctionne en choisissant un 'pivot' élément du tableau et
 * en partitionnant les autres éléments en deux sous-tableaux, selon qu'ils soient
 * inférieurs ou supérieurs au pivot. Les sous-tableaux sont ensuite triés récursivement.
 *
 * Pseudo-code :
 
fonction tri_rapide(liste) 
    si longueur de liste <= 1
        retourner liste
    fin si
    
    pivot = liste[0]
    liste_gauche = [élément pour élément dans liste[1:] si élément <= pivot]
    liste_droite = [élément pour élément dans liste[1:] si élément > pivot]
    
    retourner tri_rapide(liste_gauche) + [pivot] + tri_rapide(liste_droite)
fin fonction
  
 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */

export default function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  arr.slice(1).forEach((element) => {
    if (element <= pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  });

  console.log(left);
  console.log(right);

  return quickSort(left).concat([pivot], quickSort(right));
}
