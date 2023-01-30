const CAT_ENDPOINT_RANDOM = 'https://api.thecatapi.com/v1/images/search'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM)
  const data = await res.json()
  const fact = data[0].url
  return fact
}
