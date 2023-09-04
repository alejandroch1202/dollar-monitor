const API_URL_BCV = import.meta.env.VITE_API_URL_BCV
const API_URL_MDV = import.meta.env.VITE_API_URL_MDV
const API_KEY = import.meta.env.VITE_API_KEY

export interface fetchResult {
  price: string
  date: string
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
    const index = result.search('/sites/default/files/dollar')
    const price = result.substring(index + 139, index + 144)
    const date = result.substring(index + 327, index + 337)
    return { price, date }
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
    const index = result.search('><b>🗓</b></i>')
    const price = result.substring(index + 254, index + 259)
    const date = result.substring(index + 15, index + 25)
    return { price, date }
  } catch (error) {
    console.log(error)
    return false
  }
}
