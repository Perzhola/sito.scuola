const Chi_Siamo = document.getElementById("Sezione-prima-pagina");
const Servizi = document.getElementById("Sezione-seconda-pagina");
const Contatti = document.getElementById("Sezione-quarta-pagina");
const Clienti = document.getElementById("Sezione-terza-pagina");

const btn_ChiSiamo = document.getElementById("chi-siamo");
const btn_Servizi = document.getElementById("Servizi");
const btn_Contatti = document.getElementById("Contatti");
const btn_Clienti = document.getElementById("Clienti");

function Prima_pagina(){
    Chi_Siamo.style.display= "flex";
    Servizi.style.display="none";
    Contatti.style.display="none";
    Clienti.style.display="none";
}

function Seconda_pagina(){
    Chi_Siamo.style.display= "none";
    Servizi.style.display="flex";
    Contatti.style.display="none";
    Clienti.style.display="none";
}
function Terza_Pagina(){
    Chi_Siamo.style.display= "none";
    Servizi.style.display="none";
    Contatti.style.display="none";
    Clienti.style.display="flex";
}
function Quarta_pagina(){
    Chi_Siamo.style.display= "none";
    Servizi.style.display="none";
    Contatti.style.display="flex";
    Clienti.style.display="none";
}


btn_ChiSiamo.addEventListener("click", Prima_pagina);
btn_Servizi.addEventListener("click", Seconda_pagina);
btn_Contatti.addEventListener("click", Quarta_pagina);
btn_Clienti.addEventListener("click", Terza_Pagina);