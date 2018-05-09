import convert from './convert';

// Function convert(10.00,”USD-MXN”)
// caso1 primer parametro debe ser numero y el segundo parámetro “MXN-USD” regresa float
test('it must return 0.5', () => {
    const resultado = convert(1,"MXN-USD"); // 1/20
    expect(resultado).toBe(0.05);
})

// Caso2  primer parametro debe ser numero y el segundo parámetro “USD-MXN” regresa float 
test('it must return 20', () => {
    const resultado = convert(1,"USD-MXN"); // 1*20
    expect(resultado).toBe(20);
})

// Caso 8 si segundo parametro no es USD-MXN o MXN-USD regresa error
test("It must return error when the second parameter is not MXN-USD or USD-MXN"), () => {
    const resultado = convert(3,"MXN-CAN");
    expect(resultado.error.message).toBe("value can't be different than MXN-USD or USD-MXN");
}

// Caso 3  que parametros no existan regresa error
test('It must return error when I send no params'), () => {
    const resultado = convert();
    expect(resultado.error.message).toBe("Params are required");
}
// Caso 4 que los parámetros no sean nulos regresa error
test('It must return error when null params are sent'), () => {
    const resultado = convert(3,null);
    expect(resultado.error.message).toBe("Params can't be null");
}
// Caso 5 el primer parámetro no debe ser funcion regresa error 
test("It must return error when funtion params are sent"), () => {
    const resultado = convert({},{});
    expect(resultado.error.message).toBe("Params can't be a function")
}
// Caso 6 parámetros no pueden ser objetos regresa error
test("It must return error when funtion params are sent"), () => {
    const resultado = convert(() => {},() => {});
    expect(resultado.error.message).toBe("Params can't be an object")
}
// Caso 7 el primer parámetro no puede ser string regresa error
test("It must return error when the first parameter is a x"), () => {
    const resultado = convert('x',"MXN-USD");
    expect(resultado.error.message).toBe("It can't add string values to integer numbers");
}



// Caso 9 no debe aceptar números negativos en el primer parámetro
test('it should return error message when I and -3 and MXN-USD', () => {
    const resultado = convert(-1,"MXN-USD");
    expect(resultado.error.message).toBe("It can't add negative numbers");
})


