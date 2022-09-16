export const findPercent: (value: number, total: number) => number = (
  value,
  total
) => {
  return +(+(value / total).toFixed(3) * 100).toFixed(1)
}
