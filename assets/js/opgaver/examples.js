let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra(e) {
    myExtras.push(e.target.value);
    updateExtras();
}




function updateExtras() {
    let myHtml = "<ul>";

    myExtras.map((myElement)=>{
        myHtml += '<li>'+ myElement +'</li>'
    });

    myHtml += '</li>'
    myExtrasListElement.innerHTML = myHtml
}








