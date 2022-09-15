export const upperCaseCheck: (letter: string, compare: string) => boolean = (
  letter,
  compare
) => {
  if (letter.toUpperCase() === compare) {
    return true
  } else {
    return false
  }
}
