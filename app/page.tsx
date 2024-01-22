import { getMatchesfootball } from "@/api";
import Image from "next/image";

export default  async function Home() {
  const football =await getMatchesfootball()
  console.log(football.matches);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>{football.matches[0].area.name}</h1>
    </main>
  );
}
