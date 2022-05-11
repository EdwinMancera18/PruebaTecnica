const o = new Array();
let suma = 0;

var a = [13,4];
var b = [[1,2,3],[4,5,6]];
var c = [[12,3,6,7],[6,5,7],[4,6]];
var d = [[[1,4,6],[8,7,6]]];
var e = [1,4,[5,7,[8,9]]];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

/*o.dimension -> Devuelve el número entero que define la dimensión del
arreglo o matriz en su mayor profundidad.*/
o.dimension = function(variable){
    const edw = variable.length;
    return edw;
}

/*o.straight -> Devuelve true o false según el siguiente criterio: -True: Si el
arreglo o matriz contiene la misma cantidad de elementos en cada una de
sus dimensiones (Matriz uniforme). -False: Caso contrario.*/
o.straight = function(variable){

}

/*o.compute -> Devuelve el número entero resultado de la suma de todos los
números incluídos en la matriz sin importar el tamaño o dimensión.*/
o.compute = function(variable){
    for(var i = 0; i < variable.length; i++){
        if(variable[i]){ 
            suma += variable[i];
            return suma;
        }else{
            // for(var k = 0; k < variable[i][j].length; k++){
            //     suma += variable[i][j][k];
            // }
            for(var j = 0; j < variable[i].length; j++ ){
                suma += variable[i][j];
                return suma;
            } 
        } 
    }
}

console.log(o.dimension(d));
console.log(o.compute(b));

//--------------------------------------------------------------------------------------------------

const w = new String();

var f = "Hola Mundo";
var g = "20+10/3*1";
var h = "(20+10)/(3*1)";
var i = "20+10/(3*1)";

console.log(f);
console.log(g);
console.log(h);
console.log(i);

/*w.operation -> Devuelve un booleano según el siguiente criterio -True: Si el
texto recibido corresponde a una operación aritmética (+, -, /, *)
matemática. -False: Si el texto recibido no corresponde a ninguna operación
aritmética matemática o se encuentra mal construída.*/
w.operation = function(variable){
    if(variable.includes('+')){
        alert('encontro el signo +');
    }
}

/*w.computeStr -> Devuelve el valor computado de la operación aritmética, se deben
considerar los paréntesis &#39;(&#39; &#39;)&#39; como agrupaciones de la operación. Devuelve
false en el caso de que la operación no pueda ser computada por paréntesis
mal agrupados o en el caso de que s.operation sea false. */
w.computeStr = function(varibles){

}

console.log(w.operation(f));
