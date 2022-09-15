export const doubleSpaceCheck = (arr: string[]) => {
  return arr.filter((el, i) => {
    if (el === arr[i - 1] && el === ' ') {
      return false
    } else {
      return true
    }
  })
}
