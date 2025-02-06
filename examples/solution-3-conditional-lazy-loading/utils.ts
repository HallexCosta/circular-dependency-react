export function generateRandomBranchs(length = 5, maxNumberRange = 100) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * maxNumberRange)
  ) // Numbers of 0 a 99
}
