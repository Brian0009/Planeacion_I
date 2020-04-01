var comienza = false;
var valMul;
var valDiv;
var valSum;
var valRes;

function comenzar() {
    var i =0 ;
    getValues();
    while(i<=39){

        a=(4*i)+4;
        b=(4*i)+1;
        c=(4*i)+2
        d=(4*i)+3;
        document.getElementById(a).firstChild.data = getResult( document.getElementById(b).innerHTML,  document.getElementById(c).innerHTML,  document.getElementById(d).innerHTML);
        i=i+1;
    }
   
  
}
function getResult(A, V, B){
    if(V==valSum){
        return parseInt(A)+parseInt(B);
    }
    else if(V==valRes){
        return parseInt(A)-parseInt(B);
    }
    else if(V==valMul){
        return parseInt(A)*parseInt(B);
    }
    else{
        return parseInt(A)/parseInt(B);
    }

}
function getValues(){
    valMul = document.getElementById("m").innerHTML
    //valMul = document.getElementById(1).value;
    valDiv = document.getElementById("d").innerHTML
    valSum = document.getElementById("s").innerHTML
    valRes = document.getElementById("r").innerHTML
}