function caricamentoTag(){
    const messaggio = 'Ciao sono un messaggio di src';
    console.log(messaggio);
    const testoDaInserire = 'Benvenuto nella mia prima pagina HTML creata da Javascript!!!';
    const nodoParagrafo=document.getElementById('paragrafo-da-completare');
    nodoParagrafo.textContent=testoDaInserire;
    const nodoDiv=document.getElementById('div-sezione');
    let htmlDentroDiv='';
    htmlDentroDiv+='<p id="id-paragrafo1">Primo paragrafo</p>';
    htmlDentroDiv+='<p id="id-paragrafo2">Secondo paragrafo</p>';
    htmlDentroDiv+='<p id="id-paragrafo3">Terzo paragrafo</p>';
    nodoDiv.innerHTML=htmlDentroDiv;
    document.getElementById('paragrafo-da-completare').textContent=testoDaInserire;
    document.getElementById('div-sezione').innerHTML=htmlDentroDiv;
    //riempimento sezione for
    let htmlDentroFor='';
    for (let i = 0; i < 30; i++) {
        htmlDentroFor+=`<p id="id-paragrafo${i}">Paragrafo numero ${i}</p>`;
    }
    document.getElementById('div-sezione-for').innerHTML=htmlDentroFor;
}