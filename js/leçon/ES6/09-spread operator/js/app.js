const list1 = [1, 2, 3, 4];
const list2 = [5, 6, 7, 8];

const v = 19;
const x = [...list1]; // j'ai copié le contenu de list1 dans x
const y = ["start", ...list1, "a", ...list2, 9, 10, v]; // j'ai copié le contenu de list1 et list2 dans y

const ihor = {
    firstName : "Ihor",
    age : 30
};

const mautasem = {
    president : "Mautasem",
    yearsOfExperience : 33
};

const copyObj = {...ihor, age : 31, country : "Ukrainia", ...mautasem};

console.log(copyObj);