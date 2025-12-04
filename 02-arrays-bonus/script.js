const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.toReversed();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    //console.log(newName)
    longNames.push(teachers[i]);
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1,1);
console.log(teachers)

/* SE start<indice<itemstoremove non scrivere altrimenti scrivi teachers[i]
const start = 1;
const itemsToRemove = 2;
const teachers2 = [];
for (let i = 0; i < teachers.length; i++) {
  if(!(i >= start && i < start+itemsToRemove)){
    teachers2.push(teachers[i])
  }
}
console.log(teachers2)
funzionava sono riuscita a togliere due nomi perché per me era più chiaro provarne due e l'ho fatto per provare, ma non sono sicura se sia effettivamente fatto bene*/

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

let fabioPresent = false;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    fabioPresent = true;
  }
}
console.log(fabioPresent)

const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log(teachersString)


//se i (indice di teachers) è minore di teacher.length scrivo `teachers[i], ` altrimenti scrivo se è uguale scrivo solo teachers[i]
let teachersList = "";
for (i = 0; i < teachers.length; i++) {
  if (i < teachers.length-1) {
    teachersList += `${teachers[i]}, `;
  } else {
    teachersList += teachers[i];
  }
}
console.log( teachersList);
