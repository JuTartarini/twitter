function myFunction() {
    
    
    let textTwitte = document.getElementById("myTextarea").value;
    let paragrafo = document.getElementById("paragrafo").innerHTML;
    paragrafo = paragrafo + "<p>" + textTwitte + "</p>";
    document.getElementById("paragrafo").innerHTML = paragrafo;


}

let btnTwitte =document.getElementById('btnTwitte');
btnTwitte.addEventListener('click',myFunction);
let textTwitte =document.getElementById('myTextarea');
textTwitte.addEventListener('keyup',shelly);

let quantCaracter = 140;
let count = document.getElementById("count");
count.innerHTML = quantCaracter;


function enableButton(condicional)
{
    //let textTwitte = document.getElementById("myTextarea").value;
    //if (textTwitte != "" )
    //{
        btnTwitte.disabled = condicional;
    //}
}

function getKey()
{
    let letter = event.key;
    if (letter == 'Enter' || textTwitte.scrollHeight > textTwitte.offsetHeight -1) moreRows();
    lengthTextTwitte = textTwitte.value.length;
    if(lengthTextTwitte > 0) enableButton(false);
    //if(lengthTextTwitte > 119) trocar cor
    //if(lengthTextTwitte > 129) trocar cor
    if(lengthTextTwitte > 140) enableButton(true);

    count.innerHTML = quantCaracter - lengthTextTwitte;
    

    if(lengthTextTwitte > 140) {
        enableButton(true);
    }
    
    lengthTextTwitte = textTwitte.value.length;
    

}

function moreRows()
{
    textTwitte.rows += 1;
}

function shelly()
{
    enableButton();
    getKey();
}



