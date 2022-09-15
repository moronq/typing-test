export const checkLanguage: (letter: string) => boolean = (letter) => {
  const result = letter.match(/([а-я]|[А-Я])/)
  return !!result
}
