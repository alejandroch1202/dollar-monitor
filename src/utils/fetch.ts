const API_URL_BCV = import.meta.env.VITE_API_URL_BCV
const API_URL_MDV = import.meta.env.VITE_API_URL_MDV
const API_KEY = import.meta.env.VITE_API_KEY

export interface fetchResult {
  price: string
  date: string
}

const reverseString = (str: string): string => {
  let reversedString: string = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString
}

const dateFormatter = (date: string): string => {
  return (
    date.substring(8, 10) +
    '/' +
    date.substring(5, 7) +
    '/' +
    date.substring(0, 4)
  )
}

export const fetchBcv = async (): Promise<fetchResult | false> => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'x-cors-api-key': API_KEY
      }
    }
    const response = await fetch(API_URL_BCV, options)
    const result = await response.text()
    const reversed = reverseString(result)
    const index = reversed.search('aleuzeneV ed lartneC ocnaB ed lanac le eugiS')
    const price = reversed.substring(index + 67, index + 72)
    const date = reversed.substring(index - 1329, index - 1339)
    return {
      price: reverseString(price),
      date: dateFormatter(reverseString(date))
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export const fetchMdv = async (): Promise<fetchResult | false> => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'x-cors-api-key': API_KEY
      }
    }
    const response = await fetch(API_URL_MDV, options)
    const result = await response.text()
    const reversed = reverseString(result)
    const index = reversed.search('>i/<>b/<\uDDD3\uD83D>b<>')
    const price = reversed.substring(index - 239, index - 245)
    const date = reversed.substring(index - 0, index - 11)
    return { price: reverseString(price), date: reverseString(date) }
  } catch (error) {
    console.log(error)
    return false
  }
}
