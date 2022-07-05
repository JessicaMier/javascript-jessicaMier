const sumar =(numero1,numero2)=> numero1 + numero2

let nota1, nota2, acumulador,promedio
do{
    nota1=parseInt(prompt("Por favor ingrese nota de primer parcial"))
    nota2=parseInt(prompt("Por favor ingrese nota de segundo parcial"))
    acumulador= sumar(nota1,nota2)
    promedio =(acumulador/2)
    
    if(isNaN(nota1)|| isNaN(nota2)){
        alert("por favor, ingresa una nota valida numerica")
    }
    if ((nota1<1 || nota1>10) || (nota2<1 || nota2>10)){
        alert("Por favor ingrese una nota de 1 a 10")
    }
    
}while((isNaN(nota1) || isNaN(nota2)) || (nota1<1 || nota1>10) || (nota2<1 || nota2>10) )

if(promedio < 4){
    alert("Debes recursar la materia tu promedio es" +" " + promedio)
}else if (promedio <=4, promedio<7){
    alert("Aprobaste la materia pasas a instancia final tu promedio es"+" " + promedio)
}else if(promedio >=7){
    alert("felicidades promocionaste la materia tu promedio es" +" "+ promedio,)
}