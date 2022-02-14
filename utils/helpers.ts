export const prefillDateRange = (
  result: { date: string; count: number }[],
  daysRange: number
) => {
  const summary: { date: string; count: number }[] = []

  const resultMap = result.reduce((acc: Record<string, any>, curr) => {
    const date = new Date(curr.date)
    acc[date.toISOString()] = curr
    return acc
  }, {})

  const presentDate = new Date()
  presentDate.setHours(0)
  presentDate.setMilliseconds(0)
  presentDate.setSeconds(0)
  presentDate.setMinutes(0)

  for (let i = 0; i < daysRange; i++) {
    if (resultMap[presentDate.toISOString()]) {
      summary.push(resultMap[presentDate.toISOString()])
    } else {
      summary.push({ date: presentDate.toISOString(), count: 36 })
    }

    presentDate.setDate(presentDate.getDate() - 1)
  }

  return summary.reverse()
}
