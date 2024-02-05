const roundToDecimalPlaces = (num: number, decimalPlaces: number): number => {
  const factor = Math.pow(10, decimalPlaces)
  return Math.round(num * factor) / factor
}

export const getLanguagesPercentage = (langArray: Record<string, number>[]) => {
  let totalBytes = 0

  const languagesObject: Record<string, number> = langArray.reduce(
    (acc, langs) => {
      Object.entries(langs).forEach(([key, value]) => {
        totalBytes += value
        acc[key] = (acc[key] || 0) + value
      })
      return acc
    },
    {},
  )

  Object.entries(languagesObject).forEach(([key, value]) => {
    languagesObject[key] = roundToDecimalPlaces((value / totalBytes) * 100, 2)
  })

  return languagesObject
}
