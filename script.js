let Sing = document.getElementById("button");
Sing.addEventListener("click", function () {
    
let friends = [
    "Chungus",
    "Amongus",
    "Fungus",
    "bruhngus",
    "Jeb"
];

function lineyLine(friends) {
    let counter = 99;                       
    let counterMinus = (counter-1)        
    while (counter > 2) {
        console.log(counter + " lines of code in the file, " + counter + " lines of code;" + friends + " strikes one out, clears it all out, " + counterMinus + " lines of code in the file.");
        counter--;
        counterMinus--;
    }    
    if (counter == 2) {
        console.log(counter + " lines of code in the file, " + counter + " lines of code;" + friends + " strikes one out, clears it all out, " + counterMinus + " line of code in the file.");
  }
    console.log(counterMinus + " line of code in the file, " + counterMinus + " line of code; Go to the source, declare some more, 99 lines of code in the file. ")
}

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    let h3 = document.createElement("h3");
    let h3Text = docmuent.createTextNode($friends[i]);
    h3.appendChild(h3Text);
    document.body.appendChild(h3);
    lineyLine(friends[i])
    for (let d = 0; d < i.length; d++) {
        const element = i[d];
        
    }
}});
