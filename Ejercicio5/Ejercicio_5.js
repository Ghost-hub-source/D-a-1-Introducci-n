let nombre = "Kevin"
let edad = 23
if (edad > 80){
    console.log(`Hola, ${nombre}  ya estás viejo`);
}
    function calcular80(edadActual){
    let añosFaltantes= 80 - edadActual;
    let añoActual = new Date(). getFullYear();  
    return añoActual + añosFaltantes;
}
let año80= calcular80(edad);
console.log(`Hola, ${nombre} el año en el que cumplirás 80 es ${año80}`);