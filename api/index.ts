export const getMatchesFootball = async () => {
  const url = 'https://free-football-soccer-videos.p.rapidapi.com?&pageSize=1/'

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY as string,
      'X-RapidAPI-Host': process.env.API_HOST as string,
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}
