function myFunction() {
    let now = new Date;
    let datestring = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " - " + now.getDay() + "/" + now.getMonth() + "/" + now.getFullYear();
    let textTwitte = document.getElementById("myTextarea").value;
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = datestring + '</br>' + textTwitte;
    var container = document.getElementById('childContainer');
    container.appendChild(newParagraph);
}

let btnTwitte = document.getElementById('btnTwitte');
btnTwitte.addEventListener('click', myFunction);
let textTwitte = document.getElementById('myTextarea');
textTwitte.addEventListener('keyup', shelly);
textTwitte.addEventListener('keydown', autoSize);

const quantCaracter = 140;
let count = document.getElementById("count");
count.innerHTML = quantCaracter;

function enableButton(condicional) {
    btnTwitte.disabled = condicional;
}

function getKey() {
    let lengthTextTwitte = textTwitte.value.length;
    count.innerHTML = quantCaracter - lengthTextTwitte;
    if (lengthTextTwitte > 0) {
        enableButton(false);
        count.style.color = '#000000';
    }
    if (lengthTextTwitte >= 120) count.style.color = '#fff666';
    if (lengthTextTwitte >= 130) count.style.color = '#ff0000';
    if (lengthTextTwitte > 140) enableButton(true);
}

function autoSize(sizeRows) {
    setTimeout(function () {
        textTwitte.style.cssText = 'height:auto; padding:0';
        textTwitte.style.cssText = 'height:' + textTwitte.scrollHeight + 'px';
    }, 0);
}

function shelly() {
    enableButton();
    getKey();
}