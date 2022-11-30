let pikachuAttack = 50;
let psyduckAttack = 65;

// let pokemonBattle = () => {
//   return pikachuAttack > psyduckAttack
//     ? "Pikachu is more OP than Psyduck"
//     : "Psyduck is more OP than Pikachu";
// };
// console.log(
//   pikachuAttack === psyduckAttack
//     ? "Pikachu and Psyduck are evenly matched"
//     : pokemonBattle()
// );

if (pikachuAttack > psyduckAttack) {
  console.log("Pikachu is more OP than Psyduck");
} else if (psyduckAttack > pikachuAttack) {
  console.log("Psyduck is more OP than Pikachu");
} else {
  console.log("Pikachu and Psyduck are evenly matched");
}

let pikachuHealth = 100;
let pikachuDefense = 40;

console.log("Psyduck attacked!");

if (pikachuHealth <= psyduckAttack) {
  pikachuHealth = 0;
  console.log("Pikachu fainted");
} else {
  pikachuHealth -= psyduckAttack;
  console.log(`Pikachu took a hit! his HP is now ${pikachuHealth}`);
}

console.log("Pikachu counter-attacks with thunderwave");

let coinflip = true;
Math.random() < 0.5 ? (coinflip = false) : (coinflip = true);

console.log(
  coinflip ? "Psyduck is now paralyzed" : "Pikachu's thunderwave missed!"
);

console.log("Psyduck is angry and uses fury swipes!");
