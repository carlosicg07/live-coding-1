// Escribe tu código aquí.
addEventListener.
let x= 'bocina';
let y = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

bigwords(x,y);

function bigwords(x,y){
    y.forEach(z => {
        if (z.length > x.length){
            console.log(z);
        }
    });
}