const getJST = (date: number | string): Date => {
  let dateNumber: number
  if (typeof date === 'number') {
    dateNumber = date
  } else {
    dateNumber = new Date(date).getTime()
  }
  return new Date(
    dateNumber + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
  )
}

export const beingHeld =
  (getJST(Date.now()) > getJST('2022-11-18 09:00') &&
    getJST(Date.now()) < getJST('2022-11-18 18:00')) ||
  (getJST(Date.now()) > getJST('2022-11-19 09:00') &&
    getJST(Date.now()) < getJST('2022-11-19 18:00')) ||
  (getJST(Date.now()) > getJST('2022-11-20 09:00') &&
    getJST(Date.now()) < getJST('2022-11-20 15:00'))
