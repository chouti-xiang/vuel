import Cookies from 'js-cookie'
export function getCookieStorage (key) {
	console.log(111)
  return Cookies.get(key)
}

export function setCookieStorage (key, value) {
  return Cookies.set(key, value)
}

export function removeCookieStorage (key) {
  return Cookies.remove(key)
}
