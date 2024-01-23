export const getMatchesFootball = async () => {

  const url = 'https://free-football-soccer-videos.p.rapidapi.com?&pageSize=1/'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '266d2ce3f8msh3470f0d55dee766p1f241fjsn3c1a0c8c25bd',
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com',
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

// import { apiOptions, matchesType } from "@/types/types"

// const options:apiOptions =  {
//   next: { revalidate: 30 },
//   headers: {
//     "X-Auth-Token": process.env.API_TOKEN,
//     "Content-Type": "application/json",
//   },
// }
// export const getMatchesfootball = async () => {
//   const matchData = await fetch('https://api.football-data.org/v4/persons/2019/matches?status=FINISHED',options)
//   return matchData.json()
// }
