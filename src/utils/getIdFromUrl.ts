export function getIdFromUrl (url: string): string {
  const split = url.split('/')
  return split[5]
}
