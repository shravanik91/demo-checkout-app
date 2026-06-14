export function isValidToken(token) {
  return typeof token === "string" && token.startsWith("tok_") && token.length > 12;
}
