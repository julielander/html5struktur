const titel = document.querySelector("#titel");
titel.textContent = "Ny Titel";
titel.innerHTML = "<h1>Ny Titel</h1>";
console.log(titel);

const undertitel = document.querySelector("#undertitel");
undertitel.textContent = "Ny underTitel";
undertitel.innerHTML = "<h2>Ny undertitel</h2>";
console.log(undertitel);

const article1 = document.querySelector("#article1");
article1.textContent = "Ny article1";
console.log(article1);

const article2 = document.querySelector("#article2");
article2.textContent = "Ny article2";
console.log(article2);

const footer = document.querySelector("#footer");
footer.textContent = "Ny Footer";
console.log(footer);

const pic = document.querySelector("#img1");
pic.src = "https://picsum.photos/200?grayscale";
pic.alt = "dette er en alt tekst";

const pic2 = document.querySelector("#img2");
pic2.src = "https://picsum.photos/200?grayscale";
pic2.alt = "dette er en alt tekst";
