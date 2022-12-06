let int = 7;

/**
 * fonction qui calcul la factorielle d'un nombre n avec une boucle while
 * @param {int} n
 * @returns int
 */
function factorielle_boucle(n) {
  let resultat = n;
  if (n == 0) {
    return 1;
  } else {
    while (n > 1) {
      console.log(n);
      resultat *= n - 1;
      n--;
    }
  }
  return resultat;
}
/**
 * fonction recursive qui calcul la factorielle d'un nombre n
 * @param {int} n
 * @returns int
 */
function factorielle_recursive(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorielle_recursive(n - 1);
  }
}

/**
 * calcul la somme des factorielles jusqu'a n
 * @param {int} n
 * @returns int
 */
function somme_factorielle(n) {
  if (n == 1) {
    return 1;
  } else {
    return factorielle_recursive(n) + somme_factorielle(n - 1);
  }
}
console.log(factorielle_recursive(int));
console.log(somme_factorielle(int));
console.log(factorielle_recursive(170));
console.log(somme_factorielle(170));
