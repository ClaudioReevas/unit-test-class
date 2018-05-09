const convert = (a,b) => {
    const tipo_cambio = 20;
 //   if (!Number.isInteger(a)) return {error:{message:"It can't add float numbers"}}
    if (a < 0 || b < 0) return {error: {message: "It can't add negative numbers"}}
    if (b == "MXN-USD" || b == "USD-MXN") {
        if (b == "MXN-USD"){
            return a / tipo_cambio;
        }
        if (b == "USD-MXN"){
            return a * tipo_cambio;
        }
    }
    else {
        return {error: {message: "value can't be different than MXN-USD or USD-MXN"}}
    }


}
export default convert;