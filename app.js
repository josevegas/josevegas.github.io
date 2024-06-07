var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que se selecciona una seccion
let links = document.querySelectorAll("nav a")
for(var x = 0; x < links.length; x ++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//creo las barritas de una barra de 8 puntos particular por su id
function crearBarra(id_barra){
    for(i = 0; i <= 8; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let react = document.getElementById("react");
crearBarra(react);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let redux = document.getElementById("redux");
crearBarra(redux);
let sequelize = document.getElementById("sequelize");
crearBarra(sequelize);
let postgres = document.getElementById("postgres");
crearBarra(postgres);
let netcore = document.getElementById("netcore");
crearBarra(netcore);
let mysql = document.getElementById("mysql");
crearBarra(mysql);

//Ahora guardo la cantidad de barritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posicion pertenece a un elemento
//comienza en -1 porque no tiene ninguna barrita pintada al principio
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy ha utilizar de bandera para saber si ya se ejecutó la animacion
let entro = false;

// funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 8, 0, intervalHtml);
            },100);
        const intervalreact = setInterval(function(){
            pintarBarra(react, 8, 1, intervalreact);
            },100);
        const intervaljavascript = setInterval(function(){
            pintarBarra(javascript, 8, 2, intervaljavascript);
            },100);
        const intervalredux = setInterval(function(){
            pintarBarra(redux, 8, 3, intervalredux);
            },100);
        const intervalsequelize = setInterval(function(){
            pintarBarra(sequelize, 8, 4, intervalsequelize);
            },100);
        const intervalpostgres = setInterval(function(){
            pintarBarra(postgres, 8, 5, intervalpostgres);
            },100);
        const intervalnetcore = setInterval(function(){
            pintarBarra(netcore, 8, 6, intervalnetcore);
            },100);
        const intervalmysql = setInterval(function(){
            pintarBarra(mysql, 8, 7, intervalmysql);
            },100);
    };
}


//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#075e1d";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}
