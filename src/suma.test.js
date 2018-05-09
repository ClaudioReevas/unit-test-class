// import suma from './suma'; //importamos suma, que contiene la función
const suma = require('./suma');

test('it should return 4', () => {
    const resultado = suma(1,3);
    expect(resultado).toBe(4);
})

test('it should return error message when I and 1 and -3', () => {
    const resultado = suma(1,-3);
    expect(resultado.error.message).toBe("It can't add negative numbers");
})

test('It should return error when add 1.5 and 3', () => {
    const resultado = suma(1.5,3)
    expect(resultado.error.message).toBe("It can't add float numbers");
})

test('It should return error when add String and 3', () => {
    const resultado = suma('x',3)
    expect(resultado.error.message).toBe("It can't add string values to integer numbers");
})

test('It should return error when add String and 3', () => {
    const resultado = suma('x',3)
    expect(resultado.error.message).toBe("It can't add string values to integer numbers");
})

test('It should return error when add null and 3', () => {
    const resultado = suma(null,3)
    expect(resultado.error.message).toBe("It can't add null values to integer numbers");
})

test('It should return error when I send no params', () => {
    const resultado = suma()
    expect(resultado.error.message).toBe("Params are required");
})

test('It should return error when I send an object and 3', () => {
    const resultado = suma({},3)
    expect(resultado.error.message).toBe("Objects are not allowed as parameters");
})

test('It should return error when I send an function and 3', () => {
    const resultado = suma(() => {},3)
    expect(resultado.error.message).toBe("Functions are not allowed as parameters");
})