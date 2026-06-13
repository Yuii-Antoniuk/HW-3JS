let name = "kokos";
let lastName = "PaLmOvYcH  ";
let word = "wasd";

// 1
console.log(name + " " + lastName); 

// 2. Виведи довжину слова.
console.log(word.length);

// 3
console.log(word.toUpperCase());

// 4
console.log(word.toLowerCase());

// 5
console.log(lastName.includes('PaL'));

// 6
console.log(lastName[0]); 

// 7
let trimmedLastName = lastName.trim();
console.log(trimmedLastName[trimmedLastName.length - 1]);

// 8
console.log(word[0] + word[1] + word[3]);

// 10
console.log(lastName.trim());

// 11
console.log(`${name} ${lastName.trim()} ${word}`);

// 12
console.log(sentence.length);

// 13
console.log(name.startsWith("k"));

// 14
console.log(name.endsWith("s")); 

// 15
console.log(word.split("").reverse().join(""));

// 17
console.log(word.indexOf("s"));

// 19
let initials = name[0].toUpperCase() + "." + lastName.trim()[0].toUpperCase();
console.log(initials);

// етап 1
// let nameLastname = prompt("введіть ваше ім'я та прізвище");
// let codeWord = prompt("ввевіть ваше кодове слово");
// let nameAndCodeWord = `ім'я - ${nameLastname.trim().toUpperCase()} кодове слово - ${codeWord.trim().toLowerCase()}`;

// етап 2
// let random = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
// let firstLetter = nameLastname[0];
// let lasLetter = nameLastname[nameLastname.length -1];
// let password = `${firstLetter}_${random}_${lasLetter}`;

// етап 3
// let length = nameLastname.length + codeWord.length;
// let remainder = length % 4;
// let isHave15 = password.includes(15);
// let isHaveDog = password.includes("@");

// alert(`
// === РЕЗУЛЬТАТИ ГЕНЕРАЦІЇ ===

// 📝 Дані користувача:
// ${nameAndCodeWord}

// 🔐 Згенерований пароль: 
// ${password}

// 📊 Статистика та перевірки:
// • Сумарна довжина: ${length} символів
// • Остача від ділення довжини на 4: ${remainder}
// • Чи містить пароль "15"?: ${isHave15 ? "Так" : "Ні"}
// • Чи містить пароль символ "@"?: ${isHaveDog ? "Так" : "Ні"}
// `);