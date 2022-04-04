/**
 * Utiliser le tableau suivant
 */
const visiteurs = [
  ['Gérard', 'Freschi', 'gfreschi0@discuz.net'],
  ['Bendicty', 'Foster-Smith', 'bfostersmith1@mysql.com'],
  ['Michelle', 'Draude', 'mdraude2@csmonitor.com'],
  ['Cathee', 'Meineck', 'cmeineck3@t-online.de'],
  ['Marianna', 'Coal', 'mcoal4@creativecommons.org'],
];


/**
 * 1. Vérifier si le nom de famille "Meineck" existe dans le tableau. 
 * Afficher un message en conséquence.
 */

// Solution 2

for(let i = 0; i < visiteurs.length; i++) {
  //console.log(visiteurs[i]);
  for (let j = 0; j < visiteurs[i].length; j++) {
    //console.log(visiteurs[i][j]);
    if(visiteurs[i][j] === 'Meineck') {
      console.log('Hey ho! Salut toi !');
      //permet de stopper la boucle
      break;
    }
    else {
      console.log('je ne te connais pas');
    }
    
  }
}

//Solution 1

visiteurs.forEach(visiteur => {
  if(visiteur.includes("Meineck")) {
    console.log('Hey, salut toi');
  }
})


/**
 * 2. Trier le tableau par ordre alphabétique selon les prénoms.
 */

visiteurs.sort();
console.log(visiteurs);


/**
 * 3. Créer un tableau contenant que les adresses e-mails en utilisant l'instruction map().
 */

const emails = visiteurs.map(visiteur => {
  return visiteur[2];
});

console.log(emails);

 