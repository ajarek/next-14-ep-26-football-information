import { apiOptions, matchesType } from "@/types/types"

const options:apiOptions =  {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN,
    "Content-Type": "application/json",
  },
}
export const getMatchesfootball = async () => {
  const matchData = await fetch('https://api.football-data.org/v4/matches',options)
  return matchData.json()
}