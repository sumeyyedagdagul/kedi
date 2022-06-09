
const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "black",
  "yellow",
  "green",
  "red",
  "#BDF2D5",
  "F7D716"
];

button.addEventListener("click", changeBackgronund);
let sira = 0;
function changeBackgronund() {
  //rasgele bir renk
//const rastgelesayi = (Math.random() * colors.length );
//const seilenRenk = colors(rastgelesayi);
//console.log(rasgalesayi,seçilenRenk);
//
  //sıraya arkaplan rendi seç
  //console.log(sıra);
  //const seçilenRenk = colors[sira];
    
    //body.style.backgroundColor = red;
    if(sira ==5) sira =0;
    const secilenRenk = colors[sira];
  sira++;
  body.style.backgroundColor = secilenRenk;
}
