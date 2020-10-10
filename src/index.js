module.exports = function reverse (n) {
  const strOfN = (Math.sqrt(n ** 2)).toString()
  const arrOfStr = strOfN.split("")
  return Number(arrOfStr.reverse().join(""))
}
