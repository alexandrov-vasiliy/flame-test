export function useDebounce (fn: (...args: any[]) => void, wait: number) {
  let timeout: number

  return (...args: any[]) => {
    if (!timeout) fn(...args)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}
