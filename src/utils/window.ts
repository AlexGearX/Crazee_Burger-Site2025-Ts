export const refreshPage = () => window.location.reload()

export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key)
  if (!item) return null
  return JSON.parse(item)
}
