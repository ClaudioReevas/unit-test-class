const suma = (a,b) => {
    if (a === undefined || b === undefined) return{error: {message: "Params are required"}} 
    if (a ===null || b == null) return {error: {message: "It can't add null values to integer numbers"}}
    if (typeof(a) === "object" || typeof(b) === "object") return{error:{message: "Objects are not allowed as parameters"}}
    if (typeof(a) === "function" || typeof(b) === "function") return{error:{message: "Functions are not allowed as parameters"}}
    if (a < 0 || b < 0) return {error: {message: "It can't add negative numbers"}}
    if (isNaN(a) || isNaN(b)) return {error:{message:"It can't add string values to integer numbers"}}
    if (!Number.isInteger(a) || !Number.isInteger(b)) return {error:{message:"It can't add float numbers"}}
    return a+b;
}

module.exports = suma;
// export default suma; // lo comentamos y pusimos la linea de arriba pq no soporta ema script 6 en jenkins