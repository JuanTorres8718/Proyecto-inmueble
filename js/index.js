let valorAdministracion= [];
let cuotaAseo= [];
let derechosGimnasio= [];
let numeroApartamento= [];
let totalPagar = [];
let cantidadHabitantes=0;
let sumaDerechoGimnasio=0;
let contHabitantes=0;
let cont=0;

function calcularAdministracion(metrosCuadrados, tipoDeInmueble){
    if(tipoDeInmueble === "casa"){
        return (metrosCuadrados * 1500 + 100000);
    }else {
        return (metrosCuadrados * 1500 + 50000);
    }
    
}

function calcularCuotaAseo (administracion, metrosCuadrados){
    return(administracion*0.1+metrosCuadrados * 1000);
}


function formulario(){

    document.getElementById("errorNumeroApartamento").style.display = "none";
    document.getElementById("errorMetrosCuadrados").style.display = "none";
    document.getElementById("errorTipoInmueble").style.display = "none";
    document.getElementById("errorCantidadHabitantes").style.display = "none";

    NA = document.getElementById("numeroApartamento").value
    MC = document.getElementById("metrosCuadrados").value;  
    TI = document.getElementById("tipoInmueble").value;
    CH = document.getElementById("cantidadHabitantes").value;

    if(NA === ""){
        document.getElementById("errorNumeroApartamento").style.display = "block";
    }else if(MC === ''){
        document.getElementById("errorMetrosCuadrados").style.display = "block";
    }else if(TI === ""){
        document.getElementById("errorTipoInmueble").style.display = "block";
    }else if(CH === ''){
        document.getElementById("errorCantidadHabitantes").style.display = "block";
    }else{
        numeroApartamento[cont] = NA;
        MC = document.getElementById("metrosCuadrados").value;  
        TI = document.getElementById("tipoInmueble").value;
        CH = document.getElementById("cantidadHabitantes").value;
        
        cantidadHabitantes = CH;
    
        valorAdministracion[cont] = calcularAdministracion(MC,TI);
        cuotaAseo[cont] = calcularCuotaAseo (valorAdministracion[cont],MC);
    
        document.getElementById("metrosCuadrados").value= '';
        document.getElementById("cantidadHabitantes").value= '';
        document.getElementById("numeroApartamento").value= "";
        document.getElementById("tipoInmueble").value= "";
        document.getElementById("formConjunto").style.display = "none";
        document.getElementById("edadCadaHabitante").style.display = "block";

    }
      
    
    //   document.getElementById("valnApartamento").value = numeroApartamento;
    //   console.log(metrosCuadrados + tipoInmueble + numeroApartamento + cont);      

}

function calcularGimnasio(){

    document.getElementById("errorGenero").style.display = "none";
    document.getElementById("errorEdad").style.display = "none";

    G = document.getElementById("genero").value;
    EH = document.getElementById("edad").value;

    if(G === ""){
        document.getElementById("errorGenero").style.display = "block";
    }else if(EH === ''){
        document.getElementById("errorEdad").style.display = "block";
    }else{
        if(G === "masculino"){
            if(EH < 10){
                sumaDerechoGimnasio +=0;
            }else if(EH >= 10 && EH < 20 ){
                sumaDerechoGimnasio +=20000;
            }else if(EH >= 20 && EH < 40 ){
                sumaDerechoGimnasio +=15000;
            }else if(EH >= 40 && EH < 60 ){
                sumaDerechoGimnasio +=10000;
            }else{
                sumaDerechoGimnasio +=0;
            }
            
        }else {
            if(EH < 10){
                sumaDerechoGimnasio +=0;
            }else if(EH >= 10 && EH < 18 ){
                sumaDerechoGimnasio +=15000;
            }else if(EH >= 18 && EH < 35 ){
                sumaDerechoGimnasio +=12000;
            }else if(EH >= 35 && EH < 55 ){
                sumaDerechoGimnasio +=8000;
            }else{
                sumaDerechoGimnasio +=0;
            }
        }
        contHabitantes += 1;
        if(cantidadHabitantes > contHabitantes){ 
        contlabel = contHabitantes+1;
        document.getElementById("labelEdadGenero").innerHTML= "Seleccione el genero e ingrese la edad de la persona "+ contlabel +" que vive en el inmueble" 
        document.getElementById("genero").value= "";
        document.getElementById("edad").value= '';
        }else{
        contHabitantes = 0;
        derechosGimnasio[cont]= sumaDerechoGimnasio;
        cont = cont +1;
        sumaDerechoGimnasio = 0;
        document.getElementById("genero").value= "";
        document.getElementById("edad").value= '';
        document.getElementById("edadCadaHabitante").style.display = "none";
        document.getElementById("mensaje").style.display = "block";
        }
    }
        

}

function continuar(){
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("formConjunto").style.display = "block";
}

function resultados(){
    
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("contenedor").style.display = "block";

    for (let i = 0; i < cont; i++) {
        totalPagar[i] = valorAdministracion[i]+ cuotaAseo[i] + derechosGimnasio[i];
    }
    //   document.querySelector("div").innerHTML = JSON.stringify(metrosCuadrados);
    for (let i = 0; i < cont; i++) {

    // document.getElementById("contenedor").innerHTML += "<h1 class='h1style'> El usuario con el apartamento " + numeroApartamento[i]+ " Debera pagar las siguientes</h1> <p>Los metros cuadrados son: "+metrosCuadrados[i]+ " con el tipo de inmueble: "+tipoInmueble[i]; 
          
    document.getElementById("contenedor").innerHTML +="<section class='contenedor'><h1 class='h1style'> Recibo de cobro mensual </h1> <article class='informacion'> <label for='Apartamento-"+[i]+"'>Señores Apartamento #: </label><input type='text' name='Apartamento-"+[i]+"' value='"+numeroApartamento[i]+ "' disabled><label for='mes'>Cuota mes de: </label> <input type='text' name='mes' value='Abril' disabled> <label for='valAdmin-"+[i]+"'>Valor Administracion: </label> <input type='text' name='valAdmin-"+[i]+"' value='"+valorAdministracion[i]+ "' disabled> <label for='valCuota-"+[i]+"'>Valor Cuota de aseo: </label> <input type='text' name='valCuota-"+[i]+"' value='"+cuotaAseo[i]+ "' disabled> <label for='derGim-"+[i]+"'>Derechos de Gimnasio: </label> <input type='text' name='derGim-"+[i]+"' value='"+derechosGimnasio[i]+ "' disabled> <h2>TOTAL A PAGAR </h2> <input type='text' name='derGim-"+[i]+"' value='"+totalPagar[i]+ "' disabled> </article> </section>  "
    }
}
