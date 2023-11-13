const fixNum = (num) => {
  const newnum = +num;
  const newNum = newnum.toFixed(2);
  return newNum
}
const deletPayment = (coin) => {
  if(coin.includes("TMN")){
    const newCoin = coin.replace("TMN", "")
    return newCoin
  } else if (coin.includes("USDT")){
    const newCoin = coin.replace("USDT", "")
    return newCoin
  }else if (coin.includes("BTC")){
    const newcoin = coin.replace("BTC","")
    return newcoin
}
}
const addPaymentToEnd = (coin) => {
  if (coin.includes("TMN")){
    const valueC = "TMN"
    return valueC
}else if (coin.includes("USDT")){
    const valueC =  "USDT"
    return valueC
}else if (coin.includes("BTC")){
    const valueC = "BTC"
    return valueC
}
return addPaymentToEnd
}
const persianPayment = (coin) => {
  if (coin.includes("TMN")){
    const valueC = "تومان"
    return valueC
}else if (coin.includes("USDT")){
    const valueC =  "دلار"
    return valueC
}else if (coin.includes("BTC")){
    const valueC = "بیت کوین"
    return valueC
}
}
export {fixNum , deletPayment , addPaymentToEnd , persianPayment}