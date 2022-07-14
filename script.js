/*const sumar =(numero1,numero2)=> numero1 + numero2

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



class Televisor {
    constructor(marca, modelo, pulgadas, definicion, precio, stock) {
      this.marca = marca;
      this.modelo = modelo;
      this.pulgadas = pulgadas;
      this.definicion = definicion;
      this.precio = precio;
      this.stock = stock;
    }
  }
  
  const tele1 = new Televisor("Samsung", "sm200", 55, "4k", 132000, 5);
  const tele2 = new Televisor("Lg", "lg100", 55, "4k", 129000, 4);
  const tele3 = new Televisor("Noblex", "nb300", 32, "hd", 47000, 8);
  const tele4 = new Televisor("Philco", "Ph210", 43, "Full Hd", 62800, 7);
  
  const televisores = [tele1, tele2, tele3, tele4];

  const tele5 =new Televisor("Philips","ph520",43,"Full Hd", 61500, 10);
  const tele6 =new Televisor("Tlc","sm40",40,"Full Hd", 63250, 7);
  const tele7 =new Televisor("Lg","lg50up",50,"4k", 126500, 3);
  const tele8 =new Televisor("Hitachi","hi830",55,"4k", 117999, 2);

  //agregando objetos al array 

  televisores.push(tele5, tele6,tele7,tele8);
    console.log(televisores);

  //recorrer objetos y generar aumento del 10% en los precios
 /* televisores.forEach(tele =>{
    tele.precio *=1.10
    console.log(tele)
 })
 

 let consulta = televisores.some(televisor=> televisor.marca == "Philips")

 if(consulta){
    console.log(televisores.filter(televisor => televisor.marca == "Philips"))

 }else{
    console.log("no existen televisores con esa marca")
 }
*/

/*-------------------------------------------------------*/
//Primera entrega de proyecto

class Producto {
    constructor(nombre = "", marca = "", precio = 1, stock = 1) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

function buscarProducto(productos) {
    let nombreProducto = prompt("Ingrese nombre de producto")

    let productoBuscado = productos.find(producto => producto.nombre == nombreProducto)

    if (productoBuscado == undefined) {
        console.log("Producto no encontrado")
    } else {
        console.log(productoBuscado)
    }
}

function buscarProductos(productos) {
    let precio = parseFloat(prompt("Ingrese un precio"))
    let productosBuscados = productos.filter(producto => producto.precio >= precio)

    if (productosBuscados.length == 0) {
        console.log("No se encontraron productos")
    } else {
        console.log(productosBuscados)
    }
}

function ordenarProductos(productos) {

    let metodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor"))

    if (metodoOrdenamiento === 1) {
        console.log(productos.sort((a, b) => a.precio - b.precio))
    } else if (metodoOrdenamiento === 2) {
        console.log(productos.sort((a, b) => b.precio - a.precio))
    }

}


const productos = []


let precio, stock, nombre, marca, continua, respuesta
//pedir datos al usuario
do {

    do {
        nombre = prompt("Ingrese nombre d producto").toLowerCase()
        marca = prompt("Ingrese marca de producto").toLowerCase()

    } while ((nombre.length == 0 || marca.length == 0))

    //Validacion de precio y stock.
    do {
        precio = parseFloat(prompt("Ingrese precio de producto"))
        stock = parseInt(prompt("Ingrese stock de producto"))

    } while ((isNaN(precio) || isNaN(stock)) || (precio <= 0 || stock <= 0))

    const producto = new Producto(nombre, marca, precio, stock)
    productos.push(producto)
    continua = prompt("¿Desea ingresar otro producto?").toLowerCase()
} while (continua != "no")


do {
    respuesta = parseInt(prompt(`Ingrese numero para:
        1- Buscar un producto
        2- Buscar productos por precio
        3- Ordenar de menor a mayor
     
    `))
} while (respuesta < 1 || respuesta > 3)


switch (respuesta) {
    case 1:
        buscarProducto(productos)
        break
    case 2:
        buscarProductos(productos)
        break
    case 3:
        ordenarProductos(productos)
        break
    default:
        alert("Opcion no valida")
        break
}