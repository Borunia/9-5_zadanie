

function getButtonClass() {
    var navi = document.getElementById('nav');
    var elementsWithButtonClassInNav = navi.getElementsByClassName('button');
    return elementsWithButtonClassInNav;
}

var x = getButtonClass();   //przechowuje buttony o klasie button
    console.log(x);

var y = x.length;         // przechouje dlugosc tablicy
    console.log(y);


function showButtonElements(a,b) {
    for(var i=0; i<y; i++){
        alert(x[i].innerText);
    }
    
}

showButtonElements(x,y);



