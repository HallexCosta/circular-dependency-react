export function generateRandomMembers(length = 5, maxNumberRange = 100) {
  return Array.from({ length }, () => Math.floor(Math.random() * maxNumberRange)); // Números de 0 a 99
}