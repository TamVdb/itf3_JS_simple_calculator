// ? Récupérer les éléments INPUT du HTML
const INPUT_NB1 = document.getElementById("nb1");
const INPUT_NB2 = document.getElementById("nb2");

// ? Récupérer les éléments BUTTON du HTML
const BTN_PLUS = document.getElementById("plus");
const BTN_MINUS = document.getElementById("minus");
const BTN_TIMES = document.getElementById("times");
const BTN_DIVIDE = document.getElementById("divide");
const BTN_MODULO = document.getElementById("modulo");

// ? Récupérer l'élément ANSWER du HTML
const ANSWER = document.getElementById("answer");

// ? Fonction Addition
BTN_PLUS.addEventListener("click", () => {
   let nb1string = INPUT_NB1.value.replace(",", "."); // Remplace la "," par un "."
   let nb2string = INPUT_NB1.value.replace(",", ".");

   let nb1 = parseFloat(nb1string);
   let nb2 = parseFloat(nb2string);

   let somme = nb1 + nb2;

   ANSWER.innerText = somme;
});

// ? Soustraction
BTN_MINUS.addEventListener("click", () => {
   ANSWER.innerText = parseFloat(INPUT_NB1.value) - parseFloat(INPUT_NB1.value);
});

// ? Multiplication
BTN_TIMES.addEventListener("click", () => {
   ANSWER.innerText = parseFloat(INPUT_NB1.value) * parseFloat(INPUT_NB2.value);
});

// ? Division
BTN_DIVIDE.addEventListener("click", () => {
   ANSWER.innerText =
      parseFloat(INPUT_NB1.value) / parseFloat(INPUT_NB2.value).toFixed(2);
});

// ? Modulo
BTN_MODULO.addEventListener("click", () => {
   ANSWER.innerText = parseInt(INPUT_NB1.value) % parseInt(INPUT_NB2.value);
});
