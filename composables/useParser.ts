const compactNumber = (value: number) => {
  const UNIT = 4
  const DIGIT = 3
  const suffixes = ['', '만', '억']
  const suffixNum = Math.floor(('' + value).length / UNIT)
  let shortValue: number | string = parseFloat((suffixNum ? value / 10**(UNIT*suffixNum) : value).toPrecision(DIGIT))
  !(shortValue % 1) && (shortValue = shortValue.toFixed())
  return shortValue + suffixes[suffixNum]
}

export default () => {
  return {
    compactNumber,
  }
}
