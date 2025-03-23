const users = [
  {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
    name: "Alex",
  },
  {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
    name: "Asab",
  },
  {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
    name: "Brook",
  },
  {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Daniel",
  },
  {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
    name: "John",
  },
  {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Thomas",
  },
  {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Paul",
  },
];

/**
 * Recorre el array de usuarios y encuentra aquél usuario que tiene más 'skills' de todos.
 * El resultado de tu búsqueda debería ser Asab.
 */
/**
 * Tenim un array d'objectes anomenat users. L'hem de recórrer i trobar l'usuari en què la propietat .skills tingui més strings a dins.
 * Per tant la funció haurà de recórrer cada string (for?), buscar en la propietat skills de l'objecte users[i] i retornar el nom del que tingui l'array més llarg en aquesta propietat.
 * Creem dues variables assumint que el primer usuari serà el que tingui més skills. maxUser serà l'usuari i maxSkills la llargada de la propietat skills de l'usuari
 * Recorrem els diferents objectes de l'array i si la llargada de l'objecte skills d'users de l'índex actual és major a la variable maxSkills, actualitzarem la variable maxSkills amb la length de les skills de l'user de l´'ndex actual i actualitzarem maxUser a l'objecte users de l'índex actual.
 * Retornem el nom de l'objecte users que té l'array més llarg a la propietat skills.
 */

function mostSkills(user) {
  let maxUser = users[0];
  let maxSkills = users[0].skills.length;

  for (let i = 0; i < users.length; i++) {
    if (users[i].skills.length > maxSkills) {
      maxSkills = users[i].skills.length;
      maxUser = users[i];
    }
  } return maxUser.name;
}
console.log(mostSkills(users));